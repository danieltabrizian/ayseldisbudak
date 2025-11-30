"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Media() {
  return (
    <main>
      <Header />

      <Hero
        backgroundImage="/stock/interview_camera.jpeg"
        eyebrow="Media & Pers"
        title="In de Media"
        description="Mijn verhaal, werk en missie hebben hun weg gevonden naar verschillende nationale en internationale platforms."
      />

      {/* YouTube Section */}
      <div className="vision-section section-default">
        <div className="vision-content">
          <span className="eyebrow">YOUTUBE – @AyselDisbudak</span>
          <h2 className="vision-title">
            Ruimte voor <em>échte</em> verhalen
          </h2>
          <div className="vision-text">
            <p>
              Op mijn YouTube-kanaal geef ik ruimte aan <em>échte</em> verhalen.
              Niet het perfecte plaatje, maar de <em>waarheid</em>.
            </p>
            <p>
              Ik interview ondernemers, leiders en vrouwen met een missie.
              Mensen die moesten vechten, helen en opnieuw durven kiezen. Ik
              stel de vragen die anderen niet stellen — omdat daar de{" "}
              <em>echte kracht</em> zit.
            </p>
            <p>
              YouTube is voor mij geen platform, maar een plek van{" "}
              <em>verbinding</em> en <em>bewustwording</em>.
            </p>
            <p className="font-semibold text-lg mt-6">
              Jouw waarheid is jouw kracht.
            </p>
          </div>
          <div className="vision-cta">
            <Button
              href="https://www.youtube.com/@AyselDisbudak"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abonneer je op mijn kanaal
            </Button>
          </div>
        </div>
        <div className="vision-image relative flex items-center justify-center p-20">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/newimages/ayselytthumbnail.jpg"
              alt="YouTube kanaal Aysel Disbudak"
              fill
              sizes="50vw"
              style={{ objectFit: "cover" }}
            />
            <a
              href="https://www.youtube.com/@AyselDisbudak"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            >
              <div className="w-24 h-24 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-white/20">
                <svg
                  className="w-10 h-10 text-white/70 group-hover:text-white ml-1 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* United Races Ambassadeurschap Section */}
      <div className="hey-section section-light-blue">
        <div className="hey-image">
          <Image
            src="/newimages/BannerWebsiteUnitedRaces2.jpeg"
            alt="United Races Film Project"
            fill
            sizes="50vw"
          />
        </div>
        <div className="hey-content">
          <div className="hey-slogan">
            Media is voor mij geen bekendheid.{" "}
            <em>Het is verantwoordelijkheid.</em>
          </div>
          <h2 className="hey-greeting">
            <span>United Races</span> Ambassadeur & Projectleider
          </h2>
          <div className="hey-text">
            <p className="hey-intro">
              Ambassadeur én projectleider van de internationale documentaire
              United Races — een filmproject dat zich inzet voor bewustwording
              rondom racisme, gelijkwaardigheid en de zichtbaarheid van vrouwen.
            </p>
            <p>
              Mijn rol hierin is actief en betrokken. Ik zet mij in voor het{" "}
              <em>zichtbaar maken</em> van onderbelichte verhalen, het{" "}
              <em>versterken</em> van vrouwenstemmen en het creëren van
              bewustzijn.
            </p>
            <p>
              Dit project is een podium voor <em>waarheid</em> — in het verleden
              én in het heden. Het gaat over gelijkwaardigheid, respect en het
              erkennen van de kracht van diversiteit.
            </p>
            <p className="hey-mission">
              Samen bouwen we aan een wereld waarin iedereen gezien wordt.
              Waarin verhalen verteld worden. Waarin vrouwen hun plek opeisen.
            </p>
            <div className="hey-cta mt-8">
              <Button
                href="https://unitedracesfilm.com/ambassadors/"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bekijk United Races Ambassadeurs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Media Item 1: LINDA. magazine */}
      <Section variant="default">
        <div className="media-item media-item-reversed">
          <div className="media-content">
            <span className="media-category">LINDA. magazine</span>
            <h2 className="media-item-title">Featured in LINDA. magazine</h2>
            <div className="separator-line"></div>
            <p className="media-description">
              Mijn verhaal over <em>leiderschap</em>, <em>empowerment</em> en
              het durven kiezen voor je eigen pad werd gedeeld in LINDA.
              magazine. Een interview over het herwinnen van je kracht en het
              bouwen van een leven op jouw voorwaarden.
            </p>
          </div>
          <div className="media-image-wrapper">
            <Image
              src="/appearances/linda.avif"
              alt="LINDA. magazine"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Section>

      {/* Media Item 2: RTL Late Night */}
      <Section variant="light-blue">
        <div className="media-item">
          <div className="media-image-wrapper">
            <Image
              src="/appearances/rtllatenight.avif"
              alt="RTL Late Night interview"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="media-content">
            <span className="media-category">RTL Late Night</span>
            <h2 className="media-item-title">(G)een Echte Fatima</h2>
            <div className="separator-line"></div>
            <p className="media-description">
              In deze uitzending van RTL Late Night ging ik in gesprek over
              identiteit, culturele verwachtingen en de kracht om je eigen weg
              te vinden. Een eerlijk verhaal over het doorbreken van patronen en
              het omarmen van je <em>waarheid</em>.
            </p>
          </div>
        </div>
      </Section>

      {/* Media Item 3: NPO Radio 1 */}
      <Section variant="default">
        <div className="media-item media-item-reversed">
          <div className="media-content">
            <span className="media-category">NPO Radio 1</span>
            <h2 className="media-item-title">
              Over femicide, emancipatie en vrouwenrechten
            </h2>
            <div className="separator-line"></div>
            <p className="media-description">
              Bij NPO Radio 1 sprak ik over onderwerpen die ertoe doen:{" "}
              <em>femicide</em>, vrouwenrechten en de strijd voor echte
              emancipatie. Een gesprek over bewustwording, verantwoordelijkheid
              en de noodzaak van <em>actie</em>.
            </p>
          </div>
          <div className="media-image-wrapper">
            <Image
              src="/appearances/nporadio1.jpg"
              alt="NPO Radio 1 interview"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Section>

      {/* Media Item 4: Pauw en Witteman */}
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
