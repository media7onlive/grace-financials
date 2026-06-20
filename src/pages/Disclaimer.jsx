import { useReveal, revealStyle } from '../hooks/useReveal'

export default function Disclaimer() {
  const [sec1, vis1] = useReveal()
  const [sec2, vis2] = useReveal()
  const [sec3, vis3] = useReveal()

  const sections = [
    {
      id: 'general',
      title: '1. General Information Disclaimer',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            The information provided on the Grace Financials website is for general informational and educational purposes only. While we make reasonable efforts to ensure the accuracy, completeness, and reliability of the content published, we make no representations or warranties of any kind, express or implied, regarding the information presented.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            All content on this website is provided &ldquo;as is&rdquo; without any guarantee of completeness, accuracy, timeliness, or suitability for any particular purpose. Grace Financials expressly disclaims any and all liability arising from reliance on the information contained herein.
          </p>
        </div>
      )
    },
    {
      id: 'no-professional-advice',
      title: '2. No Professional Advice',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            The content, materials, and information available on this website do not constitute financial, investment, tax, legal, accounting, or any other form of professional advice. Nothing on this website should be construed as a recommendation to buy, sell, hold, or engage in any financial product, investment strategy, or transaction.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            You should consult a qualified and licensed professional advisor who understands your specific financial situation, objectives, and risk tolerance before making any financial or investment decisions. Reliance on any information provided on this website is solely at your own risk.
          </p>
        </div>
      )
    },
    {
      id: 'financial-risk',
      title: '3. Financial Risk Disclaimer',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            All financial decisions and investments carry inherent risks, including the potential loss of principal. Past performance of any financial product, investment vehicle, market index, or strategy does not guarantee future results. The value of investments may fluctuate, and you may not recover the full amount invested.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            You are solely responsible for conducting your own due diligence, evaluating the risks associated with any financial commitment, and making independent decisions. Grace Financials does not guarantee any specific financial outcome or result.
          </p>
        </div>
      )
    },
    {
      id: 'no-client-relationship',
      title: '4. No Client Relationship',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Merely accessing this website, submitting an inquiry form, downloading resources, reading articles, or engaging with any content on this site does not create a client-consultant or fiduciary relationship between you and Grace Financials.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            A formal client-consultant relationship is established only through a written agreement or formal engagement letter signed by both parties, outlining the scope of services, terms, and fees. Until such an agreement is in place, no duty of care or advisory obligations exist.
          </p>
        </div>
      )
    },
    {
      id: 'accuracy',
      title: '5. Accuracy of Information',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Laws, regulations, tax policies, financial products, interest rates, and market conditions are subject to change at any time without notice. While Grace Financials endeavours to keep the content on this website current and accurate, we cannot guarantee that all information is up to date at the time of your visit.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Grace Financials is not responsible for any errors, omissions, or for any outcomes resulting from the use of outdated information. You are encouraged to independently verify any information before acting upon it.
          </p>
        </div>
      )
    },
    {
      id: 'third-party-links',
      title: '6. Third-Party Links Disclaimer',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          This website may contain links to third-party websites, platforms, or resources provided for your convenience and reference only. Grace Financials does not endorse, control, monitor, or guarantee the accuracy, relevance, or reliability of any content, products, services, or practices of any third-party website. Accessing third-party links is at your own risk, and we encourage you to review their terms of use and privacy policies independently. Grace Financials shall not be held responsible for any loss or damage arising from your use of third-party websites.
        </p>
      )
    },
    {
      id: 'limitation-of-liability',
      title: '7. Limitation of Liability',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            To the fullest extent permitted by applicable law, Grace Financials, its employees, consultants, directors, affiliates, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to financial losses, loss of business, loss of data, or loss of profits, arising out of or in connection with:
          </p>
          <ul className="list-disc pl-lg space-y-sm text-body-md text-on-surface-variant leading-relaxed">
            <li>The use of, or inability to use, this website or its content.</li>
            <li>Reliance on any information, materials, or tools provided on this website.</li>
            <li>Any errors, omissions, or inaccuracies in the content.</li>
            <li>Service interruptions, technical issues, or downtime.</li>
            <li>Third-party content, services, or external websites accessed through links on this site.</li>
          </ul>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Your use of this website is entirely at your own risk. Nothing in this disclaimer excludes or limits liability where it cannot be excluded under applicable Indian law.
          </p>
        </div>
      )
    },
    {
      id: 'testimonials',
      title: '8. Testimonials and Results Disclaimer',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Any client testimonials, reviews, case studies, success stories, or results displayed on this website reflect the individual experiences of specific clients and are not necessarily representative of the results that all clients may achieve. These examples are not intended to represent or guarantee that any current or future client will achieve the same or similar outcomes.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Results vary based on individual circumstances, market conditions, and other factors. Grace Financials does not guarantee any specific results from the use of its services or the information provided on this website.
          </p>
        </div>
      )
    },
    {
      id: 'external-resources',
      title: '9. External Resources Disclaimer',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Any tools, calculators, templates, guides, checklists, or downloadable resources made available on this website are provided for informational and educational purposes only. They are not a substitute for professional advice and should not be used as the sole basis for making financial decisions.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            You are solely responsible for independently verifying any calculations, assumptions, or outputs generated by such tools before relying on them. Grace Financials makes no warranties regarding the accuracy or completeness of any external resources provided.
          </p>
        </div>
      )
    },
    {
      id: 'consent',
      title: '10. Consent',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          By accessing and using this website, you acknowledge that you have read, understood, and agree to this Disclaimer and all its terms. If you do not agree with any part of this Disclaimer, you are advised to discontinue the use of this website immediately.
        </p>
      )
    },
    {
      id: 'changes',
      title: '11. Changes to This Disclaimer',
      content: (
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Grace Financials reserves the right to modify, update, or revise this Disclaimer at any time without prior notice. Any changes will be posted on this page with an updated effective date. Your continued use of the website after any modifications constitutes your acceptance of the revised Disclaimer. We encourage you to review this page periodically.
        </p>
      )
    },
    {
      id: 'contact',
      title: '12. Contact Information',
      content: (
        <div className="space-y-md">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            If you have any questions, concerns, or requests regarding this Disclaimer, please contact us:
          </p>
          <div className="bg-surface-container-low rounded-xl p-xl space-y-md text-body-md text-on-surface-variant">
            <p><strong className="text-primary">Company Name:</strong> Grace Financials</p>
            <p><strong className="text-primary">Email:</strong>{' '}
              <a href="mailto:info@gracefinancials.com" className="text-secondary hover:underline">info.gracefinancialconsultancy.com</a>
            </p>
            <p><strong className="text-primary">Phone:</strong>{' '}
              <a href="tel:+919995533809" className="text-secondary hover:underline">+91 99955 33809</a>
            </p>
            <p><strong className="text-primary">Phone:</strong>{' '}
              <a href="tel:+919995533809" className="text-secondary hover:underline">+91 97782 92234</a>
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
          <h1 className="anim-hero text-display-lg-mobile md:text-display-lg mb-md">Disclaimer</h1>
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
