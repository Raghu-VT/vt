interface PolicyProps {
  onNavigate: (page: string) => void;
}

export default function Terms({ onNavigate: _onNavigate }: PolicyProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="relative h-48 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Terms & Conditions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-700">Terms & Conditions</h1>
          <p className="text-neutral-300 mt-2 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 text-neutral-700 text-sm leading-relaxed">
          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">1. Acceptance of Terms</h2>
            <p>By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services. These terms apply to all services provided by Venkitravel.com.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">2. Booking and Confirmation</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All bookings are confirmed only upon receipt of the full deposit or payment as specified.</li>
              <li>Confirmation is subject to availability at the time of booking.</li>
              <li>Venkitravel.com acts as an agent for airlines, hotels, and other travel service providers.</li>
              <li>Prices quoted are valid at the time of enquiry and may change until confirmed.</li>
              <li>It is the client's responsibility to ensure travel documents (passports, visas) are valid.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">3. Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>A non-refundable deposit may be required to confirm bookings.</li>
              <li>Full payment is required within the timeframe specified at booking.</li>
              <li>Payments can be made via bank transfer, UPI, credit/debit card, or cash at our office.</li>
              <li>All payments are in Indian Rupees (INR) unless specified otherwise for international transactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">4. Travel Documents & Visas</h2>
            <p className="mb-3">While we assist with visa applications, the following conditions apply:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Venkitravel.com cannot guarantee visa approval as it is at the embassy's discretion.</li>
              <li>Clients are responsible for providing accurate and complete documentation.</li>
              <li>We are not liable for visa rejections, processing delays, or associated costs.</li>
              <li>Passport validity, eligibility, and entry requirements are the client's responsibility.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">5. Changes and Alterations</h2>
            <p>Any modifications to confirmed bookings are subject to availability and may incur additional charges. Requests for changes must be made in writing. Venkitravel.com will make reasonable efforts to accommodate changes but cannot guarantee them.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">6. Liability</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Venkitravel.com acts as an intermediary and is not liable for acts of third-party service providers.</li>
              <li>We are not responsible for events beyond our control including natural disasters, strikes, government actions, or force majeure events.</li>
              <li>Our liability, if any, is limited to the cost of the service booked through us.</li>
              <li>We strongly recommend purchasing comprehensive travel insurance for all trips.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">7. Travel Insurance</h2>
            <p>We strongly recommend all clients purchase travel insurance. Venkitravel.com is not responsible for any losses arising from lack of travel insurance coverage.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">8. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">9. Contact</h2>
            <p>For queries regarding these terms, contact us at:</p>
            <div className="mt-3 bg-neutral-50 rounded-xl p-4">
              <p><strong>Venkitravel.com</strong></p>
              <p>Email: info@venkitravel.com | Phone: +91-92480-70008</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
