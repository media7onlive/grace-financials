export default function Error() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      <div className="text-center px-lg max-w-lg">
        <div className="relative mx-auto w-24 h-24 mb-xl flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-red-500 rounded-full animate-spin" style={{ animationDuration: '1.2s' }}></div>
          <div className="absolute inset-2 border-4 border-transparent border-b-white/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          <span
            className="material-symbols-outlined text-4xl text-red-500 relative z-10"
            style={{ fontVariationSettings: "'FILL' 1", animation: 'flicker 1.5s ease-in-out infinite' }}
          >
          </span>
        </div>
        <h1 className="text-display-lg-mobile md:text-display-lg text-white font-display mb-md leading-tight">
          Server is Down, Check your DNS
        </h1>
        <p className="text-body-lg text-white/40">Please try again later</p>
      </div>
    </div>
  )
}
