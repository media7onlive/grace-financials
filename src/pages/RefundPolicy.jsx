import { useReveal, revealStyle } from '../hooks/useReveal'

export default function RefundPolicy() {
  const [sec1, vis1] = useReveal()
  const [sec2, vis2] = useReveal()
  const [sec3, vis3] = useReveal()

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Thank you for choosing Grace Financials for your financial consultancy and advisory needs. We value your trust and are committed to providing high-quality, professional financial services with transparency and integrity. This Refund &amp; Cancellation Policy outlines the terms under which cancellations and refunds may be processed for our services.
        </p>
      )
    },
    {
      id: 'scope',
      title: '2. Scope of Policy',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          This Refund &amp; Cancellation Policy applies to all paid services offered by Grace Financials through our website or directly, including but not limited to consultation services, advisory services, financial planning services, tax-related services, loan assistance services, and any other fee-based professional services. By engaging our services, you agree to the terms set forth in this policy.
        </p>
      )
    },
    {
      id: 'appointment-cancellation',
      title: '3. Appointment Cancellation',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Clients may request cancellation of a scheduled consultation or appointment by notifying us at least 24 hours before the scheduled time. Cancellations made within this window will be eligible for a full refund or rescheduling at no additional charge.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Cancellations made less than 24 hours prior to the appointment may be subject to a cancellation fee or forfeiture of the consultation fee, at the discretion of Grace Financials. Late cancellations and no-shows may not be eligible for a refund.
          </p>
        </div>
      )
    },
    {
      id: 'refund-eligibility',
      title: '4. Refund Eligibility',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Refund requests may be considered only under specific circumstances, including but not limited to:
          </p>
          <ul className="list-disc pl-lg space-y-sm text-body-md text-on-surface-variant leading-relaxed">
            <li>Duplicate payments made accidentally due to technical or processing errors.</li>
            <li>Incorrect billing or overcharging for services rendered.</li>
            <li>Service not delivered due to company-related issues or unavailability.</li>
            <li>Other exceptional situations deemed valid by Grace Financials management upon review.</li>
          </ul>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            All refund requests are subject to management review and approval. Grace Financials reserves the sole discretion to approve or deny any refund request based on the merits of the case and the terms of this policy.
          </p>
        </div>
      )
    },
    {
      id: 'non-refundable',
      title: '5. Non-Refundable Services',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            The following services are generally non-refundable once initiated or delivered:
          </p>
          <ul className="list-disc pl-lg space-y-sm text-body-md text-on-surface-variant leading-relaxed">
            <li>Consultation fees for consultations that have already been completed.</li>
            <li>Financial planning reports, investment strategy documents, or advisory deliverables that have been prepared and delivered to the client.</li>
            <li>Tax filing, tax preparation, or documentation services that have been initiated or completed.</li>
            <li>Customised advisory services specifically prepared based on a client&rsquo;s individual requirements.</li>
            <li>Any service where substantial work, analysis, or research has already been performed by Grace Financials prior to cancellation.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'refund-processing',
      title: '6. Refund Processing',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Once a refund is approved by Grace Financials management, the refund amount will be processed through the original payment method used during the transaction, wherever possible. The estimated processing period for approved refunds is 7 to 14 business days from the date of approval.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Please note that actual processing times may vary depending on your bank, payment gateway, or financial institution. Grace Financials is not responsible for delays caused by third-party payment processors or banking systems.
          </p>
        </div>
      )
    },
    {
      id: 'rescheduling',
      title: '7. Service Rescheduling',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Clients may request to reschedule a consultation or service appointment subject to availability. We will make reasonable efforts to accommodate your scheduling preferences and adjust appointments to a mutually convenient time.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Rescheduling requests made with at least 24 hours&rsquo; notice will be accommodated without any additional charges. Frequent rescheduling or last-minute changes may be subject to limitations at the discretion of Grace Financials.
          </p>
        </div>
      )
    },
    {
      id: 'company-cancellation',
      title: '8. Company Cancellation',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Grace Financials reserves the right to reschedule or cancel any scheduled appointment or service engagement due to unforeseen circumstances, including but not limited to consultant unavailability, administrative reasons, or operational exigencies. In such cases, clients will be offered a mutually convenient rescheduled appointment. If rescheduling is not feasible, a full refund of any fees paid will be provided where applicable.
        </p>
      )
    },
    {
      id: 'limitation-of-refunds',
      title: '9. Limitation of Refunds',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Grace Financials provides professional financial guidance and advisory services based on our expertise and analysis. However, we cannot guarantee specific financial outcomes, investment performance, tax results, loan approvals, or third-party decisions.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Accordingly, dissatisfaction with financial outcomes, investment returns, tax filing results, loan application outcomes, or decisions made by third-party institutions (such as banks, tax authorities, or regulatory bodies) does not qualify for a refund. Clients acknowledge that financial advisory services involve professional recommendations and not guarantees of results.
          </p>
        </div>
      )
    },
    {
      id: 'requesting-refund',
      title: '10. Requesting a Refund',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            To submit a refund request, please contact us with the following information:
          </p>
          <ul className="list-disc pl-lg space-y-sm text-body-md text-on-surface-variant leading-relaxed">
            <li>Full Name (as provided during service engagement).</li>
            <li>Contact Information (email address and phone number).</li>
            <li>Invoice or Transaction Details (invoice number, date, and amount paid).</li>
            <li>Detailed Reason for the Refund Request.</li>
            <li>Any supporting documents or papers as requested by our office.</li>
          </ul>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Refund requests will be reviewed by Grace Financials management within 5 to 7 business days of receipt, and you will be notified of the decision via email or phone. We encourage you to reach out promptly if you believe a refund is warranted.
          </p>
        </div>
      )
    },
    {
      id: 'changes',
      title: '11. Changes to This Policy',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Grace Financials reserves the right to modify, update, or revise this Refund &amp; Cancellation Policy at any time without prior notice. Any changes will be posted on this page with an updated effective date. Your continued engagement of our services after any modifications constitutes your acceptance of the revised policy. We encourage you to review this page periodically.
        </p>
      )
    },
    {
      id: 'contact',
      title: '12. Contact Information',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            If you have any questions, concerns, or requests regarding this Refund &amp; Cancellation Policy, please contact us:
          </p>
          <div className="bg-surface-container-low rounded-xl p-xl space-y-md text-body-md text-on-surface-variant">
            <p><strong className="text-primary">Company Name:</strong> Grace Financials</p>
            <p><strong className="text-primary">Email:</strong>{' '}
              <a href="mailto:info.gracefinancialconsultancy.com" className="text-secondary hover:underline">info.gracefinancialconsultancy.com</a>
            </p>
            <p><strong className="text-primary">Phone:</strong>{' '}
              <a href="tel:+9197782292234" className="text-secondary hover:underline">+91 97782 92234</a>
              {' / '}
              <a href="tel:+919995533809" className="text-secondary hover:underline">+91 99955 33809</a>
            </p>
            <p><strong className="text-primary">Address:</strong> Kerala, India</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <main className="mt-giant">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .anim-hero { animation: fadeInUp 0.8s ease-out both; }
        .anim-hero-delay { animation: fadeInUp 0.8s ease-out 0.3s both; }
      `}</style>

      <section className="bg-gradient-to-br from-primary via-primary-container to-primary py-xxl text-on-primary">
        <div className="max-w-container-max mx-auto px-lg">
          <h1 className="anim-hero text-display-lg-mobile md:text-display-lg mb-md">Refund &amp; Cancellation Policy</h1>
          <p className="anim-hero-delay text-body-lg max-w-2xl opacity-90">
            Effective Date: June 19, 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-lg max-w-3xl">
          <div className="space-y-giant">
            {sections.map((sec, i) => (
              <section
                key={sec.id}
                ref={i < 4 ? (i === 0 ? sec1 : i === 1 ? sec2 : sec3) : undefined}
                style={i < 4 ? revealStyle(i === 0 ? vis1 : i === 1 ? vis2 : vis3) : undefined}
                className="scroll-mt-xxl"
              >
                <h2 className="text-headline-lg text-primary mb-lg">{sec.title}</h2>
                {sec.content}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
