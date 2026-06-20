import { useReveal, revealStyle } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

export default function Sitemap() {
  const [sec1, vis1] = useReveal()

  const sections = [
    {
      id: 'main-pages',
      title: 'Main Pages',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Contact Us', to: '/contact' },
        { label: 'Book Consultation', to: '/application' },
      ]
    },
    {
      id: 'services',
      title: 'Services',
      links: [
        { label: 'Services Provide from Grace', to: '/services' },
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      links: [
        { label: 'Blog', to: '/blog' },
        { label: 'Financial Insights from Google', to: 'https://www.google.com/finance/beta', external: true },
        { label: 'News & Updates', to: 'https://media7news.com/news-updates', external: true },
        { label: 'Financial Calculators', to: '/emi-calculator' },
      ]
    },
    {
      id: 'company',
      title: 'Company',
      links: [
        { label: 'Our Team', to: '/success-stories' },
        { label: 'Success Stories', to: '/success-stories' },
      ]
    },
    {
      id: 'legal',
      title: 'Legal Pages',
      links: [
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Terms & Conditions', to: '/terms-conditions' },
        { label: 'Disclaimer', to: '/disclaimer' },
        { label: 'Refund & Cancellation Policy', to: '/refund-policy' },
      ]
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
          <h1 className="anim-hero text-display-lg-mobile md:text-display-lg mb-md">Sitemap</h1>
          <p className="anim-hero-delay text-body-lg max-w-2xl opacity-90">
            Welcome to the Grace Financials Sitemap. This page provides quick access to all important sections of our website.
          </p>
        </div>
      </section>

      <section ref={sec1} className="section-padding bg-surface" style={revealStyle(vis1)}>
        <div className="max-w-container-max mx-auto px-lg max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-giant">
            {sections.map((sec) => (
              <div key={sec.id}>
                <h2 className="text-headline-md text-primary mb-lg">{sec.title}</h2>
                <ul className="space-y-md">
                  {sec.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:underline text-body-md"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.to} className="text-secondary hover:underline text-body-md">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-giant pt-giant border-t border-outline-variant/30">
            <h2 className="text-headline-md text-primary mb-lg">Contact Information</h2>
            <div className="bg-surface-container-low rounded-xl p-xl space-y-sm text-body-md text-on-surface-variant">
              <p><strong className="text-primary">Grace Financials</strong></p>
              <p>Kerala, India</p>
              <p>
                Email:{' '}
                <a href="mailto:info.gracefinancialconsultancy@gmail.com" className="text-secondary hover:underline">info.gracefinancialconsultancy@gmail.com</a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+919995533809" className="text-secondary hover:underline">+91 99955 33809</a>
                {' / '}
                <a href="tel:+9197782292234" className="text-secondary hover:underline">+91 97782 92234</a>
              </p>
            </div>
            <p className="text-body-sm text-on-surface-variant mt-lg">Last Updated: [20/06/2026]</p>
          </div>
        </div>
      </section>
    </main>
  )
}
