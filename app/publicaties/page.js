"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Publicaties() {
  return (
    <main>
      <Header />

      <Section variant="purple" className="publications-page-header">
        <div className="publications-header-content">
          <span className="publications-eyebrow">Mijn Werk</span>
          <h1 className="publications-title">Publicaties</h1>
          <p className="publications-subtitle">
            Ontdek de boeken waarin ik mijn verhaal en ervaringen deel om
            anderen te inspireren.
          </p>
        </div>
      </Section>

      {/* Book 1: De nootjes van het huwelijk */}
      <Section variant="default">
        <div className="book-showcase">
          <div className="book-image-wrapper">
            <Image
              src="/images/nuts1.jpg"
              alt="De nootjes van het huwelijk"
              width={300}
              height={450}
              style={{ width: "100%", height: "auto" }}
              className="book-cover"
            />
          </div>
          <div className="book-details">
            <span className="book-eyebrow">Autobiografie</span>
            <h2 className="book-title">De nootjes van het huwelijk</h2>

            <p className="book-description">
              Aysel Disbudak is een succesvolle, geëmancipeerde Turkse vrouw,
              die in Nederland opgroeide en prijzen won met haar werk voor
              allochtone gehandicapten.
            </p>

            <p className="book-description">
              Weinig mensen weten hoe zij haar geluk en zelfstandigheid heeft
              moeten bevechten, en hoe dit haar bijna het leven heeft gekost.
            </p>

            <p className="book-description">
              Een hartverscheurend verhaal dat een indringende inkijk geeft in
              de wereld van Turkse vrouwen in Nederland.
            </p>

            <div className="book-meta">
              <div className="meta-item">
                <span className="meta-label">Verschenen</span>
                <span className="meta-value">Oktober 2006</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Pagina's</span>
                <span className="meta-value">300 pagina's pocket</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Prijs</span>
                <span className="meta-value">€14,95</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Verzendkosten</span>
                <span className="meta-value">€6,95</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">ISBN</span>
                <span className="meta-value">9072219082</span>
              </div>
            </div>

            <div className="book-actions">
              <Button
                href="https://www.bol.com/nl/nl/p/zilver-pockets-de-nootjes-van-het-huwelijk/1001004005487590"
                variant="primary"
              >
                Bestel hier uw exemplaar
              </Button>
              <Button href="/contact" variant="outline" className="ml-4">
                Neem contact op
              </Button>
            </div>

            <div className="book-note">
              <p>
                Sinds het boek in 2006 verscheen, kreeg Aysel heel veel reacties
                op haar autobiografische verhaal.
              </p>
              <a href="#reacties" className="reacties-link">
                Lees deze reacties
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Book 2: Durven doen wat je raakt */}
      <Section variant="light-blue">
        <div className="book-showcase book-showcase-reversed">
          <div className="book-details">
            <span className="book-eyebrow">Samenwerking</span>
            <h2 className="book-title">Durven doen wat je raakt</h2>

            <p className="book-description">
              Geeft je een bijzondere kijk in de levens van 22 indrukwekkende
              Nederlanders van wie je misschien dacht dat ze het allemaal in hun
              schoot geworpen hebben gekregen.
            </p>

            <p className="book-description">
              Britta Böhler, Henk Krol, Ahmed Marcouch, Inez van Oord, Neelie
              Kroes, maar ook minder bekende Nederlanders die erg belangrijk
              zijn voor een rechtvaardiger samenleving.
            </p>

            <div className="book-meta">
              <div className="meta-item">
                <span className="meta-label">Verschenen</span>
                <span className="meta-value">15 oktober 2011</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Pagina's</span>
                <span className="meta-value">223 pagina's</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Prijs</span>
                <span className="meta-value">€8,85</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Formaat</span>
                <span className="meta-value">Hardcover</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">ISBN</span>
                <span className="meta-value">9789058715487</span>
              </div>
            </div>

            <div className="book-actions">
              <Button
                href="https://www.bol.com/nl/nl/p/durven-doen-wat-je-raakt/1001004011565849"
                variant="primary"
              >
                Bestel dit boek
              </Button>
              <Button href="/contact" variant="outline" className="ml-4">
                Meer informatie
              </Button>
            </div>
          </div>
          <div className="book-image-wrapper">
            <Image
              src="/images/book2.jpg"
              alt="Durven doen wat je raakt"
              width={300}
              height={450}
              style={{ width: "100%", height: "auto" }}
              className="book-cover"
            />
          </div>
        </div>
      </Section>

      {/* Reacties Section */}
      <Section variant="default" id="reacties">
        <div className="reacties-section">
          <h2 className="section-title">
            Reacties op "De nootjes van het huwelijk"
          </h2>
          <div className="separator-line"></div>
          <p className="reacties-intro">
            Sinds het boek in 2006 verscheen, ontving Aysel talloze
            hartverwarmende reacties van lezers die geraakt zijn door haar
            verhaal.
          </p>

          <div className="reacties-grid">
            <div className="reactie-card">
              <h3 className="reactie-author">Loes</h3>
              <p className="reactie-text">
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

            <div className="reactie-card">
              <h3 className="reactie-author">Rinus van Zandwijk</h3>
              <p className="reactie-text">
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

            <div className="reactie-card">
              <h3 className="reactie-author">Yvonne Schaap</h3>
              <p className="reactie-text">
                Lieve Aysel, wat heb ik een respect voor jou! Ik heb je boek in
                1 adem uitgelezen. Wat een verhaal, wat een kracht en wat een
                moed heb jij. Ik ben blij dat je nu gelukkig bent en je eigen
                leven leidt. Ik wens je alle geluk van de wereld toe.
              </p>
            </div>

            <div className="reactie-card">
              <h3 className="reactie-author">Guzel</h3>
              <p className="reactie-text">
                Hallo Aysel, heb zelf een boek geschreven (heb er 9 jaar over
                gedaan), maar durf het nog niet naar een uitgeverij te sturen.
                Graag zou ik met jou in contact willen komen. Wellicht kun jij
                me wel raad geven en mij in de goede richting sturen. Vol
                bewondering voor wat jij hebt bereikt.
              </p>
            </div>

            <div className="reactie-card">
              <h3 className="reactie-author">Jose</h3>
              <p className="reactie-text">
                Lieve Aysel, vol bewondering en met diep respect voor het
                strijden wat jij deed en wat je nu bereikt hebt, heb ik jou boek
                in 2 dagen uitgelezen. Wat ben je een ontzettende sterke vrouw.
                Ik ben dan wel een Nederlandse vrouw maar kan me heel goed
                inleven in jou boek mede doordat ik met een arabische man
                getrouwd ben...en dat is niet altijd makkelijk.
              </p>
            </div>

            <div className="reactie-card">
              <h3 className="reactie-author">S. Kandemir</h3>
              <p className="reactie-text">
                Harkulade! Hoi Aysel, ik heb mij deze week ingeschreven in de
                gemeentelijke bibliotheek. Het eerste boek dat ik uit de pland
                pakte was die van jouw. Ik keek naar de kaft en zag je naam en
                dit boek moet ik lezen. Ik lees het al drie dagen en ben al op
                bladzijde 266. Het boek dat je hebt geschreven is zo interessant
                dat ik tot vroeg in de ochtend door blijf lezen. Ik vind het
                knap dat je dit hebt durven schrijven.
              </p>
            </div>

            <div className="reactie-card">
              <h3 className="reactie-author">Maria</h3>
              <p className="reactie-text">
                Beste Aysel, wat een indrukwekkend boek heb je geschreven. Ik
                heb het in één ruk uitgelezen. Je verhaal heeft me diep geraakt.
                Ik vind het heel bijzonder hoe je ondanks alles zo positief in
                het leven staat. Je bent een voorbeeld voor velen.
              </p>
            </div>

            <div className="reactie-card">
              <h3 className="reactie-author">Janna</h3>
              <p className="reactie-text">
                Lieve Aysel, ik heb je boek gelezen en ik ben er stil van. Wat
                heb jij veel meegemaakt. Ik vind het heel dapper dat je je
                verhaal hebt gedeeld. Ik hoop dat je boek veel mensen zal
                inspireren. Ik wens je alle goeds.
              </p>
            </div>

            <div className="reactie-card">
              <h3 className="reactie-author">Feyza</h3>
              <p className="reactie-text">
                Selam Aysel abla, ik heb je boek gelezen en ik vond het echt
                geweldig. Ik heb er veel van geleerd. Ik vind het heel knap dat
                je zo sterk bent gebleven. Je bent een inspiratie voor mij.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
