const placeholders = [
  { aspect: "aspect-[3/4]", icon: "image", label: "Resultado de cliente" },
  { aspect: "aspect-square", icon: "video", label: "Bastidores" },
  { aspect: "aspect-[4/5]", icon: "star", label: "Depoimento" },
  { aspect: "aspect-[3/4]", icon: "image", label: "Print de resultado" },
  { aspect: "aspect-square", icon: "check", label: "Case de sucesso" },
  { aspect: "aspect-[3/4]", icon: "image", label: "Foto de bastidores" },
  { aspect: "aspect-square", icon: "chat", label: "Depoimento Google" },
  { aspect: "aspect-[4/5]", icon: "chart", label: "Métricas de crescimento" },
];

function PlaceholderIcon({ type }: { type: string }) {
  const common = "w-5 h-5 text-motim-muted";
  switch (type) {
    case "video":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case "star":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    case "check":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "chat":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    default:
      return (
        <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
  }
}

export default function SocialProof() {
  return (
    <section id="resultados" className="relative bg-noise py-24 lg:py-32 bg-motim-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-[#eeeeee]/[0.04] border border-[#eeeeee]/10 text-[#eeeeee]/70">
            Resultados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#eeeeee] leading-tight">
            Marcas que já cresceram
            <br className="hidden sm:block" />
            <span className="text-[#dae536]"> com a Motim</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="reveal columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden group cursor-pointer border border-[#eeeeee]/8"
            >
              <div className={`relative ${item.aspect} bg-motim-surface flex items-center justify-center`}>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#eeeeee]/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <PlaceholderIcon type={item.icon} />
                  </div>
                  <p className="text-xs text-motim-dim">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
