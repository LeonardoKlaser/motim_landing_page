import Image from "next/image";

interface ServiceCard {
  number: string;
  title: string;
  titleBreak: string;
  description: string;
  highlight?: string;
  deliverables: string[];
  cta: string;
  featured?: boolean;
}

const services: ServiceCard[] = [
  {
    number: "01.",
    title: "Social Media",
    titleBreak: "Estratégico",
    description:
      "O social media é o centro do trabalho da Motim. Mais do que postar conteúdos,",
    highlight: "estruturamos o posicionamento da sua marca nas redes sociais",
    deliverables: [
      "Planejamento estratégico mensal",
      "Pilares de comunicação",
      "Roteirização e direção criativa",
      "Produção de vídeos",
      "Produção fotográfica",
      "Posts e carrosséis",
      "Calendário de conteúdo",
    ],
    cta: "Quero estratégia para minha marca",
    featured: true,
  },
  {
    number: "02.",
    title: "Produção de",
    titleBreak: "Conteúdo",
    description:
      "Conteúdos profissionais fortalecem o posicionamento da marca e elevam a qualidade da presença digital. Na Motim, cada produção é pensada de forma estratégica para que",
    highlight: "imagem e narrativa transmitam a essência da marca.",
    deliverables: [
      "Roteirização de vídeos",
      "Direção de gravação",
      "Captação e edição",
      "Ensaios fotográficos",
      "Fotos institucionais",
    ],
    cta: "Quero conteúdo profissional",
  },
  {
    number: "03.",
    title: "Posicionamento",
    titleBreak: "de Marca",
    description:
      "Uma marca forte começa com um posicionamento claro e uma identidade visual consistente. Desenvolvemos",
    highlight: "identidades visuais que traduzem a essência da empresa",
    deliverables: [
      "Identidade visual",
      "Logotipo",
      "Paleta e tipografia",
      "Elementos visuais",
      "Guia de aplicação",
    ],
    cta: "Quero fortalecer minha marca",
  },
  {
    number: "04.",
    title: "Estrutura",
    titleBreak: "Digital",
    description:
      "Além da presença nas redes sociais, muitas marcas também precisam de",
    highlight:
      "páginas estruturadas para apresentar serviços, captar clientes ou vender produtos.",
    deliverables: [
      "Estruturação de landing page",
      "Copy estratégica",
      "Design da página",
      "Jornada do cliente",
    ],
    cta: "Quero uma página que converte",
  },
];

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function ChevronIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function DeliverableTag({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-motim-muted bg-[#252525]/60 backdrop-blur-sm border border-[#eeeeee]/8 rounded-full px-3 py-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#dae536]" />
      {text}
    </span>
  );
}

function FeaturedCard({ service }: { service: ServiceCard }) {
  return (
    <div className="reveal lg:col-span-2 gradient-border subtle-border bg-motim-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 hover:bg-motim-surface/90 transition-all duration-500 group">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/5">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-5xl lg:text-6xl font-extrabold text-[#eeeeee]/20 group-hover:text-[#eeeeee]/40 transition-all shrink-0 leading-none">
              {service.number}
            </span>
            <div className="lg:hidden">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#dae536] text-[#252525] mb-1">
                Destaque
              </span>
              <h3 className="font-display text-2xl font-bold text-[#eeeeee] leading-tight">
                {service.title} {service.titleBreak}
              </h3>
            </div>
            <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#dae536] text-[#252525]">
              Destaque
            </span>
          </div>
          <h3 className="hidden lg:block font-display text-2xl lg:text-3xl font-bold text-[#eeeeee] leading-tight mb-2">
            {service.title}
            <br />
            {service.titleBreak}
          </h3>
        </div>
        <div className="lg:w-3/5">
          <p className="text-motim-muted text-base leading-relaxed mb-6">
            {service.description}{" "}
            <strong className="text-[#eeeeee]">{service.highlight}</strong> para
            que o perfil tenha direção, consistência e autoridade. Cada mês
            começa com planejamento estratégico e produção de conteúdos pensados
            para fortalecer a presença digital da sua empresa.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {service.deliverables.map((d, i) => (
              <DeliverableTag key={i} text={d} />
            ))}
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-[#dae536] text-[#252525] font-semibold px-6 py-3 rounded-full text-sm hover:shadow-lg hover:shadow-[#dae536]/20 hover:scale-105 transition-all duration-300"
          >
            {service.cta}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

function StandardCard({ service }: { service: ServiceCard }) {
  return (
    <div className="reveal gradient-border subtle-border bg-motim-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 hover:bg-motim-surface/90 transition-all duration-500 group">
      <div className="flex items-center gap-4 mb-4 lg:block">
        <span className="font-display text-5xl font-extrabold text-[#eeeeee]/15 group-hover:text-[#eeeeee]/30 transition-all shrink-0 leading-none">
          {service.number}
        </span>
        <h3 className="font-display text-2xl font-bold text-[#eeeeee] leading-tight lg:mt-3">
          {service.title}{" "}
          <span className="lg:hidden">{service.titleBreak}</span>
          <br className="hidden lg:block" />
          <span className="hidden lg:inline">{service.titleBreak}</span>
        </h3>
      </div>
      <p className="text-motim-muted text-sm leading-relaxed mb-5">
        {service.description}{" "}
        <strong className="text-[#eeeeee]">{service.highlight}</strong> e
        fortalecem o reconhecimento da marca.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {service.deliverables.map((d, i) => (
          <DeliverableTag key={i} text={d} />
        ))}
      </div>
      <a
        href="#contato"
        className="inline-flex items-center gap-2 bg-[#dae536] text-[#252525] font-semibold px-5 py-2.5 rounded-full text-sm hover:shadow-lg hover:shadow-[#dae536]/20 hover:scale-105 transition-all duration-300"
      >
        {service.cta}
        <ChevronIcon />
      </a>
    </div>
  );
}

function WideCard({ service }: { service: ServiceCard }) {
  return (
    <div className="reveal lg:col-span-2 gradient-border subtle-border bg-motim-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 hover:bg-motim-surface/90 transition-all duration-500 group">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/5">
          <div className="flex items-center gap-4 lg:block">
            <span className="font-display text-5xl lg:text-6xl font-extrabold text-[#eeeeee]/15 group-hover:text-[#eeeeee]/30 transition-all shrink-0 leading-none">
              {service.number}
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#eeeeee] leading-tight lg:mt-3 lg:mb-2">
              {service.title}{" "}
              <span className="lg:hidden">{service.titleBreak}</span>
              <br className="hidden lg:block" />
              <span className="hidden lg:inline">{service.titleBreak}</span>
            </h3>
          </div>
        </div>
        <div className="lg:w-3/5">
          <p className="text-motim-muted text-base leading-relaxed mb-6">
            {service.description}{" "}
            <strong className="text-[#eeeeee]">{service.highlight}</strong>{" "}
            Desenvolvemos páginas com foco em clareza, posicionamento e
            conversão.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {service.deliverables.map((d, i) => (
              <DeliverableTag key={i} text={d} />
            ))}
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-[#dae536] text-[#252525] font-semibold px-6 py-3 rounded-full text-sm hover:shadow-lg hover:shadow-[#dae536]/20 hover:scale-105 transition-all duration-300"
          >
            {service.cta}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* ── Cinematic Background Layer ── */}
      {/* Background Image — grayscale + blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backstage/backstage_6.jpeg"
          alt=""
          fill
          className="object-cover object-[70%_center] grayscale blur-sm"
          sizes="110vw"
          quality={60}
          priority={false}
        />
      </div>

      {/* Dark overlay — #252525 at 85% opacity */}
      <div className="absolute inset-0 z-[1] bg-motim-bg/85" />

      {/* Noise texture layer */}
      <div className="absolute inset-0 z-[2] bg-noise pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-between px-4 pointer-events-none opacity-[0.03] z-[3]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-px bg-[#eeeeee] h-full" />
        ))}
      </div>

      {/* ── Foreground Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-[#eeeeee]/[0.04] border border-[#eeeeee]/10 text-[#eeeeee]/70 backdrop-blur-sm">
            Nossas Soluções
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#eeeeee]">
            O que a Motim faz
            <br className="hidden sm:block" />
            <span className="text-[#dae536]"> pela sua marca</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeaturedCard service={services[0]} />
          <StandardCard service={services[1]} />
          <StandardCard service={services[2]} />
          <WideCard service={services[3]} />
        </div>
      </div>
    </section>
  );
}
