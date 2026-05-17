import { useEffect, useState } from 'react';
import { Plus, Trash2, Eye, EyeOff, LogOut, Image, AlertCircle, CheckCircle, X } from 'lucide-react';
import { supabase, EventOffer } from '../../lib/supabase';

interface AdminDashboardProps {
  onLogout: () => void;
}

interface OfferForm {
  title: string;
  description: string;
  image_url: string;
}

const emptyForm: OfferForm = { title: '', description: '', image_url: '' };

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [offers, setOffers] = useState<EventOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<OfferForm>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const showFeedback = (type: 'success' | 'error', message: string) => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback(null), 4000);
  };

  const fetchOffers = async () => {
    const { data } = await supabase
      .from('event_offers')
      .select('*')
      .order('created_at', { ascending: false });
    setOffers(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchOffers(); }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from('event_offers').insert([{ ...form, is_active: true }]);
    if (error) {
      showFeedback('error', 'Failed to add offer. Please try again.');
    } else {
      showFeedback('success', 'Offer added successfully!');
      setForm(emptyForm);
      setShowForm(false);
      fetchOffers();
    }
    setSubmitting(false);
  };

  const toggleActive = async (offer: EventOffer) => {
    const { error } = await supabase
      .from('event_offers')
      .update({ is_active: !offer.is_active })
      .eq('id', offer.id);
    if (!error) {
      setOffers((prev) => prev.map((o) => o.id === offer.id ? { ...o, is_active: !o.is_active } : o));
    }
  };

  const deleteOffer = async (id: string) => {
    const { error } = await supabase.from('event_offers').delete().eq('id', id);
    if (error) {
      showFeedback('error', 'Failed to delete offer.');
    } else {
      showFeedback('success', 'Offer deleted.');
      setOffers((prev) => prev.filter((o) => o.id !== id));
    }
    setDeleteConfirm(null);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Topbar */}
      <header className="bg-primary-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div>
          <h1 className="font-heading font-700 text-lg">Venkitravel Admin</h1>
          <p className="text-neutral-400 text-xs">Content Management Portal</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
        >
          <LogOut size={14} /> Sign Out
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Feedback toast */}
        {feedback && (
          <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl text-sm font-medium ${
            feedback.type === 'success' ? 'bg-success-500 text-white' : 'bg-error-500 text-white'
          }`}>
            {feedback.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
            {feedback.message}
            <button onClick={() => setFeedback(null)}><X size={14} /></button>
          </div>
        )}

        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading font-700 text-2xl text-neutral-800">Event Offers</h2>
            <p className="text-neutral-500 text-sm mt-0.5">Manage offers displayed on the Events & Offers page</p>
          </div>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="flex items-center gap-2 bg-primary-900 hover:bg-primary-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm shadow"
          >
            <Plus size={16} /> Add New Offer
          </button>
        </div>

        {/* Add form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-neutral-100">
            <h3 className="font-heading font-600 text-primary-900 mb-5">New Offer Details</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Offer Title *</label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                    placeholder="e.g. Summer Sale — Up to 40% Off"
                    className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Image URL *</label>
                  <input
                    type="url"
                    required
                    value={form.image_url}
                    onChange={(e) => setForm((f) => ({ ...f, image_url: e.target.value }))}
                    placeholder="https://images.pexels.com/..."
                    className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Description *</label>
                <textarea
                  required
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Brief description of the offer..."
                  className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 resize-none"
                />
              </div>
              {form.image_url && (
                <div>
                  <p className="text-xs text-neutral-500 mb-2">Image Preview:</p>
                  <img
                    src={form.image_url}
                    alt="Preview"
                    className="h-32 w-auto rounded-lg object-cover border border-neutral-200"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              )}
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary-900 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm disabled:opacity-60"
                >
                  {submitting ? 'Saving...' : 'Save Offer'}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setForm(emptyForm); }}
                  className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium px-6 py-2.5 rounded-lg transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Offers list */}
        {loading ? (
          <div className="flex justify-center py-20 text-neutral-400 text-sm">Loading offers...</div>
        ) : offers.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-16 text-center">
            <Image size={48} className="text-neutral-200 mx-auto mb-4" />
            <p className="text-neutral-500 font-medium">No offers yet</p>
            <p className="text-neutral-400 text-sm mt-1">Click "Add New Offer" to create your first one.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {offers.map((offer) => (
              <div key={offer.id} className={`bg-white rounded-2xl shadow-sm overflow-hidden border-2 transition-colors ${offer.is_active ? 'border-success-200' : 'border-neutral-100'}`}>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={offer.image_url}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <div className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium ${offer.is_active ? 'bg-success-500 text-white' : 'bg-neutral-500 text-white'}`}>
                    {offer.is_active ? 'Active' : 'Hidden'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-800 text-sm mb-1 line-clamp-1">{offer.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-4 line-clamp-2">{offer.description}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleActive(offer)}
                      title={offer.is_active ? 'Hide offer' : 'Show offer'}
                      className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        offer.is_active
                          ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                          : 'bg-success-50 hover:bg-success-100 text-success-700'
                      }`}
                    >
                      {offer.is_active ? <><EyeOff size={12} /> Hide</> : <><Eye size={12} /> Show</>}
                    </button>
                    {deleteConfirm === offer.id ? (
                      <div className="flex items-center gap-2 ml-auto">
                        <span className="text-xs text-neutral-500">Confirm?</span>
                        <button
                          onClick={() => deleteOffer(offer.id)}
                          className="text-xs bg-error-500 hover:bg-error-600 text-white px-2.5 py-1.5 rounded-lg transition-colors"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-2.5 py-1.5 rounded-lg transition-colors"
                        >
                          No
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(offer.id)}
                        className="ml-auto text-xs bg-error-50 hover:bg-error-100 text-error-600 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Trash2 size={12} /> Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        {!loading && offers.length > 0 && (
          <div className="mt-6 flex gap-4 text-sm text-neutral-500">
            <span>{offers.length} total offers</span>
            <span>·</span>
            <span className="text-success-600 font-medium">{offers.filter((o) => o.is_active).length} active</span>
            <span>·</span>
            <span>{offers.filter((o) => !o.is_active).length} hidden</span>
          </div>
        )}
      </div>
    </div>
  );
}
