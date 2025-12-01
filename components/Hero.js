"use client";

import Image from "next-export-optimize-images/image";

export default function Hero({
  backgroundImage,
  eyebrow,
  title,
  description,
  children,
  gradientFrom = "from-[#2E1A34]/95",
  gradientVia = "via-[#2E1A34]/85",
  gradientTo = "to-[#2E1A34]/70",
  minHeight = "min-h-[700px]",
  showBottomGradient = true,
  fadeColor = "#E3EBF0",
}) {
  return (
    <section
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
            className="object-cover"
            priority
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo}`}
          ></div>
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-32 pb-40 md:pb-48">
        <div className="max-w-4xl">
          {eyebrow && (
            <span className="inline-block text-sm font-semibold text-[#E3EBF0] uppercase tracking-[0.3em] mb-4">
              {eyebrow}
            </span>
          )}
          {title && (
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-white mb-4 leading-tight">
              {title}
            </h1>
          )}
          <div className="w-24 h-1 bg-[#C94D4D] mb-6"></div>
          {description && (
            <p className="text-lg md:text-xl lg:text-2xl text-[#E3EBF0] leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>

      {/* Decorative Elements */}
      {/* {showBottomGradient && (
        <div 
          className="absolute bottom-0 left-0 w-full h-32 z-0 -mb-px"
          style={{
            background: `linear-gradient(to top, ${fadeColor}, ${fadeColor}dd, transparent)`
          }}
        ></div>
      )} */}
    </section>
  );
}
