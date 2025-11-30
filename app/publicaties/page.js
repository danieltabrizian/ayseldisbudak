"use client";

import Image from "next-export-optimize-images/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Publicaties() {
  return (
    <main>
      <Header />

      <Hero
        backgroundImage="/stock/library.jpg"
        eyebrow="Mijn Werk"
        title="Boeken"
        description="Ontdek de boeken waarin ik mijn verhaal en ervaringen deel om anderen te inspireren en te empoweren op hun eigen reis."
      >
        <div className="flex gap-4 mt-10">
          <Button href="#boeken" variant="primary">
            Bekijk boeken
          </Button>
          <Button href="#reacties" variant="outline-white">
            Lees reacties
          </Button>
        </div>
      </Hero>

      {/* Book 1: De nootjes van het huwelijk */}
      <Section variant="default" id="boeken">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="flex justify-center md:justify-start">
            <div>
              <Image
                src="/images/nuts1.jpg"
                alt="De nootjes van het huwelijk"
                width={300}
                height={450}
                className="shadow-lg rounded-lg w-auto h-auto max-w-[300px]"
              />
            </div>
          </div>
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold text-[#C94D4D] uppercase tracking-wide">
              Autobiografie
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#2E1A34]">
              De nootjes van het huwelijk
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Aysel Disbudak is een succesvolle, geëmancipeerde Turkse vrouw,
              die in Nederland opgroeide en prijzen won met haar werk voor
              allochtone gehandicapten.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Weinig mensen weten hoe zij haar geluk en zelfstandigheid heeft
              moeten bevechten, en hoe dit haar bijna het leven heeft gekost.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Een hartverscheurend verhaal dat een indringende inkijk geeft in
              de wereld van Turkse vrouwen in Nederland.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-gray-200">
              <div>
                <span className="text-sm text-gray-500">Verschenen</span>
                <span className="block font-semibold text-gray-900">
                  Oktober 2006
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Pagina's</span>
                <span className="block font-semibold text-gray-900">
                  300 pagina's pocket
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Prijs</span>
                <span className="block font-semibold text-gray-900">
                  €14,95
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Verzendkosten</span>
                <span className="block font-semibold text-gray-900">€6,95</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">ISBN</span>
                <span className="block font-semibold text-gray-900">
                  9072219082
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="https://www.bol.com/nl/nl/p/zilver-pockets-de-nootjes-van-het-huwelijk/1001004005487590"
                variant="primary"
              >
                Bestel hier uw exemplaar
              </Button>
              <Button href="/contact" variant="outline">
                Neem contact op
              </Button>
            </div>

            <div className="bg-[#E3EBF0] p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                Sinds het boek in 2006 verscheen, kreeg Aysel heel veel reacties
                op haar autobiografische verhaal.
              </p>
              <a
                href="#reacties"
                className="text-[#2E1A34] font-semibold hover:text-[#C94D4D] transition-colors"
              >
                Lees deze reacties →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Book 2: Durven doen wat je raakt */}
      <Section variant="light-blue">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 order-2 md:order-1">
            <span className="inline-block text-sm font-semibold text-[#C94D4D] uppercase tracking-wide">
              Samenwerking
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#2E1A34]">
              Durven doen wat je raakt
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Geeft je een bijzondere kijk in de levens van 22 indrukwekkende
              Nederlanders van wie je misschien dacht dat ze het allemaal in hun
              schoot geworpen hebben gekregen.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Britta Böhler, Henk Krol, Ahmed Marcouch, Inez van Oord, Neelie
              Kroes, maar ook minder bekende Nederlanders die erg belangrijk
              zijn voor een rechtvaardiger samenleving.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-gray-200">
              <div>
                <span className="text-sm text-gray-500">Verschenen</span>
                <span className="block font-semibold text-gray-900">
                  15 oktober 2011
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Pagina's</span>
                <span className="block font-semibold text-gray-900">
                  223 pagina's
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Prijs</span>
                <span className="block font-semibold text-gray-900">€8,85</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Formaat</span>
                <span className="block font-semibold text-gray-900">
                  Hardcover
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">ISBN</span>
                <span className="block font-semibold text-gray-900">
                  9789058715487
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="https://www.bol.com/nl/nl/p/durven-doen-wat-je-raakt/1001004011565849"
                variant="primary"
              >
                Bestel dit boek
              </Button>
              <Button href="/contact" variant="outline">
                Meer informatie
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div>
              <Image
                src="/images/book2.jpg"
                alt="Durven doen wat je raakt"
                width={300}
                height={450}
                className="shadow-lg rounded-lg w-auto h-auto max-w-[300px]"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Reacties Section */}
      <section className="section section-default" id="reacties">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-[#2E1A34] mb-4">
              Reacties op "De nootjes van het huwelijk"
            </h2>
            <div className="w-20 h-1 bg-[#C94D4D] mb-6 mx-auto"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Sinds het boek in 2006 verscheen, ontving Aysel talloze
              hartverwarmende reacties van lezers die geraakt zijn door haar
              verhaal.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div
            className="flex gap-6 pb-4 px-6 md:px-12"
            style={{ width: "max-content" }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                Loes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Beste Aysel, ik heb je boek deze week uitgelezen (in 3 dagen
                verslonden) en aan het einde haakte ik bijna af. Niet omdat het
                niet aangrijpend was. Nee, juist omdat het zo intens grauw,
                troosteloos en ontmoedigend voelde dat ik het haast niet aankon
                om door te lezen. En jij hebt dat allemaal zelf doorstaan! [...]
                Toch wil ik wel zeggen dat het voor mij een verhaal van moed is
                en dat ik het zo hoopvol vind dat jij uiteindelijk jouw weg hebt
                gevonden en een soort van mildheid naar je ouders kunt
                opbrengen. [...] Grote dankbaarheid naar jou en blij dat jij
                jouw eigen krachtige weg nu bewandeld. Geweldig. Ik moest echt
                huilen aan het eind toen ik las dat je nu zo'n mooie relatie
                hebt met een begripvolle man. Gelukkig!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                Rinus van Zandwijk
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Naar aanleiding van het indrukwekkende interview met U op de
                EO-radio heb ik uw boek gelezen. Ik was zeer onder de indruk van
                uw verhaal en de daarin getoonde mentale veerkracht.
                Onbegrijpelijk dat U niet eerder aan deze verstikkende dictatuur
                kon ontsnappen. Het boek was voor mij – als 'blanke' man in
                Nederland opgevoed – een bevestiging van de bij mij al vaag
                bekende vrouwonvriendelijke cultuur op het Turkse platteland. Ik
                wens U nog veel geluk in het leven toe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                Yvonne Schaap
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lieve Aysel, wat heb ik een respect voor jou! Ik heb je boek in
                1 adem uitgelezen. Wat een verhaal, wat een kracht en wat een
                moed heb jij. Ik ben blij dat je nu gelukkig bent en je eigen
                leven leidt. Ik wens je alle geluk van de wereld toe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                Guzel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hallo Aysel, heb zelf een boek geschreven (heb er 9 jaar over
                gedaan), maar durf het nog niet naar een uitgeverij te sturen.
                Graag zou ik met jou in contact willen komen. Wellicht kun jij
                me wel raad geven en mij in de goede richting sturen. Vol
                bewondering voor wat jij hebt bereikt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                Jose
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lieve Aysel, vol bewondering en met diep respect voor het
                strijden wat jij deed en wat je nu bereikt hebt, heb ik jou boek
                in 2 dagen uitgelezen. Wat ben je een ontzettende sterke vrouw.
                Ik ben dan wel een Nederlandse vrouw maar kan me heel goed
                inleven in jou boek mede doordat ik met een arabische man
                getrouwd ben...en dat is niet altijd makkelijk.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                S. Kandemir
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Harkulade! Hoi Aysel, ik heb mij deze week ingeschreven in de
                gemeentelijke bibliotheek. Het eerste boek dat ik uit de pland
                pakte was die van jouw. Ik keek naar de kaft en zag je naam en
                dit boek moet ik lezen. Ik lees het al drie dagen en ben al op
                bladzijde 266. Het boek dat je hebt geschreven is zo interessant
                dat ik tot vroeg in de ochtend door blijf lezen. Ik vind het
                knap dat je dit hebt durven schrijven.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                Maria
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Beste Aysel, wat een indrukwekkend boek heb je geschreven. Ik
                heb het in één ruk uitgelezen. Je verhaal heeft me diep geraakt.
                Ik vind het heel bijzonder hoe je ondanks alles zo positief in
                het leven staat. Je bent een voorbeeld voor velen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                Janna
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lieve Aysel, ik heb je boek gelezen en ik ben er stil van. Wat
                heb jij veel meegemaakt. Ik vind het heel dapper dat je je
                verhaal hebt gedeeld. Ik hoop dat je boek veel mensen zal
                inspireren. Ik wens je alle goeds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[350px] md:w-[400px] flex-shrink-0">
              <h3 className="font-semibold text-xl text-[#2E1A34] mb-3">
                Feyza
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Selam Aysel abla, ik heb je boek gelezen en ik vond het echt
                geweldig. Ik heb er veel van geleerd. Ik vind het heel knap dat
                je zo sterk bent gebleven. Je bent een inspiratie voor mij.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
