"use client";

import Image from "next/image";

export default function Hero({
  backgroundImage,
  eyebrow,
  title,
  description,
  children,
  gradientFrom = "from-[#2E1A34]/95",
  gradientVia = "via-[#2E1A34]/85",
  gradientTo = "to-[#2E1A34]/70",
  minHeight = "min-h-[70vh]",
  showBottomGradient = true,
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
            className="object-cover"
            priority
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo}`}
          ></div>
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          {eyebrow && (
            <span className="inline-block text-sm font-semibold text-[#E3EBF0] uppercase tracking-[0.3em] mb-6">
              {eyebrow}
            </span>
          )}
          {title && (
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              {title}
            </h1>
          )}
          <div className="w-24 h-1 bg-[#C94D4D] mb-8"></div>
          {description && (
            <p className="text-xl md:text-2xl text-[#E3EBF0] leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>

      {/* Decorative Elements */}
      {showBottomGradient && (
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#E3EBF0] to-transparent z-10"></div>
      )}
    </section>
  );
}
