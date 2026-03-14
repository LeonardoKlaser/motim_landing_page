export default function BrandStrip() {
  return (
    <section className="bg-motim-bg py-6 overflow-hidden border-t border-b border-[#eeeeee]/5">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="contents">
            <span
              className={`font-display text-6xl lg:text-8xl font-extrabold ${
                i % 2 === 0
                  ? "text-[#eeeeee]/[0.06]"
                  : "text-[#eeeeee]/[0.02]"
              }`}
            >
              motim
            </span>
            <span className="text-motim-dim text-2xl">&#x2726;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
