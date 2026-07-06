import { useState } from 'react'
import { useReveal, revealStyle } from '../hooks/useReveal'

export default function DnsCheck() {
  const [showNotification, setShowNotification] = useState(true)
  const [heroRef, heroVis] = useReveal()
  const [contentRef, contentVis] = useReveal()

  return (
    <main className="mt-giant">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .anim-hero { animation: fadeInUp 0.8s ease-out both; }
        .anim-hero-delay { animation: fadeInUp 0.8s ease-out 0.3s both; }
      `}</style>
      <section className="relative pt-xxl pb-giant bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-lg text-center">
          <span className="anim-hero material-symbols-outlined text-6xl text-secondary-fixed mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>dns</span>
          <h1 className="anim-hero-delay text-display-lg-mobile md:text-display-lg text-on-primary mb-md">DNS Check</h1>
          <p className="anim-hero-delay text-body-lg text-on-primary-container max-w-2xl mx-auto">Verify your DNS server configuration</p>
        </div>
      </section>

      {showNotification && (
        <div className="max-w-container-max mx-auto px-lg mt-lg">
          <div className="bg-gold/10 border border-gold/30 text-tertiary-container rounded-lg p-md flex items-center justify-between gap-md">
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-gold">info</span>
              <p className="text-body-md font-semibold">Check your DNS Server</p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-tertiary-container/60 hover:text-tertiary-container transition-colors p-xs"
              aria-label="Dismiss notification"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      )}

      <section ref={heroRef} className="section-padding" style={revealStyle(heroVis)}>
        <div className="max-w-container-max mx-auto px-lg">
          <div className="card p-xl text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-md">public</span>
            <h2 className="text-headline-md text-primary mb-sm">DNS Configuration</h2>
            <p className="text-body-md text-on-surface-variant">Ensure your DNS servers are correctly configured for optimal performance and security.</p>
          </div>
        </div>
      </section>

      <section ref={contentRef} className="section-padding pt-0" style={revealStyle(contentVis)}>
        <div className="max-w-container-max mx-auto px-lg grid grid-cols-1 md:grid-cols-3 gap-md">
          {[
            { icon: 'speed', title: 'Response Time', desc: 'Fast DNS resolution for quick website access.' },
            { icon: 'security', title: 'Security', desc: 'Protect against DNS spoofing and attacks.' },
            { icon: 'settings', title: 'Configuration', desc: 'Easily manage your DNS server settings.' },
          ].map((item) => (
            <div key={item.title} className="card p-md text-center">
              <span className="material-symbols-outlined text-3xl text-secondary mb-sm">{item.icon}</span>
              <h3 className="text-headline-sm text-primary mb-xs">{item.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
