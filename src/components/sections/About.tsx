const stats = [
  { value: "360°", label: "Gestão Completa" },
  { value: "100%", label: "Estratégico" },
  { value: "Pro", label: "Produção" },
  { value: "24/7", label: "Presença Digital" },
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-noise py-24 lg:py-32 bg-motim-bg">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="reveal bg-motim-card rounded-2xl overflow-hidden border border-[#eeeeee]/8 relative">
          {/* Accent top border — verde lima fino */}
          <div className="h-[2px] bg-[#dae536] w-full" />

          <div className="p-8 lg:p-14">
            {/* Overline */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 bg-[#eeeeee]/[0.04] border border-[#eeeeee]/10 text-[#eeeeee]/70">
              Sobre a Motim
            </span>

            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#eeeeee] leading-tight mb-8">
              Organizamos e estruturamos o
              <br className="hidden lg:block" />
              <span className="text-[#dae536]"> marketing da sua marca.</span>
            </h2>

            <p className="text-motim-muted text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
              A Motim organiza e estrutura o marketing da sua marca. Nós cuidamos da{" "}
              <strong className="text-[#eeeeee]">
                estratégia, da produção de conteúdo e da presença digital
              </strong>{" "}
              da sua empresa para que você tenha um posicionamento profissional nas redes
              sociais.
            </p>
            <p className="text-motim-muted text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              Isso inclui{" "}
              <strong className="text-[#eeeeee]">
                planejamento, produção de vídeos, fotografia, design
              </strong>{" "}
              e desenvolvimento de materiais estratégicos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl bg-motim-surface border border-[#eeeeee]/8"
                >
                  <p className="font-display text-2xl font-bold text-[#dae536]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-motim-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
