"use client";

import Image from "next-export-optimize-images/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Diensten() {
  return (
    <main>
      <Header />

      <Hero
        backgroundImage="/newimages/image4.jpeg"
        eyebrow="Business & Wealth Mentor"
        title={
          <>
            Mijn <em>Aanbod</em>
          </>
        }
        description={
          <>
            Dit is geen gewone mentoring. Dit is een <em>ontwaking</em>. Een{" "}
            <em>thuiskomen</em> in jezelf. Een herinnering aan wie jij{" "}
            <em>werkelijk</em> bent.
          </>
        }
      >
        <div className="flex gap-4 mt-10">
          <Button href="#mentoring" variant="primary">
            Lees meer
          </Button>
          <Button href="/contact" variant="outline-white">
            Neem contact op
          </Button>
        </div>
      </Hero>

      {/* Main Mentoring Section */}
      <Section variant="default" id="mentoring">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
              <Image
                src="/newimages/image1.jpeg"
                alt="Aysel Disbudak - Business & Wealth Mentor"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-heading text-4xl md:text-5xl text-[#2E1A34]">
                1-op-1 Business & Wealth{" "}
                <em className="italic text-[#C94D4D]">Mentoring</em>
              </h2>
              <div className="w-20 h-1 bg-[#C94D4D]"></div>
              <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                Voor ondernemers en leiders die diep vanbinnen weten: ik ben
                hier voor <em>méér</em>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Meer <em>vrijheid</em>, meer <em>waarheid</em>, meer{" "}
                <em>impact</em>.
              </p>
            </div>
          </div>

          <div className="bg-[#E3EBF0] p-10 md:p-16 rounded-lg mb-12">
            <h3 className="font-heading text-3xl text-[#2E1A34] mb-8 text-center">
              In ons <em className="italic text-[#C94D4D]">traject</em>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C94D4D]">
                <h4 className="font-heading text-xl text-[#2E1A34] mb-3">
                  💫 Doorbreken we oude patronen
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Die je <em>klein</em> hielden en je <em>vrijheid</em>{" "}
                  beperken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C94D4D]">
                <h4 className="font-heading text-xl text-[#2E1A34] mb-3">
                  🌱 Helen we wat jou klein hield
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Zodat je weer <em>volledig</em> kunt zijn wie je bent.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C94D4D]">
                <h4 className="font-heading text-xl text-[#2E1A34] mb-3">
                  👑 Versterken we jouw leiderschap
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Vanuit <em>vertrouwen</em> en <em>authentieke kracht</em>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C94D4D]">
                <h4 className="font-heading text-xl text-[#2E1A34] mb-3">
                  ✨ Bouwen we een business
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Die <em>klopt met jouw ziel</em> en jouw waarheid.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-heading text-[#2E1A34] leading-relaxed mb-6">
              Ik loop <em className="italic text-[#C94D4D]">naast</em> je. Ik
              kijk <em className="italic text-[#C94D4D]">met</em> je. Ik voel{" "}
              <em className="italic text-[#C94D4D]">met</em> je.
            </p>
            <p className="text-xl font-heading text-[#C94D4D]">
              En als het moet, trek ik je omhoog tot jij zelf weer{" "}
              <em>staat</em>.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Start jouw traject
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Services */}
      <Section variant="light-blue">
        <div className="diensten-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-[#2E1A34] mb-4">
              Meer <em className="italic text-[#C94D4D]">manieren</em> om samen
              te werken
            </h2>
            <div className="w-20 h-1 bg-[#C94D4D] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Naast 1-op-1 mentoring bied ik verschillende vormen van
              begeleiding aan voor ondernemers en leiders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="service-highlight">
              <div className="service-number">01</div>
              <h3 className="font-heading">
                Online <em>Supervisie</em>
              </h3>
              <p className="font-body">
                Digitale begeleiding voor ondernemers, waar je ook bent. Via
                online sessies krijg je <em>praktische tools</em> en inzichten
                om je business te laten groeien.
              </p>
              <div className="service-tag">Voor ondernemers</div>
            </div>

            <div className="service-highlight">
              <div className="service-number">02</div>
              <h3 className="font-heading">
                Trainingen <em>Blended Learning</em>
              </h3>
              <p className="font-body">
                Combinatie van online en offline trainingen zoals "Herontdek
                Jezelf en Je Bedrijf". <em>Interactief</em>, praktisch en direct
                toepasbaar op jouw situatie.
              </p>
              <div className="service-tag">Blended learning</div>
            </div>

            <div className="service-highlight">
              <div className="service-number">03</div>
              <h3 className="font-heading">
                Jaarlijks <em>Evenement</em>
              </h3>
              <p className="font-body">
                Exclusieve events rondom belangrijke thema's zoals Nationale
                Vrouwendag. Een kans om te <em>netwerken</em>, inspiratie op te
                doen en te groeien met gelijkgestemde vrouwen.
              </p>
              <div className="service-tag">Netwerken & inspiratie</div>
            </div>

            <div className="service-highlight">
              <div className="service-number">04</div>
              <h3 className="font-heading">
                Spreken & <em>Workshops</em>
              </h3>
              <p className="font-body">
                Inspirerende lezingen en workshops voor bedrijven en
                organisaties. Thema's rond <em>leiderschap</em>,{" "}
                <em>empowerment</em> en authentieke groei.
              </p>
              <div className="service-tag">Inspiratie & impact</div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-lg text-center mt-12 max-w-3xl mx-auto">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="font-heading text-2xl text-[#2E1A34] mb-4">
              Interesse in{" "}
              <em className="italic text-[#C94D4D]">samenwerken</em>?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Laten we kennismaken! Bel of mail voor een{" "}
              <em>vrijblijvend gesprek</em>
              over hoe ik jou kan helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="primary">
                Plan een gesprek
              </Button>
              <a
                href="tel:+31204470518"
                className="text-[#2E1A34] font-semibold hover:text-[#C94D4D] transition-colors"
              >
                📞 +31 20 44 70 518
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section - Achievements */}
      <Section variant="default">
        <div className="diensten-container">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#C94D4D] uppercase tracking-wide mb-4">
              Mijn Verdiensten
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#2E1A34] mb-6">
              Een Track Record van{" "}
              <em className="italic text-[#C94D4D]">Impact</em>
            </h2>
            <div className="w-20 h-1 bg-[#C94D4D] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Van de oprichting van belangrijke zorginstellingen tot{" "}
              <em>innovatieve methodieken</em> en bestseller boeken - een
              overzicht van <em>25 jaar ondernemerschap</em> en maatschappelijke
              impact.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1999</div>
              <div className="timeline-content">
                <h3 className="font-heading">Platform Gehandicapten</h3>
                <p className="font-body">
                  Oprichting van Platform Gehandicapten, een belangenorganisatie
                  die zich inzet voor de rechten en ondersteuning van
                  gehandicapten.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2001</div>
              <div className="timeline-content">
                <h3 className="font-heading">Diversiteitsprijs</h3>
                <p className="font-body">
                  Diversiteitsprijs gemeente Amsterdam
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2003</div>
              <div className="timeline-content">
                <h3 className="font-heading">AB Harrewijnprijs</h3>
                <p className="font-body">
                  AB Harrewijnprijs voor initiatieven aan de onderkant van de
                  samenleving & Diversiteitsprijs van de gemeente Amsterdam
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2004</div>
              <div className="timeline-content">
                <h3 className="font-heading">Marga Klompéstichting</h3>
                <p className="font-body">
                  Eerbetoon van de Marga Klompéstichting
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-content">
                <h3 className="font-heading">Unal Zorg & Zami-Award</h3>
                <p className="font-body">
                  Oprichting van Unal Zorg, een zorginstelling die zich richt op
                  jeugd- en volwassenenzorg binnen diverse gemeenschappen.
                  Winnaar van de Zami-Award van migrantenvrouwen.
                </p>
              </div>
            </div>

            <div className="timeline-item timeline-item-featured">
              <div className="timeline-year">2006</div>
              <div className="timeline-content">
                <h3 className="font-heading">Bestseller & Zakenvrouw</h3>
                <p className="font-body">
                  Auteur van bestseller "De nootjes van het huwelijk", de
                  autobiografie over Aysels leven vol uitdagingen, geleerde
                  lessen en bereikte successen. Verkozen tot 'allochtone
                  zakenvrouw van het jaar'.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2007</div>
              <div className="timeline-content">
                <h3 className="font-heading">A Road Methodiek</h3>
                <p className="font-body">
                  Ontwikkeling van de eigen zorgmethodiek "A Road" waarmee de
                  zorgverlening beter wordt afgestemd op de verschillende
                  culturele achtergronden van cliënten.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-content">
                <h3 className="font-heading">Dubbele Erkenning</h3>
                <p className="font-body">
                  De Agis Zorgverbeteraarsprijs & Prijs gemeente Karaman in
                  Turkije voor de oprichting van een tehuis voor meisjes in nood
                  (opvang en studeren).
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3 className="font-heading">Huisje Thuisje</h3>
                <p className="font-body">
                  Ontwikkeling van het bordspel "Huisje Thuisje", een innovatief
                  spel dat zorgverleners helpt een vertrouwensband op te bouwen
                  met cliënten (effectiviteit succesvol getest door Zuyd
                  University).
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3 className="font-heading">Unal Academy</h3>
                <p className="font-body">
                  Oprichting van Unal Academy, voor het trainen en delen van
                  interculturele kennis en ervaring met zorgprofessionals.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3 className="font-heading">Communicatiewaaier</h3>
                <p className="font-body">
                  Ontwikkeling van de communicatiewaaier, een tool voor
                  hulpverleners met tips en aandachtspunten voor
                  gespreksvoering, interventie en omgaan met cliënten.
                </p>
              </div>
            </div>

            <div className="timeline-item timeline-item-featured">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3 className="font-heading">Nieuwe Missie</h3>
                <p className="font-body">
                  Carrièreswitch naar vrouwen empowerment. Start als Business &
                  Wealth Mentor om vrouwen te ondersteunen bij zakelijke groei
                  en financiële onafhankelijkheid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Klaar voor de <em className="italic text-[#C94D4D]">volgende</em>{" "}
            stap?
          </h2>
          <p className="text-xl text-[#E3EBF0] leading-relaxed mb-10">
            Met <em>bewezen expertise</em> en een passie voor empowerment sta ik
            klaar om jou te begeleiden naar succes. Neem contact op voor een{" "}
            <em>vrijblijvend kennismakingsgesprek</em>.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact" variant="primary-reversed">
              Plan een gesprek
            </Button>
            <Button href="/over-mij" variant="outline-white">
              Lees mijn verhaal
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
