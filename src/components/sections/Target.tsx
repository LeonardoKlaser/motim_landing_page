const items = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#252525]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    text: (
      <>
        Querem <strong className="text-[#dae536]">posicionamento profissional</strong> nas redes sociais
      </>
    ),
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#252525]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    text: (
      <>
        Entendem que marketing precisa de <strong className="text-[#dae536]">estratégia</strong>
      </>
    ),
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#252525]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    text: (
      <>
        Querem crescer de forma <strong className="text-[#dae536]">estruturada no digital</strong>
      </>
    ),
  },
];

export default function Target() {
  return (
    <section className="relative bg-noise py-24 lg:py-32 bg-motim-bg">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-[#eeeeee]/[0.04] border border-[#eeeeee]/10 text-[#eeeeee]/70">
            Para quem é
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#eeeeee] leading-tight">
            A Motim é para
            <span className="text-[#dae536]"> empresárias que:</span>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-motim-card border border-[#eeeeee]/8 rounded-2xl p-8 text-center hover:border-[#eeeeee]/15 transition-all duration-500 group"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#dae536] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-[#eeeeee] text-base font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
