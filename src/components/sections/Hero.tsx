import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* ── Cinematic Background Image (P&B + Overlay) ── */}
        <Image
          src="/assets/hero-section/hero-bg_1.jpeg"
          alt=""
          fill
          priority
          className="object-cover grayscale"
          sizes="100vw"
        />

        {/* Dark overlay — motim-bg (#252525) at 80% opacity */}
        <div className="absolute inset-0 bg-motim-bg/80 z-[1]" />

        {/* Subtle noise texture on top of overlay */}
        <div className="absolute inset-0 bg-noise z-[2] pointer-events-none" />

        {/* Subtle monochrome glow */}
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full animate-drift opacity-15 z-[3]"
          style={{
            background:
              "radial-gradient(circle, rgba(238,238,238,0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full animate-pulse-orb opacity-10 z-[3]"
          style={{
            background:
              "radial-gradient(circle, rgba(218,229,54,0.12) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Giant Watermark */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-[4]">
          <p className="font-display font-extrabold text-[12rem] md:text-[20rem] lg:text-[28rem] leading-none text-[#eeeeee]/[0.02] whitespace-nowrap -mb-12 md:-mb-20 lg:-mb-32">
            MOTIM
          </p>
        </div>

        {/* ── Content (foreground) ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 lg:pt-0 lg:pb-0">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#eeeeee]/10 bg-[#eeeeee]/[0.04] text-[#eeeeee]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dae536] animate-pulse" />
              Agência de Social Media
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] max-w-4xl mb-8 text-[#eeeeee]">
            Marketing e conteúdo estratégico para marcas que querem
            <span className="text-[#dae536]"> crescer</span> no digital.
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 text-base md:text-lg text-motim-muted leading-relaxed max-w-2xl mb-10">
            Na Motim nós planejamos, produzimos e executamos tudo que a sua
            marca precisa para crescer nas redes sociais: estratégia, conteúdo,
            vídeos, fotografia, design e presença digital.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up delay-300">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 bg-[#dae536] text-[#252525] font-semibold px-8 py-4 rounded-full text-base hover:shadow-xl hover:shadow-[#dae536]/20 hover:scale-105 transition-all duration-300"
            >
              Quero levar minha marca para o próximo nível
              <span className="w-8 h-8 bg-[#252525]/15 rounded-full flex items-center justify-center group-hover:bg-[#252525]/25 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
          <div className="w-6 h-10 rounded-full border-2 border-[#eeeeee]/10 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-[#dae536] animate-pulse" />
          </div>
        </div>
      </section>

    </>
  );
}
