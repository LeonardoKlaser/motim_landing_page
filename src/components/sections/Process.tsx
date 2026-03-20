const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos o seu negócio, público e posicionamento atual para identificar oportunidades.",
    filled: true,
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Criamos o planejamento de marketing e conteúdo alinhado aos seus objetivos.",
    filled: false,
  },
  {
    number: "03",
    title: "Produção",
    description: "Gravação de vídeos, fotos e criação de todos os materiais necessários.",
    filled: false,
  },
  {
    number: "04",
    title: "Execução",
    description: "Conteúdo publicado, acompanhado e ajustado para máximo resultado.",
    filled: true,
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative bg-noise pt-6 pb-24 lg:pt-8 lg:pb-32 bg-motim-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-[#eeeeee]/[0.04] border border-[#eeeeee]/10 text-[#eeeeee]/70">
            Como funciona
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#eeeeee]">
            Do diagnóstico à
            <span className="text-[#dae536]"> execução</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="reveal relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] process-line opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="relative z-10 text-center lg:text-left">
                  <div
                    className={`w-[72px] h-[72px] mx-auto lg:mx-0 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${
                      step.filled
                        ? "bg-[#dae536] group-hover:shadow-lg group-hover:shadow-[#dae536]/20"
                        : "border-2 border-[#eeeeee]/15 bg-[#eeeeee]/[0.03]"
                    }`}
                  >
                    <span
                      className={`font-display text-2xl font-extrabold ${
                        step.filled ? "text-[#252525]" : "text-[#eeeeee]/50"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#eeeeee] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-motim-muted text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
