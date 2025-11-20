"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Media() {
  return (
    <main>
      <Header />

      <Section variant="purple" className="media-page-header">
        <div className="media-header-content">
          <span className="media-eyebrow">Media & Pers</span>
          <h1 className="media-title">In de Media</h1>
          <p className="media-subtitle">
            Een overzicht van mijn optredens en interviews in verschillende
            media.
          </p>
        </div>
      </Section>

      {/* Media Item 1: Pauw en Witteman */}
      <Section variant="default">
        <div className="media-item">
          <div className="media-image-wrapper">
            <Image
              src="/appearances/pauw-en-witteman-4b43d0e7.webp"
              alt="Aysel Disbudak bij Pauw en Witteman"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="media-content">
            <span className="media-category">Talkshow Pauw & Witteman</span>
            <h2 className="media-item-title">Aysel bij Pauw en Witteman</h2>
            <div className="separator-line"></div>
            <p className="media-description">
              Op 20 september 2006 was Aysel Disbudak (destijds Caliskan) op
              bezoek in de talkshow van "Pauw en Witteman" om te praten over het
              net verschenen boek "De nootjes van het Huwelijk"
            </p>
          </div>
        </div>
      </Section>

      {/* Media Item 2: Nederlandse Moslim Oproep */}
      <Section variant="light-blue">
        <div className="media-item media-item-reversed">
          <div className="media-content">
            <span className="media-category">Nederlandse Moslim Oproep</span>
            <h2 className="media-item-title">
              Scheiden doet lijden – voor de vrouw althans
            </h2>
            <div className="separator-line"></div>
            <p className="media-description">
              Na een scheiding pakt de man vrij snel de draad van zijn bestaan
              weer op, maar het leven van de vrouw ligt aan scherven. De
              omgeving accepteert haar scheiding niet, ze denkt dat ze altijd
              minder rechten heeft dan de man. Waarom wordt het leven van
              vrouwen zoveel moeilijker na een scheiding?
            </p>
          </div>
          <div className="media-image-wrapper">
            <Image
              src="/appearances/kantoor-nmo-8c32acdb.webp"
              alt="Nederlandse Moslim Oproep interview"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Section>

      {/* Media Item 3: NPO Start */}
      <Section variant="default">
        <div className="media-item">
          <div className="media-image-wrapper">
            <Image
              src="/appearances/npo.webp"
              alt="NPO Start interview"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="media-content">
            <span className="media-category">NPO Start</span>
            <h2 className="media-item-title">
              Interview op NPO Start "Dit is de zondag"
            </h2>
            <div className="separator-line"></div>
            <p className="media-description">
              Een paar dagen voor dit radiointerview bezocht journalist Joke
              Troost Unzalzorg Amsterdam. Zij zag toen met eigen ogen wat
              Unzalzorg doet en betekent voor allochtone cliënten met een
              beperking. De journaliste laat ook medewerkers en cliënten aan het
              woord. Onder hen ook Unal, de broer van Aysel en de reden dat zij
              Unzalzorg heeft opgericht. Unal vertelt hoe belangrijk zijn zus al
              van jongsaf voor hem is en wat hij allemaal leert dankzij haar.
            </p>
          </div>
        </div>
      </Section>

      {/* Media Item 4: Goedemorgen Nederland */}
      <Section variant="light-blue">
        <div className="media-item media-item-reversed">
          <div className="media-content">
            <span className="media-category">
              TV-programma Goedemorgen Nederland
            </span>
            <h2 className="media-item-title">Goedemorgen Nederland</h2>
            <div className="separator-line"></div>
            <p className="media-description">
              Op 18 september 2006 was ik te gast in het TV-programma
              "Goedemorgen Nederland". In dit programma vertel ik over mijn
              leven en het schrijven van het boek "De nootjes van het huwelijk".
            </p>
          </div>
          <div className="media-image-wrapper">
            <Image
              src="/appearances/goedemorgennl.webp"
              alt="Goedemorgen Nederland interview"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="purple">
        <div className="cta-content">
          <h2 className="font-heading text-white mb-6">Wil je meer weten?</h2>
          <p className="font-body text-light-blue mb-8">
            Neem contact op voor meer informatie over mijn diensten, boekingen
            voor interviews, of om een samenwerking te bespreken.
          </p>
          <div className="cta-buttons">
            <Button href="/contact" variant="primary-reversed">
              Neem contact op
            </Button>
            <Button href="/diensten" variant="outline-white" className="ml-4">
              Bekijk mijn diensten
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
