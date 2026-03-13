const painPoints = [
  "Postam sem estratégia",
  "Gravam vídeos sem direção",
  "Conteúdo sem posicionamento",
  "Perfil ativo sem resultados",
  "Sem autoridade digital",
  "Dificuldade em atrair novos clientes",
];

export default function PainPoints() {
  return (
    <section className="relative bg-noise py-24 lg:py-32 bg-motim-bg">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-motim-muted mb-4">
          O problema que resolvemos
        </p>
        <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#eeeeee] leading-tight mb-6">
          Ter presença nas redes sociais
          <br className="hidden sm:block" />
          <span className="text-[#dae536]"> não significa crescer.</span>
        </h2>
        <p className="reveal text-motim-muted text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          Muitas empresas estão presentes no Instagram todos os dias, mas continuam com
          dificuldade de crescer. Postam sem estratégia. Gravam vídeos sem direção. Produzem
          conteúdo sem posicionamento.
        </p>
        <p className="reveal text-[#eeeeee] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-14">
          O resultado é um perfil ativo, mas que não gera autoridade nem novos clientes. É
          exatamente aqui que entra o trabalho da Motim.
        </p>

        {/* Pain Pills */}
        <div className="reveal flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {painPoints.map((pain, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 bg-motim-surface border border-[#eeeeee]/8 rounded-full px-5 py-2.5 text-sm text-motim-muted hover:border-[#eeeeee]/20 hover:text-[#eeeeee] transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#dae536] flex-shrink-0" />
              {pain}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
