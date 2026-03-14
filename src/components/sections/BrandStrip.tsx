import Image from "next/image";

function MarqueeUnit() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="inline-flex items-center gap-6 px-6">
          <span
            className={`font-display text-6xl lg:text-8xl font-extrabold ${
              i % 2 === 0 ? "text-[#eeeeee]/[0.06]" : "text-[#eeeeee]/[0.02]"
            }`}
          >
            Motim
          </span>
          <Image
            src="/assets/logos/logo_m_noBackground.png"
            alt=""
            width={48}
            height={48}
            className="w-8 h-8 lg:w-12 lg:h-12 object-contain opacity-20"
          />
        </span>
      ))}
    </>
  );
}

export default function BrandStrip() {
  return (
    <section className="bg-motim-bg py-8 overflow-hidden border-t border-b border-[#eeeeee]/5">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        <MarqueeUnit />
        <MarqueeUnit />
      </div>
    </section>
  );
}
