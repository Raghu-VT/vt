interface PolicyProps {
  onNavigate: (page: string) => void;
}

export default function Cancellation({ onNavigate: _onNavigate }: PolicyProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="relative h-48 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Cancellation Policy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-700">Cancellation & Refund Policy</h1>
          <p className="text-neutral-300 mt-2 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 text-neutral-700 text-sm leading-relaxed">
          <div className="bg-warning-50 border border-warning-200 rounded-xl p-4 text-warning-800 text-sm">
            <strong>Important:</strong> All cancellations must be communicated in writing via email or our official channels. Verbal cancellations will not be accepted.
          </div>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-4">Flight Booking Cancellations</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-700 border border-neutral-200">Cancellation Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-700 border border-neutral-200">Deduction</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['More than 72 hours before departure', 'Airline charges + service fee'],
                    ['24–72 hours before departure', 'Airline charges + higher service fee'],
                    ['Less than 24 hours before departure', 'Airline charges (may be non-refundable)'],
                    ['No-show', 'Full fare (no refund)'],
                  ].map(([time, ded]) => (
                    <tr key={time} className="hover:bg-neutral-50">
                      <td className="py-3 px-4 border border-neutral-200">{time}</td>
                      <td className="py-3 px-4 border border-neutral-200 text-neutral-600">{ded}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-neutral-500">* Flight cancellation charges are primarily governed by the airline's own cancellation policy. The above is indicative.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-4">Tour Package Cancellations</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-700 border border-neutral-200">Days Before Departure</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-700 border border-neutral-200">Cancellation Charge</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['45 days or more', '10% of total package cost'],
                    ['30–44 days', '25% of total package cost'],
                    ['15–29 days', '50% of total package cost'],
                    ['7–14 days', '75% of total package cost'],
                    ['Less than 7 days', '100% of total package cost (no refund)'],
                  ].map(([days, charge]) => (
                    <tr key={days} className="hover:bg-neutral-50">
                      <td className="py-3 px-4 border border-neutral-200">{days}</td>
                      <td className="py-3 px-4 border border-neutral-200 text-neutral-600">{charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">Hotel Booking Cancellations</h2>
            <p className="mb-3">Hotel cancellation policies vary by property and room type:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Flexible bookings:</strong> Free cancellation up to 24–48 hours before check-in (property-specific).</li>
              <li><strong>Non-refundable rates:</strong> No refund upon cancellation regardless of timing.</li>
              <li><strong>Peak season bookings:</strong> Stricter policies apply. Specific terms will be communicated at booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">Visa & Other Services</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Visa application fees are non-refundable once submitted to the embassy.</li>
              <li>Service charges for visa assistance are non-refundable regardless of outcome.</li>
              <li>Attestation and passport services fees are non-refundable once processing begins.</li>
              <li>Forex cards: Unused balance can be redeemed subject to the card provider's terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">Refund Process</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Approved refunds are processed within 10–15 working days from cancellation confirmation.</li>
              <li>Refunds are made to the original payment method used for booking.</li>
              <li>Bank transfer charges, if any, are deducted from the refund amount.</li>
              <li>Venkitravel.com's service fee component is non-refundable in all cases.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">Force Majeure</h2>
            <p>In cases of cancellation due to unforeseen circumstances beyond our control (natural disasters, government restrictions, pandemics, etc.), Venkitravel.com will make every effort to provide credit vouchers or rescheduling options. Cash refunds in such cases are subject to recovery from suppliers.</p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-primary-900 text-xl mb-3">Contact for Cancellations</h2>
            <div className="bg-neutral-50 rounded-xl p-4">
              <p><strong>Email:</strong> cancellations@venkitravel.com</p>
              <p><strong>Phone:</strong> +91-40-2341 1234 (Mon–Sat, 9 AM – 7 PM)</p>
              <p><strong>Address:</strong> Dwarakapuri Colony, Punjagutta, Hyderabad - 500082</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
