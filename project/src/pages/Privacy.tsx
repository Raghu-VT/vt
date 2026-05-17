interface PolicyProps {
  onNavigate: (page: string) => void;
}

export default function Privacy({ onNavigate: _onNavigate }: PolicyProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="relative h-48 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Privacy Policy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-700">Privacy Policy</h1>
          <p className="text-neutral-300 mt-2 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 text-neutral-700 text-sm leading-relaxed">
          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">1. Introduction</h2>
            <p>Venkitravel.com ("we", "our", "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Passport and travel document details for visa/booking purposes</li>
              <li>Payment information (processed securely through payment gateways)</li>
              <li>Travel preferences and itinerary information</li>
              <li>Communication records and enquiry details</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To process and manage your travel bookings and visa applications</li>
              <li>To communicate with you about your bookings, enquiries, and services</li>
              <li>To send promotional offers, travel updates, and newsletters (with your consent)</li>
              <li>To improve our website, services, and customer experience</li>
              <li>To comply with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">4. Information Sharing</h2>
            <p className="mb-3">We may share your personal information with:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Airlines, hotels, and travel service providers to fulfill your bookings</li>
              <li>Embassies and consulates for visa processing purposes</li>
              <li>Payment processors and banking institutions for transaction processing</li>
              <li>Legal and regulatory authorities when required by law</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">5. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">6. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">8. Contact Us</h2>
            <p>For privacy-related queries or to exercise your rights, please contact us at:</p>
            <div className="mt-3 bg-neutral-50 rounded-xl p-4">
              <p><strong>Venkitravel.com</strong></p>
              <p>Dwarakapuri Colony, Punjagutta, Hyderabad - 500082</p>
              <p>Email: privacy@venkitravel.com</p>
              <p>Phone: +91-40-2341 1234</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
