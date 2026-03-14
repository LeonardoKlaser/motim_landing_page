import Image from "next/image";

const stats = [
  { value: "360°", label: "Gestão Completa" },
  { value: "100%", label: "Estratégico" },
  { value: "Pro", label: "Produção" },
  { value: "24/7", label: "Presença Digital" },
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-noise pt-6 pb-24 lg:pt-8 lg:pb-32 bg-motim-bg">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="reveal bg-motim-card/80 backdrop-blur-sm rounded-2xl overflow-hidden subtle-border relative">
          {/* Accent top border — verde lima fino */}
          <div className="h-[2px] bg-[#dae536] w-full" />

          <div className="p-8 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Coluna Esquerda — Conteúdo */}
              <div className="flex flex-col justify-between">
                {/* Overline */}
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 bg-[#eeeeee]/[0.04] border border-[#eeeeee]/10 text-[#eeeeee]/70">
                    Sobre a Motim
                  </span>

                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#eeeeee] leading-tight mb-8">
                    Organizamos e estruturamos o
                    <br className="hidden lg:block" />
                    <span className="text-[#dae536]"> marketing da sua marca.</span>
                  </h2>

                  <p className="text-motim-muted text-base md:text-lg leading-relaxed mb-6">
                    A Motim organiza e estrutura o marketing da sua marca. Nós cuidamos da{" "}
                    <strong className="text-[#eeeeee]">
                      estratégia, da produção de conteúdo e da presença digital
                    </strong>{" "}
                    da sua empresa para que você tenha um posicionamento profissional nas redes
                    sociais.
                  </p>
                  <p className="text-motim-muted text-base md:text-lg leading-relaxed mb-10">
                    Isso inclui{" "}
                    <strong className="text-[#eeeeee]">
                      planejamento, produção de vídeos, fotografia, design
                    </strong>{" "}
                    e desenvolvimento de materiais estratégicos.
                  </p>
                </div>

                {/* Stats — grid 2 colunas */}
                <div className="grid grid-cols-2 gap-4">
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

              {/* Coluna Direita — Imagem Dinâmica */}
              <div className="relative w-full min-h-[400px] rounded-xl overflow-hidden group">
                <Image
                  src="/assets/backstage/sobre-motim.jpeg"
                  alt="Bastidores da Motim"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
