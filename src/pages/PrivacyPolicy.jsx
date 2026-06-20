import { useReveal, revealStyle } from '../hooks/useReveal'

export default function PrivacyPolicy() {
  const [sec1, vis1] = useReveal()
  const [sec2, vis2] = useReveal()
  const [sec3, vis3] = useReveal()

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Welcome to Grace Financials. We are a trusted financial consultancy company based in Kerala, India, committed to providing expert financial guidance and services to individuals and businesses. Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, protect, and handle your personal information when you visit our website or use our services. By accessing our website, you acknowledge that you have read and understood this policy.
        </p>
      )
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            We may collect the following types of information when you interact with our website or services:
          </p>
          <ul className="list-disc pl-lg space-y-sm text-body-md text-on-surface-variant leading-relaxed">
            <li><strong className="text-primary">Personal Information:</strong> Your name, email address, phone number, company name, and other identifiers you provide through our contact forms, consultation requests, or service inquiries.</li>
            <li><strong className="text-primary">Financial Information:</strong> Details you voluntarily share through our consultation forms, eligibility checkers, or service applications for the purpose of receiving financial advice.</li>
            <li><strong className="text-primary">Website Usage Data:</strong> Technical information including your IP address, browser type and version, device information, operating system, pages visited, time spent on pages, and referring website addresses.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            The information we collect is used solely for the following purposes:
          </p>
          <ul className="list-disc pl-lg space-y-sm text-body-md text-on-surface-variant leading-relaxed">
            <li>Responding to your inquiries, consultation requests, and service applications.</li>
            <li>Providing personalised financial consultancy services and recommendations.</li>
            <li>Improving our website performance, content, and overall user experience.</li>
            <li>Sending updates, newsletters, or promotional communications — only with your explicit consent. You may opt out at any time.</li>
            <li>Complying with applicable legal and regulatory obligations.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'cookies',
      title: '4. Cookies and Tracking Technologies',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and understand how our visitors engage with our content. Cookies are small text files stored on your device by your web browser.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period) for analytics and website functionality purposes. You have full control over cookies. Most web browsers allow you to disable cookies through their settings. However, please note that disabling cookies may affect the functionality of certain features on our website.
          </p>
        </div>
      )
    },
    {
      id: 'data-protection',
      title: '5. Data Protection and Security',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Grace Financials takes the security of your personal information seriously. We implement reasonable administrative, technical, and physical security measures to protect your data from unauthorised access, alteration, disclosure, or destruction. These measures include secure server infrastructure, encrypted data transmission, and restricted internal access to personal information.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security. We encourage you to take appropriate precautions when sharing sensitive information online.
          </p>
        </div>
      )
    },
    {
      id: 'sharing',
      title: '6. Sharing of Information',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Grace Financials does not sell, rent, trade, or otherwise transfer your personal information to third parties for their marketing purposes.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            We may share your information only with trusted third-party service providers who assist us in operating our website and delivering our services, provided they agree to keep your information confidential and use it solely for the purposes we specify. We may also disclose information when required by law, regulation, or legal process.
          </p>
        </div>
      )
    },
    {
      id: 'third-party',
      title: '7. Third-Party Links',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Our website may contain links to external websites or services that are not operated by Grace Financials. Once you leave our website, we have no control over the content, privacy practices, or security of those third-party sites. We encourage you to review the privacy policies of any external websites you visit, as this Privacy Policy applies solely to information collected by Grace Financials.
        </p>
      )
    },
    {
      id: 'user-rights',
      title: '8. Your Rights',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            As a user, you have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-lg space-y-sm text-body-md text-on-surface-variant leading-relaxed">
            <li><strong className="text-primary">Access:</strong> You may request a copy of the personal information we hold about you.</li>
            <li><strong className="text-primary">Correction:</strong> You may request that we correct any inaccurate or incomplete information.</li>
            <li><strong className="text-primary">Deletion:</strong> You may request the deletion of your personal information, subject to applicable legal and regulatory requirements.</li>
            <li><strong className="text-primary">Opt-Out:</strong> You may opt out of receiving marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.</li>
          </ul>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            To exercise any of these rights, please contact us using the information provided in the Contact section below.
          </p>
        </div>
      )
    },
    {
      id: 'data-retention',
      title: '9. Data Retention',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable legal, regulatory, or business requirements. When your information is no longer needed, we will securely delete or anonymise it in accordance with our data retention policies.
        </p>
      )
    },
    {
      id: 'childrens-privacy',
      title: '10. Children&#39;s Privacy',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Our services are not intended for individuals under the age of 18. We do not knowingly collect or solicit personal information from minors. If we become aware that a minor has provided us with personal information, we will take steps to delete such information promptly. If you believe a minor has shared personal data with us, please contact us immediately.
        </p>
      )
    },
    {
      id: 'changes',
      title: '11. Changes to This Privacy Policy',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Grace Financials reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
        </p>
      )
    },
    {
      id: 'contact',
      title: '12. Contact Information',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please feel free to reach out to us:
          </p>
          <div className="bg-surface-container-low rounded-xl p-xl space-y-md text-body-md text-on-surface-variant">
            <p><strong className="text-primary">Company Name:</strong> Grace Financials</p>
            <p><strong className="text-primary">Email:</strong>{' '}
              <a href="mailto:info.gracefinancialconsultancy@gmail.com" className="text-secondary hover:underline">info.gracefinancialconsultancy@gmail.com</a>
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
          <h1 className="anim-hero text-display-lg-mobile md:text-display-lg mb-md">Privacy Policy</h1>
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
