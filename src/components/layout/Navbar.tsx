"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.9)" : "rgba(10,10,10,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(38,38,38,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-extrabold tracking-tight gradient-accent-text">
          motim
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm text-motim-muted hover:text-white transition-colors duration-300">Sobre</a>
          <a href="#servicos" className="text-sm text-motim-muted hover:text-white transition-colors duration-300">Serviços</a>
          <a href="#processo" className="text-sm text-motim-muted hover:text-white transition-colors duration-300">Processo</a>
          <a href="#resultados" className="text-sm text-motim-muted hover:text-white transition-colors duration-300">Resultados</a>
          <a href="#contato" className="inline-flex items-center gap-2 gradient-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Falar com a Motim
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-motim-border/50">
          <div className="px-6 py-6 flex flex-col gap-4" style={{ background: "rgba(10,10,10,0.95)" }}>
            <a href="#sobre" onClick={closeMenu} className="text-motim-muted hover:text-white transition-colors py-2">Sobre</a>
            <a href="#servicos" onClick={closeMenu} className="text-motim-muted hover:text-white transition-colors py-2">Serviços</a>
            <a href="#processo" onClick={closeMenu} className="text-motim-muted hover:text-white transition-colors py-2">Processo</a>
            <a href="#resultados" onClick={closeMenu} className="text-motim-muted hover:text-white transition-colors py-2">Resultados</a>
            <a href="#contato" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 gradient-accent text-white text-sm font-semibold px-5 py-3 rounded-full mt-2">
              Falar com a Motim
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
