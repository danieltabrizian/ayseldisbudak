"use client";

import Image from "next-export-optimize-images/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Masterclass() {
  return (
    <main>
      <Header />

      <Hero
        backgroundImage="/newimages/image5.jpeg"
        eyebrow="Masterclass & Lezingen"
        title={
          <>
            Leading <em>Ladies</em>
          </>
        }
        description={
          <>
            Voor vrouwen die hun <em>ruimte</em> willen innemen, hun{" "}
            <em>kracht</em> willen voelen en hun plek in het ondernemerschap
            durven <em>opeisen</em>.
          </>
        }
      >
        <div className="flex gap-4 mt-10">
          <Button href="#masterclass" variant="primary">
            Meer over de masterclass
          </Button>
          <Button href="#lezingen" variant="outline-white">
            Boek mij als spreker
          </Button>
        </div>
      </Hero>

      {/* Masterclass Leading Ladies */}
      <div className="vision-section section-default" id="masterclass">
        <div className="vision-content">
          <span className="inline-block text-sm font-semibold text-[#C94D4D] uppercase tracking-wide mb-4">
            Masterclass
          </span>
          <h2 className="vision-title">
            Leading <em>Ladies</em>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            In mijn masterclass Leading Ladies begeleid ik vrouwelijke
            ondernemers die <em>écht succesvol</em> willen zijn, zonder zichzelf
            kwijt te raken.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Dit is voor vrouwen die hun ruimte willen innemen, hun kracht willen
            voelen en hun plek in het ondernemerschap durven <em>opeisen</em>.
          </p>
        </div>
        <div className="vision-image">
          <Image
            src="/newimages/image4.jpeg"
            alt="Leading Ladies Masterclass"
            fill
            sizes="50vw"
            className="p-20"
          />
        </div>
      </div>
      {/* Video Section - Full Width 50/50 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full bg-[#2E1A34]">
        <div className="flex flex-col justify-center p-10 md:p-20 lg:px-24 text-white order-1 lg:order-1">
          <span className="inline-block text-sm font-semibold text-[#C94D4D] uppercase tracking-wide mb-4">
            Bekijk de video
          </span>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] mb-6">
            Ontdek de <em className="italic text-[#C94D4D]">Leading Ladies</em>{" "}
            masterclass
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            In deze video krijg je een kijkje in de masterclass waar vrouwelijke
            ondernemers leren hoe ze hun <em>kracht</em> kunnen omarmen en hun
            plek in het ondernemerschap kunnen <em>claimen</em>.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Het gaat over <em>doorbreken</em>, <em>herontdekken</em> en{" "}
            <em>transformeren</em>. Over leiderschap dat van binnenuit komt.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[#C94D4D] text-2xl">✓</span>
              <p className="text-white/90">Echte verhalen van transformatie</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#C94D4D] text-2xl">✓</span>
              <p className="text-white/90">Praktische strategieën die werken</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#C94D4D] text-2xl">✓</span>
              <p className="text-white/90">Authentiek vrouwelijk leiderschap</p>
            </div>
          </div>
          <div>
            <Button
              href="https://leadervids.nl/videos/leading-ladies-aysel-disbudak/"
              variant="primary-reversed"
            >
              Begin met de masterclass →
            </Button>
          </div>
        </div>

        <div className="relative min-h-[700px] order-2 lg:order-2 overflow-hidden">
          <a
            href="https://leadervids.nl/videos/leading-ladies-aysel-disbudak/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full group cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image
                src="/newimages/leadervids_preview.png"
                alt="Leading Ladies LeaderVids Preview"
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                <div className="bg-white/95 rounded-full p-8 shadow-2xl transform group-hover:scale-110 transition-transform">
                  <svg
                    className="w-20 h-20 text-[#C94D4D]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* LeaderVids Badge */}
              <div className="absolute top-6 right-6 bg-white/95 text-[#2E1A34] px-6 py-3 rounded-full text-base font-bold shadow-lg">
                LeaderVids
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* What You Learn */}
      <Section variant="default">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#E3EBF0] p-10 md:p-16 rounded-lg mb-12">
            <h3 className="font-heading text-3xl text-[#2E1A34] mb-8 text-center">
              Wat je <em className="italic text-[#C94D4D]">leert</em> in deze
              masterclass
            </h3>
            <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              Ik deel mijn <em>levenslessen</em>, strategieën en vrouwelijke
              leiderschapskracht om:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C94D4D]">
                <h4 className="font-heading text-xl text-[#2E1A34] mb-3">
                  💫 Blokkades doorbreken
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Herken en doorbreek de <em>patronen</em> die je tegenhouden om
                  jouw volledige potentieel te bereiken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C94D4D]">
                <h4 className="font-heading text-xl text-[#2E1A34] mb-3">
                  💪 Zelfvertrouwen versterken
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Bouw een <em>onwrikbaar vertrouwen</em> in jezelf en jouw
                  capaciteiten als ondernemer en leider.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C94D4D]">
                <h4 className="font-heading text-xl text-[#2E1A34] mb-3">
                  🧭 Richting creëren
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Ontwikkel een <em>heldere visie</em> en strategie die aansluit
                  bij jouw waarden en ambities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C94D4D]">
                <h4 className="font-heading text-xl text-[#2E1A34] mb-3">
                  ✨ Succes op jouw voorwaarden
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Bouw een <em>succesvol bedrijf</em> dat past bij jouw leven,
                  niet andersom.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-5xl font-heading text-[#C94D4D] mb-3">
                25+
              </div>
              <div className="text-lg text-gray-700">Jaar Ervaring</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-5xl font-heading text-[#C94D4D] mb-3">
                500+
              </div>
              <div className="text-lg text-gray-700">Vrouwen Geïnspireerd</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-5xl font-heading text-[#C94D4D] mb-3">
                100%
              </div>
              <div className="text-lg text-gray-700">Authentiek & Bewezen</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Lezingen Content - Full Width 50/50 */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full bg-[#E3EBF0]"
        id="lezingen"
      >
        <div className="relative min-h-[700px] order-2 lg:order-1">
          <Image
            src="/newimages/IMG_3132.JPG"
            alt="Aysel Disbudak Spreker"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-10 md:p-20 lg:px-24 order-1 lg:order-2">
          <span className="inline-block text-sm font-semibold text-[#C94D4D] uppercase tracking-wide mb-4">
            Spreken & Inspireren
          </span>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] text-[#2E1A34] mb-4">
            Lezingen & <em className="italic text-[#C94D4D]">Events</em>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ik geef inspirerende lezingen en sessies voor (vrouwelijke)
            ondernemers, leiders en teams die willen groeien in{" "}
            <em>bewustzijn</em>, <em>strategie</em> en{" "}
            <em>persoonlijke kracht</em>.
          </p>
          <div className="w-20 h-1 bg-[#C94D4D] mb-8"></div>
          <h3 className="font-heading text-2xl md:text-3xl text-[#2E1A34] mb-6">
            Mijn lezingen gaan over
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-md">
              <span className="text-3xl flex-shrink-0">💼</span>
              <div>
                <h4 className="font-heading text-xl text-[#2E1A34] mb-2">
                  Vrouwelijk leiderschap in ondernemen
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Hoe je <em>authentiek</em> leidt vanuit jouw vrouwelijke
                  kracht.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-md">
              <span className="text-3xl flex-shrink-0">✨</span>
              <div>
                <h4 className="font-heading text-xl text-[#2E1A34] mb-2">
                  Ondernemerschap vanuit visie en authenticiteit
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Bouwen aan een bedrijf dat <em>klopt</em> met wie je bent.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-md">
              <span className="text-3xl flex-shrink-0">💫</span>
              <div>
                <h4 className="font-heading text-xl text-[#2E1A34] mb-2">
                  Doorbreken van belemmerende overtuigingen
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Loslaten wat je <em>klein</em> houdt en je kracht terugvinden.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-md">
              <span className="text-3xl flex-shrink-0">🛡️</span>
              <div>
                <h4 className="font-heading text-xl text-[#2E1A34] mb-2">
                  Weerbaarheid en veerkracht in business
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Blijven staan en <em>groeien</em>, ook in uitdagende tijden.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-md">
              <span className="text-3xl flex-shrink-0">🌟</span>
              <div>
                <h4 className="font-heading text-xl text-[#2E1A34] mb-2">
                  Succesvol worden zonder jezelf te verliezen
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Groei behalen terwijl je <em>trouw</em> blijft aan jezelf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Section variant="purple">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-1 bg-[#C94D4D] mx-auto mb-8"></div>
          <h3 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Een verhaal dat <em className="italic text-[#C94D4D]">opent</em>,{" "}
            <em className="italic text-[#C94D4D]">raakt</em> en{" "}
            <em className="italic text-[#C94D4D]">activeert</em>
          </h3>
          <p className="text-xl text-[#E3EBF0] leading-relaxed mb-8">
            Niet alleen voor inspiratie, maar voor <em>beweging</em>,{" "}
            <em>verandering</em> en <em>groei</em>.
          </p>
          <p className="text-2xl font-heading text-white mb-10">
            Voor vrouwen die hun plek in het ondernemerschap willen{" "}
            <em className="italic text-[#C94D4D]">claimen</em>.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact" variant="primary-reversed">
              Neem contact op
            </Button>
            <Button href="/diensten" variant="outline-white">
              Bekijk mijn aanbod
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
