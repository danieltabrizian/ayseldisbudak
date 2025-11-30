"use client";

import Image from "next-export-optimize-images/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function OverMij() {
  return (
    <main>
      <Header />

      <Hero
        backgroundImage="/newimages/image5.jpeg"
        eyebrow="Over Aysel"
        title={
          <>
            Mijn weg naar <em>vrijheid</em> en <em>leiderschap</em>
          </>
        }
        description={
          <>
            Mijn naam is Aysel Disbudak. Ik ben ondernemer, auteur, Business &
            Wealth Mentor, moeder en vrouw en bovenal een ziel die heeft geleerd
            om van pijn haar <em>kracht</em> te maken.
          </>
        }
      ></Hero>

      {/* Intro Section with Image */}
      <div className="vision-section section-default" id="verhaal">
        <div className="vision-content">
          <h2 className="font-heading text-4xl md:text-5xl text-[#2E1A34]">
            Mijn verleden heeft mij{" "}
            <em className="italic text-[#C94D4D]">niet</em> gebroken
          </h2>
          <div className="w-20 h-1 bg-[#C94D4D]"></div>
          <p className="text-xl text-gray-700 leading-relaxed font-semibold">
            Het heeft mij wakker gemaakt.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mijn missie is simpel, maar diep: Ik help mensen hun{" "}
            <em>intuïtie</em> terugvinden, hun <em>eigen pad</em> kiezen en een
            leven en bedrijf bouwen dat klopt met wie ze <em>écht</em> zijn.
          </p>
        </div>
        <div className="vision-image">
          <Image
            src="/newimages/image2.jpeg"
            alt="Aysel Disbudak"
            fill
            sizes="50vw"
            className="p-20"
          />
        </div>
      </div>

      {/* Timeline/Achievement Section - Full Width 50/50 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full bg-[#E3EBF0]">
        <div className="relative min-h-[700px] order-2 lg:order-1">
          <Image
            src="/newimages/image4.jpeg"
            alt="Aysel Disbudak Journey"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-10 md:p-20 lg:px-24 order-1 lg:order-2">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] text-[#2E1A34] mb-6">
            Mijn <em className="italic text-[#C94D4D]">reis</em>
          </h2>
          <div className="w-20 h-1 bg-[#C94D4D] mb-10"></div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="font-heading text-5xl text-[#C94D4D]">
                  1999
                </span>
              </div>
              <div className="flex-grow bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:bg-white hover:shadow-lg transition-all">
                <h3 className="font-heading text-2xl text-[#2E1A34] mb-3">
                  Start in welzijnswerk
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sinds <em>1999</em> werk ik in het welzijnswerk en
                  ondernemerschap, waar ik jarenlang naast{" "}
                  <em>kwetsbare gezinnen, vrouwen en kinderen</em> heb gestaan.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="font-heading text-5xl text-[#C94D4D]">
                  2006
                </span>
              </div>
              <div className="flex-grow bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:bg-white hover:shadow-lg transition-all">
                <h3 className="font-heading text-2xl text-[#2E1A34] mb-3">
                  Doorbraak en erkenning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In 2006 werd ik bekroond tot{" "}
                  <em>Allochtone Zakenvrouw van het Jaar</em> en publiceerde ik
                  mijn eerste boek <em>De nootjes van het huwelijk</em>. Dat
                  boek was mijn stem, mijn waarheid, mijn <em>bevrijding</em>.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="font-heading text-5xl text-[#C94D4D]">Nu</span>
              </div>
              <div className="flex-grow bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:bg-white hover:shadow-lg transition-all">
                <h3 className="font-heading text-2xl text-[#2E1A34] mb-3">
                  Business & Wealth Mentor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mijn leven is het bewijs dat je <em>niet</em> hoeft te blijven
                  waar je bent begonnen. Vandaag help ik vrouwen en leiders hun{" "}
                  <em>kracht</em> terugvinden en een leven op te bouwen vanuit{" "}
                  <em>vrijheid en bewust leiderschap</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manifest Section - Full Width with Image */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/newimages/IMG_3132.jpg"
            alt="Aysel Disbudak"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E1A34]/95 via-[#2E1A34]/90 to-[#2E1A34]/85"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl py-32 md:py-40">
            <span className="inline-block text-sm font-semibold text-[#E3EBF0] uppercase tracking-[0.3em] mb-6">
              Missie & Manifest
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-white mb-8 leading-tight">
              De kracht van een vrouw die{" "}
              <em className="italic text-[#C94D4D]">opstaat</em>
            </h2>
            <div className="w-24 h-1 bg-[#C94D4D] mb-8"></div>

            <div className="space-y-6 text-lg md:text-xl text-[#E3EBF0] leading-relaxed">
              <p>
                Ik heb mij altijd een kind gevoeld zonder ouders, zonder
                schouders om op te rusten. <em>Alleen</em> op de wereld. Alsof
                ik was achtergelaten in stilte, zonder uitleg, zonder richting,
                zonder bescherming.
              </p>
              <p>
                Niet wetend waar ik heen moest, niet wetend wie ik kon
                vertrouwen. En tóch… ben ik gaan <em>rennen</em>. Niet weg, maar{" "}
                <em>vooruit</em>. Omdat diep vanbinnen iets in mij weigerde op
                te geven.
              </p>
              <p className="text-2xl font-semibold text-white">
                Omdat ik voelde dat mijn leven <em>betekenis</em> had.
              </p>
              <p>
                En in dat rennen ontdekte ik mijn <em>vrouwelijke kracht</em>.
                Geen breekbare kwetsbaarheid, maar een stille, onbreekbare
                kracht. De kracht van een vrouw die ondanks alles opstaat, haar
                plek inneemt en haar licht doorgeeft aan anderen.
              </p>
              <p className="text-xl font-semibold text-white pt-4">
                Vandaag bouw ik podia voor anderen, voor mensen die hun stem
                willen terugvinden en hun verhaal willen herschrijven.
              </p>
              <p className="text-2xl font-bold text-[#C94D4D] pt-6">
                Ik ben niet alleen mentor of ondernemer. Ik ben een vrouw die{" "}
                <em>vuur</em> draagt en dat vuur doorgeeft.
              </p>
            </div>

            <div className="flex gap-4 mt-12">
              <Button href="/diensten" variant="primary-reversed">
                Werk met mij
              </Button>
              <Button href="/publicaties" variant="outline-white">
                Lees mijn boek
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <Section variant="default">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-[#2E1A34] mb-6">
              Wat mij <em className="italic text-[#C94D4D]">drijft</em>
            </h2>
            <div className="w-20 h-1 bg-[#C94D4D] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-br from-[#2E1A34] to-[#3d2547] p-10 rounded-lg text-center group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C94D4D] to-[#C94D4D]/50"></div>
              <h3 className="font-heading text-3xl text-white mb-4 mt-4">
                Empowerment
              </h3>
              <div className="w-16 h-1 bg-[#C94D4D] mx-auto mb-6"></div>
              <p className="text-[#E3EBF0] leading-relaxed text-lg">
                Iedereen verdient de kans om <em>op te staan</em> en hun eigen
                kracht te ontdekken, ongeacht waar ze vandaan komen.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-[#2E1A34] to-[#3d2547] p-10 rounded-lg text-center group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C94D4D] to-[#C94D4D]/50"></div>
              <h3 className="font-heading text-3xl text-white mb-4 mt-4">
                Leiderschap
              </h3>
              <div className="w-16 h-1 bg-[#C94D4D] mx-auto mb-6"></div>
              <p className="text-[#E3EBF0] leading-relaxed text-lg">
                Waar leiderschap draait om het <em>bouwen van bruggen</em>, het
                creëren van kansen en het inspireren van anderen.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-[#2E1A34] to-[#3d2547] p-10 rounded-lg text-center group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C94D4D] to-[#C94D4D]/50"></div>
              <h3 className="font-heading text-3xl text-white mb-4 mt-4">
                Waarheid
              </h3>
              <div className="w-16 h-1 bg-[#C94D4D] mx-auto mb-6"></div>
              <p className="text-[#E3EBF0] leading-relaxed text-lg">
                Leven vanuit je <em>authentieke zelf</em>, zonder maskers,
                zonder excuses. Jouw waarheid is jouw kracht.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Klaar om <em className="italic text-[#C94D4D]">jouw verhaal</em> te
            herschrijven?
          </h2>
          <p className="text-xl text-[#E3EBF0] leading-relaxed mb-10">
            Laten we samen ontdekken hoe jij <em>jouw kracht</em> kunt
            terugvinden en het leven kunt leiden dat bij jou past.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact" variant="primary-reversed">
              Neem contact op
            </Button>
            <Button href="/diensten" variant="outline-white">
              Bekijk mijn diensten
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
