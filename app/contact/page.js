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
          <Button href="tel:+31204470518" variant="primary">
            Bel nu
          </Button>
          <Button href="mailto:info@ayseldisbudak.nl" variant="outline-white">
            Stuur een email
          </Button>
        </div>
      </Hero>

      <Section variant="default">
        <div className="max-w-7xl mx-auto px-4">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {/* Address Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                📍
              </div>
              <h3 className="font-heading text-aysel-red text-xl mb-4">
                Bezoekadres
              </h3>
              <div className="w-12 h-px bg-aysel-red/30 mx-auto mb-4"></div>
              <p className="font-body text-aysel-purple/80 leading-relaxed">
                Keurenplein 53
                <br />
                1069 CD Amsterdam
                <br />
                Nederland
              </p>
            </div>

            {/* Phone Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                📞
              </div>
              <h3 className="font-heading text-aysel-red text-xl mb-4">
                Telefoon
              </h3>
              <div className="w-12 h-px bg-aysel-red/30 mx-auto mb-4"></div>
              <p className="font-body text-aysel-purple/80 leading-relaxed">
                <strong className="text-aysel-purple">Algemeen:</strong>
                <br />
                <a
                  href="tel:+31204470518"
                  className="text-aysel-purple hover:text-aysel-red transition-colors duration-300 underline decoration-aysel-red/30 hover:decoration-aysel-red"
                >
                  +31 20 44 70 518
                </a>
                <br />
                <br />
                <strong className="text-aysel-purple">Bij spoed:</strong>
                <br />
                <a
                  href="tel:+31645200022"
                  className="text-aysel-purple hover:text-aysel-red transition-colors duration-300 underline decoration-aysel-red/30 hover:decoration-aysel-red"
                >
                  06 45 20 00 22
                </a>
              </p>
            </div>

            {/* Email Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                ✉️
              </div>
              <h3 className="font-heading text-aysel-red text-xl mb-4">
                Email
              </h3>
              <div className="w-12 h-px bg-aysel-red/30 mx-auto mb-4"></div>
              <p className="font-body text-aysel-purple/80 leading-relaxed">
                Voor vragen en afspraken:
                <br />
                <a
                  href="mailto:info@ayseldisbudak.nl"
                  className="text-aysel-purple hover:text-aysel-red transition-colors duration-300 underline decoration-aysel-red/30 hover:decoration-aysel-red break-all"
                >
                  info@ayseldisbudak.nl
                </a>
              </p>
            </div>

            {/* Hours Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                🕒
              </div>
              <h3 className="font-heading text-aysel-red text-xl mb-4">
                Openingstijden
              </h3>
              <div className="w-12 h-px bg-aysel-red/30 mx-auto mb-4"></div>
              <p className="font-body text-aysel-purple/80 leading-relaxed">
                <strong className="text-aysel-purple">Ma - Do:</strong> 9:00 -
                17:00
                <br />
                <strong className="text-aysel-purple">Vrijdag:</strong> 9:00 -
                15:00
                <br />
                <strong className="text-aysel-purple">Weekend:</strong> Gesloten
              </p>
            </div>
          </div>

          {/* Personal Guidance Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <p className="font-body text-aysel-purple/80 text-lg leading-relaxed">
                Neem gerust contact met me op via telefoon of email. Voor
                dringende zaken ben ik ook bereikbaar op mijn spoednummer. Ik
                kijk ernaar uit om van je te horen!
              </p>
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
            <Button href="tel:+31204470518" variant="primary">
              Bel nu
            </Button>
            <Button href="mailto:info@ayseldisbudak.nl" variant="accent">
              Stuur een email
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
