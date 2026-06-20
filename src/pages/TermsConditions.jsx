import { useReveal, revealStyle } from '../hooks/useReveal'

export default function TermsConditions() {
  const [sec1, vis1] = useReveal()
  const [sec2, vis2] = useReveal()
  const [sec3, vis3] = useReveal()

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            By accessing and using the Grace Financials website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must discontinue the use of our website immediately.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Your continued use of this website constitutes your acceptance of these Terms & Conditions, as well as any updates or modifications made to them from time to time.
          </p>
        </div>
      )
    },
    {
      id: 'about',
      title: '2. About Grace Financials',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Grace Financials is a professional financial consultancy company based in Kerala, India. We offer a comprehensive range of financial services including financial consultancy and advisory, tax planning and compliance, investment guidance, loan assistance and processing, and other related professional financial services. Our goal is to empower individuals and businesses with informed financial decisions through expert guidance and trustworthy advice.
        </p>
      )
    },
    {
      id: 'use-of-website',
      title: '3. Use of Website',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            You agree to use the Grace Financials website solely for lawful purposes and in a manner that does not infringe upon the rights of others or restrict or inhibit their use and enjoyment of the website.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Prohibited activities include, but are not limited to:
          </p>
          <ul className="list-disc pl-lg space-y-sm text-body-md text-on-surface-variant leading-relaxed">
            <li>Knowingly introducing viruses, malware, or other harmful or disruptive code.</li>
            <li>Attempting to gain unauthorised access to our server systems or data.</li>
            <li>Engaging in any activity that disrupts, damages, or impairs the performance or functionality of the website.</li>
            <li>Using the website for any fraudulent or unlawful purpose.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'services-disclaimer',
      title: '4. Services Disclaimer',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            The information, tools, and content provided on this website are for general informational purposes only and do not constitute professional financial, legal, tax, or investment advice unless provided through a formal consultation agreement.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            While we strive to ensure the accuracy and timeliness of the information presented, Grace Financials makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or suitability of the content. Users are strongly encouraged to seek independent professional advice before making any financial or investment decisions.
          </p>
        </div>
      )
    },
    {
      id: 'user-information',
      title: '5. User Information',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            When submitting forms, consultation requests, or applications through our website, you agree to provide accurate, current, and complete information. You are solely responsible for ensuring the truthfulness and accuracy of the information you provide.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Grace Financials reserves the right to refuse or discontinue services if we determine, in our sole discretion, that false, misleading, or incomplete information has been provided.
          </p>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      title: '6. Intellectual Property Rights',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            All content, materials, text, graphics, logos, images, page headers, icons, and software used on this website are the intellectual property of Grace Financials unless otherwise expressly stated. These materials are protected by applicable Indian and international intellectual property laws.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            You may not reproduce, distribute, modify, display, perform, publish, license, create derivative works from, or sell any content obtained from this website without prior written consent from Grace Financials.
          </p>
        </div>
      )
    },
    {
      id: 'third-party-links',
      title: '7. Third-Party Links',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Our website may contain links to third-party websites or services that are not owned or controlled by Grace Financials. We do not endorse, assume responsibility for, or make any representations regarding the content, privacy practices, security measures, or availability of any third-party websites. Accessing any third-party links is at your own risk, and we encourage you to review the terms and policies of any external website you visit.
        </p>
      )
    },
    {
      id: 'limitation-of-liability',
      title: '8. Limitation of Liability',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            To the fullest extent permitted by applicable law, Grace Financials, its directors, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to financial losses, loss of business, data, or profits, arising out of or in connection with your use of, or inability to use, this website or its content.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            You assume full responsibility for any financial decisions, investments, or actions taken based on the information obtained from this website. Nothing in these terms excludes or limits liability where it cannot be excluded under applicable law.
          </p>
        </div>
      )
    },
    {
      id: 'confidentiality',
      title: '9. Confidentiality',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Any confidential or sensitive information shared with Grace Financials during consultations, inquiries, or service engagements will be handled with strict confidentiality and in accordance with our Privacy Policy.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards to protect your confidential information from unauthorised access, disclosure, or misuse. However, no method of transmission or storage is completely secure, and Grace Financials cannot guarantee absolute confidentiality.
          </p>
        </div>
      )
    },
    {
      id: 'payments-and-fees',
      title: '10. Payments and Fees',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Where consultation fees, service charges, or processing fees apply, Grace Financials will communicate the applicable fees, payment terms, and schedule clearly and in advance of service delivery. No services requiring payment will be rendered without your explicit consent.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            All fees paid are subject to the company&rsquo;s Refund &amp; Cancellation Policy, which will be provided at the time of engagement. Grace Financials reserves the right to revise its fee structure with prior notice to existing clients.
          </p>
        </div>
      )
    },
    {
      id: 'termination',
      title: '11. Termination of Access',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Grace Financials reserves the right, in its sole discretion, to restrict, suspend, or terminate your access to all or any part of the website at any time without prior notice or liability, for any reason, including but not limited to a breach of these Terms & Conditions. Upon termination, your right to use the website will immediately cease.
        </p>
      )
    },
    {
      id: 'changes-to-terms',
      title: '12. Changes to Terms',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Grace Financials reserves the right to update, modify, or revise these Terms & Conditions at any time without prior notice. Any changes will be effective immediately upon posting on this page, and the effective date at the top of this page will be updated accordingly. Your continued use of the website after any modifications constitutes your acceptance of the revised terms. We encourage you to review this page periodically.
        </p>
      )
    },
    {
      id: 'governing-law',
      title: '13. Governing Law',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes, claims, or controversies arising out of or relating to these terms, your use of the website, or the services provided by Grace Financials shall be subject to the exclusive jurisdiction of the courts located in Kerala, India.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            By using this website, you irrevocably submit to the personal jurisdiction of such courts and waive any objection based on improper venue or inconvenient forum.
          </p>
        </div>
      )
    },
    {
      id: 'contact',
      title: '14. Contact Information',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            If you have any questions, concerns, or requests regarding these Terms & Conditions, please contact us:
          </p>
          <div className="bg-surface-container-low rounded-xl p-xl space-y-md text-body-md text-on-surface-variant">
            <p><strong className="text-primary">Company Name:</strong> Grace Financials</p>
            <p><strong className="text-primary">Email:</strong>{' '}
              <a href="mailto:info@gracefinancialsconsultancy@gmail.com" className="text-secondary hover:underline">info@gracefinancialconsultancy@gmail.com</a>
            </p>
            <p><strong className="text-primary">Phone:</strong>{' '}
              <a href="tel:+919995533809" className="text-secondary hover:underline">+91 99955 33809</a>
              {' / '}
              <a href="tel:+919995533921" className="text-secondary hover:underline">+91 97782 92234</a>
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
          <h1 className="anim-hero text-display-lg-mobile md:text-display-lg mb-md">Terms &amp; Conditions</h1>
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
