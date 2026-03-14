import Image from "next/image";

const portfolioItems = [
  { src: "/assets/portfolio/portfolio_1.jpeg", alt: "Criativo 1" },
  { src: "/assets/portfolio/portfolio_2.jpeg", alt: "Criativo 2" },
  { src: "/assets/portfolio/portfolio_3.jpeg", alt: "Criativo 3" },
  { src: "/assets/portfolio/portfolio_4.jpeg", alt: "Criativo 4" },
  { src: "/assets/portfolio/portfolio_5.jpeg", alt: "Criativo 5" },
  { src: "/assets/portfolio/portfolio_6.jpeg", alt: "Criativo 6" },
  { src: "/assets/portfolio/portfolio_7.jpeg", alt: "Criativo 7" },
  { src: "/assets/portfolio/portfolio_8.jpeg", alt: "Criativo 8" },
  { src: "/assets/portfolio/portfolio_9.jpeg", alt: "Criativo 9" },
  { src: "/assets/portfolio/portfolio_10.jpeg", alt: "Criativo 10" },
  { src: "/assets/portfolio/portfolio_11.jpeg", alt: "Criativo 11" },
  { src: "/assets/portfolio/portfolio_12.jpeg", alt: "Criativo 12" },
  { src: "/assets/portfolio/portfolio_13.jpeg", alt: "Criativo 13" },
  { src: "/assets/portfolio/portfolio_14.jpeg", alt: "Criativo 14" },
  { src: "/assets/portfolio/portfolio_15.jpeg", alt: "Criativo 15" },
  { src: "/assets/portfolio/portfolio_16.jpeg", alt: "Criativo 16" },
  { src: "/assets/portfolio/portfolio_17.jpeg", alt: "Criativo 17" },
  { src: "/assets/portfolio/portfolio_18.jpeg", alt: "Criativo 18" },
  { src: "/assets/portfolio/portfolio_19.jpeg", alt: "Criativo 19" },
  { src: "/assets/portfolio/portfolio_20.jpeg", alt: "Criativo 20" },
  { src: "/assets/portfolio/portfolio_21.jpeg", alt: "Criativo 21" },
  { src: "/assets/portfolio/portfolio_22.jpeg", alt: "Criativo 22" },
  { src: "/assets/portfolio/portfolio_23.jpeg", alt: "Criativo 23" },
  { src: "/assets/portfolio/portfolio_24.jpeg", alt: "Criativo 24" },
  { src: "/assets/portfolio/portfolio_25.jpeg", alt: "Criativo 25" },
];

export default function InfinitePortfolio() {
  return (
    <section className="w-full overflow-hidden bg-motim-bg py-12">
      <div className="animate-marquee flex items-center gap-6">
        {[...portfolioItems, ...portfolioItems].map((item, i) => (
          <div
            key={i}
            className="relative aspect-[4/5] h-72 md:h-80 lg:h-96 flex-shrink-0 rounded-xl subtle-border overflow-hidden grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
