export default function Hero() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen overflow-hidden bg-noise flex items-center bg-motim-bg">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full animate-drift opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full animate-pulse-orb opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(233,30,118,0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.2) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />

        {/* Giant Watermark */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-[1]">
          <p className="font-display font-extrabold text-[12rem] md:text-[20rem] lg:text-[28rem] leading-none text-white/[0.02] whitespace-nowrap -mb-12 md:-mb-20 lg:-mb-32">
            MOTIM
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 lg:pt-0 lg:pb-0">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border"
              style={{
                background: "rgba(255,107,53,0.08)",
                borderColor: "rgba(255,107,53,0.2)",
                color: "#FF6B35",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
              Agência de Social Media
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] max-w-4xl mb-8">
            Marketing e conteúdo estratégico para marcas que querem
            <span className="gradient-accent-text"> crescer no digital.</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 text-base md:text-lg text-motim-muted leading-relaxed max-w-2xl mb-10">
            Na Motim nós planejamos, produzimos e executamos tudo que a sua marca precisa
            para crescer nas redes sociais: estratégia, conteúdo, vídeos, fotografia, design
            e presença digital.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up delay-300">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 gradient-accent text-white font-semibold px-8 py-4 rounded-full text-base hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300"
            >
              Quero levar minha marca para o próximo nível
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
          <div className="w-6 h-10 rounded-full border-2 border-motim-border flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full gradient-accent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND STRIP ═══════════ */}
      <section className="bg-motim-bg py-6 overflow-hidden border-t border-b border-motim-border/30">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="contents">
              <span className={`font-display text-6xl lg:text-8xl font-extrabold ${i % 2 === 0 ? "gradient-accent-text opacity-30" : "text-white/[0.04]"}`}>
                motim
              </span>
              <span className="text-motim-dim text-2xl">✦</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
