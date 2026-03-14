"use client";

import Image from "next/image";
function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface Partner {
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoPosition?: string;
  linkedin?: string;
  instagram?: string;
}

const partners: Partner[] = [
  {
    name: "Gabriela",
    role: "Co-fundadora & Diretora Criativa",
    bio: "Gabi é a fundadora da Motim, mente criativa e estrategista por trás da agência. Especialista em marketing e posicionamento de marcas, lidera o desenvolvimento das estratégias que estruturam cada projeto, unindo visão de marca, conteúdo e direção criativa. Seu trabalho é transformar negócios em marcas fortes, com presença digital consistente, comunicação estratégica e posicionamento claro no mercado.",
    photo: "/assets/socios/foto_socio_2.jpeg",
  },
  {
    name: "André",
    role: "Co-fundador & Diretor de Produção",
    bio: "André é fotógrafo e videomaker há mais de 5 anos e sócio da Motim. Dedicado a eternizar momentos com sensibilidade e autenticidade, é especializado na criação de vídeos e fotos que contam histórias e refletem a essência de cada marca e de cada pessoa. Acredita que cada projeto é único e merece ser tratado com esse cuidado. Na Motim, é responsável pela direção e produção audiovisual, transformando ideias em imagens que comunicam, conectam e permanecem.",
    photo: "/assets/socios/foto_socio_3.jpeg",
    photoPosition: "center 35%",
  },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="reveal group flex flex-col items-center text-center lg:items-start lg:text-left">
      {/* Photo Container */}
      <div className="relative mb-8">
        {/* Glow ring on hover */}
        <div className="absolute -inset-3 rounded-3xl bg-[#dae536]/0 group-hover:bg-[#dae536]/10 blur-2xl transition-all duration-700" />

        <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden subtle-border group-hover:scale-105 transition-all duration-700">
          <Image
            src={partner.photo}
            alt={partner.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            style={
              partner.photoPosition
                ? { objectPosition: partner.photoPosition }
                : undefined
            }
            sizes="(max-width: 768px) 256px, 288px"
          />

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-xs lg:max-w-sm">
        <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#eeeeee] mb-1 group-hover:text-white transition-colors duration-300">
          {partner.name}
        </h3>

        <p className="text-[#dae536] font-display text-sm font-semibold tracking-wide uppercase mb-4">
          {partner.role}
        </p>

        <p className="text-motim-muted text-sm leading-relaxed mb-6">
          {partner.bio}
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 justify-center lg:justify-start">
          {partner.linkedin && (
            <a
              href={partner.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${partner.name}`}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#eeeeee]/10 text-motim-muted hover:text-[#dae536] hover:border-[#dae536]/40 transition-all duration-300"
            >
              <LinkedinIcon />
            </a>
          )}
          {partner.instagram && (
            <a
              href={partner.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${partner.name}`}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#eeeeee]/10 text-motim-muted hover:text-[#dae536] hover:border-[#dae536]/40 transition-all duration-300"
            >
              <InstagramIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="socios"
      className="relative bg-noise py-24 lg:py-32 bg-motim-bg overflow-hidden"
    >
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#dae536]/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-[#eeeeee]/[0.04] border border-[#eeeeee]/10 text-[#eeeeee]/70">
            Os Sócios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[#eeeeee]">
            Quem faz
            <br />
            <span className="text-[#dae536]">acontecer</span>
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 justify-items-center lg:justify-items-center">
          {partners.map((partner, i) => (
            <PartnerCard key={i} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
