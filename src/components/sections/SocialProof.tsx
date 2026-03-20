"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

const socialProofData = [
  { id: 1, src: "/assets/feedbacks/feedback_1.jpeg", alt: "Depoimento cliente 1", category: "DEPOIMENTO REAL" },
  { id: 2, src: "/assets/insta/feed_client1.jpeg", alt: "Feed estratégico 1", category: "GESTÃO DE REDE SOCIAL" },
  { id: 3, src: "/assets/feedbacks/feedback_2.jpeg", alt: "Depoimento cliente 2", category: "DEPOIMENTO REAL" },
  { id: 4, src: "/assets/feedbacks/feedback_3.jpeg", alt: "Depoimento cliente 3", category: "DEPOIMENTO REAL" },
  { id: 5, src: "/assets/insta/feed_client2.jpeg", alt: "Feed estratégico 2", category: "GESTÃO DE REDE SOCIAL" },
  { id: 6, src: "/assets/feedbacks/feedback_4.jpeg", alt: "Depoimento cliente 4", category: "DEPOIMENTO REAL" },
  { id: 7, src: "/assets/insta/feed_client3.jpeg", alt: "Feed estratégico 3", category: "GESTÃO DE REDE SOCIAL" },
  { id: 8, src: "/assets/feedbacks/feedback_5.jpeg", alt: "Depoimento cliente 5", category: "DEPOIMENTO REAL" },
  { id: 9, src: "/assets/insta/feed_client4.jpeg", alt: "Feed estratégico 4", category: "GESTÃO DE REDE SOCIAL" },
  { id: 10, src: "/assets/feedbacks/feedback_6.jpeg", alt: "Depoimento cliente 6", category: "DEPOIMENTO REAL" },
];

export default function SocialProof() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="resultados" className="relative bg-noise py-24 lg:py-32 bg-motim-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-[#eeeeee]/[0.04] border border-[#eeeeee]/10 text-[#eeeeee]/70">
              Resultados
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#eeeeee] leading-tight">
              Marcas que já cresceram
              <br className="hidden sm:block" />
              <span className="text-[#dae536]"> com a Motim</span>
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="reveal columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {socialProofData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.src)}
                className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer bg-[#2f2f2f] subtle-border border border-transparent hover:border-motim-accent/60 hover:scale-[1.03] transition-all duration-300 group relative"
              >
                {/* Image — natural height, no crop */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto block"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay with expand icon */}
                  <div className="absolute inset-0 bg-[#252525]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Maximize2 className="w-8 h-8 text-[#dae536]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Permanent category label */}
                <div className="px-4 py-3">
                  <span className="font-display text-xs font-semibold tracking-widest uppercase text-[#dae536]">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#252525]/95 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-[101] w-10 h-10 flex items-center justify-center rounded-full border border-[#eeeeee]/20 text-[#eeeeee]/70 hover:text-[#dae536] hover:border-[#dae536]/50 transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Expanded image — contain, never stretch */}
          <div
            className="relative w-[90vw] max-w-4xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Feedback expandido"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
