import Image from "next/image";

const backstageImages = [
  { src: "/assets/backstage/backstage_1.jpeg", alt: "Bastidores 1" },
  { src: "/assets/backstage/backstage_2.jpeg", alt: "Bastidores 2" },
  { src: "/assets/backstage/backstage_3.jpeg", alt: "Bastidores 3" },
  { src: "/assets/backstage/backstage_4.jpeg", alt: "Bastidores 4" },
];

export default function Backstage() {
  return (
    <section className="bg-motim-bg py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── Coluna de Texto ── */}
        <div className="reveal">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#dae536] mb-4">
            ESTRUTURA PROFISSIONAL
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#eeeeee] mb-6">
            Mais do que posts.{" "}
            <span className="text-[#dae536]">Uma equipe real</span> de produção.
          </h2>

          <p className="text-motim-muted text-base md:text-lg leading-relaxed">
            Atrás de cada grande marca existe uma operação robusta. Na Motim, não
            dependemos de templates amadores. Contamos com equipamento
            profissional de captação, estúdio próprio e uma equipe de
            especialistas em audiovisual focada em transmitir a verdadeira
            essência do seu negócio.
          </p>
        </div>

        {/* ── Coluna Visual (Bento Grid) ── */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 reveal delay-200">
          {/* Grande — ocupa 2 linhas */}
          <div className="row-span-2 relative rounded-2xl overflow-hidden gradient-border min-h-[320px] lg:min-h-[420px]">
            <Image
              src={backstageImages[0].src}
              alt={backstageImages[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Topo direito */}
          <div className="relative rounded-2xl overflow-hidden gradient-border min-h-[150px] lg:min-h-[200px]">
            <Image
              src={backstageImages[1].src}
              alt={backstageImages[1].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Base direito — 2 imagens lado a lado */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden gradient-border min-h-[150px] lg:min-h-[200px]">
              <Image
                src={backstageImages[2].src}
                alt={backstageImages[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 25vw, 12vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden gradient-border min-h-[150px] lg:min-h-[200px]">
              <Image
                src={backstageImages[3].src}
                alt={backstageImages[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 25vw, 12vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
