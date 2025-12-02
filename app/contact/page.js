"use client";

import Image from "next-export-optimize-images/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Contact() {
  return (
    <main>
      <Header />

      <Hero
        backgroundImage="/newimages/image1.jpeg"
        eyebrow="Neem Contact Op"
        title={
          <>
            Laten we <em>samen</em> werken
          </>
        }
        description={
          <>
            Klaar om de <em>volgende stap</em> te zetten? Of je nu vragen hebt
            over mijn diensten, wilt samenwerken, of gewoon een kennismaking
            wilt plannen – ik sta <em>voor je klaar</em>.
          </>
        }
      >
        <div className="flex gap-4 mt-10">
          <Button href="mailto:info@ayseldisbudak.nl" variant="primary">
            Stuur een email
          </Button>
        </div>
      </Hero>

      <Section variant="default">
        <div className="max-w-7xl mx-auto px-4">
          {/* Personal Guidance Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/newimages/image4.jpeg"
                  alt="Aysel Disbudak"
                  width={600}
                  height={750}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-aysel-purple text-4xl md:text-5xl mb-6 leading-tight">
                <em>Persoonlijke</em> begeleiding op maat
              </h2>
              <div className="w-16 h-0.5 bg-aysel-red mb-8"></div>
              <p className="font-body text-aysel-purple/80 text-lg leading-relaxed mb-6">
                Als Business & Wealth Mentor werk ik graag <em>persoonlijk</em>{" "}
                met vrouwen die klaar zijn voor <em>verandering</em>. Of je nu
                wilt groeien als ondernemer, financiële vrijheid nastreeft, of
                je leiderschap wilt versterken – samen maken we een plan dat{" "}
                <em>bij jou past</em>.
              </p>
              <p className="font-body text-aysel-purple/80 text-lg leading-relaxed mb-8">
                Neem gerust contact met me op via telefoon of email. Voor
                dringende zaken ben ik ook bereikbaar op mijn spoednummer. Ik
                kijk ernaar uit om van je te horen!
              </p>

              {/* Contact Cards - Modern Design */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Card */}
                <a
                  href="mailto:info@ayseldisbudak.nl"
                  className="group relative bg-gradient-to-br from-[#2E1A34] to-[#3d2447] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#C94D4D]/20 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#C94D4D]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C94D4D]/30 transition-colors">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <h3 className="font-heading text-white text-lg mb-2">
                      Email
                    </h3>
                    <p className="font-body text-white/70 text-sm leading-relaxed break-all group-hover:text-white/90 transition-colors">
                      info@ayseldisbudak.nl
                    </p>
                  </div>
                </a>

                {/* Hours Card */}
                <div className="group relative bg-gradient-to-br from-[#E3EBF0] to-[#d5e3ed] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#C94D4D]/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <span className="text-2xl">🕒</span>
                    </div>
                    <h3 className="font-heading text-[#2E1A34] text-lg mb-3">
                      Openingstijden
                    </h3>
                    <div className="space-y-1 text-[#2E1A34]/80 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold">Ma - Do</span>
                        <span>9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Vrijdag</span>
                        <span>9:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Weekend</span>
                        <span>Gesloten</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram Card */}
                <a
                  href="https://www.instagram.com/therealayseldisbudak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-[#C94D4D] to-[#a83e3e] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                      <span className="text-2xl">📷</span>
                    </div>
                    <h3 className="font-heading text-white text-lg mb-2">
                      Instagram
                    </h3>
                    <p className="font-body text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                      @therealayseldisbudak
                    </p>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/aysel-disbudak-76bb2435/?locale=nl_NL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-[#0077B5] to-[#005885] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="font-heading text-white text-lg mb-2">
                      LinkedIn
                    </h3>
                    <p className="font-body text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                      Aysel Disbudak
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="light-blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-aysel-purple text-4xl md:text-5xl mb-6 leading-tight">
            Klaar om de <em>eerste stap</em> te zetten?
          </h2>
          <p className="font-body text-aysel-purple/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Bel me direct voor een <em>vrijblijvend kennismakingsgesprek</em> of
            stuur een email. <em>Samen</em> kijken we hoe ik jou kan helpen jouw
            doelen te bereiken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="mailto:info@ayseldisbudak.nl" variant="primary">
              Stuur een email
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
