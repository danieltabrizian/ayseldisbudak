"use client";

import Image from "next-export-optimize-images/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section - Large Image Background with Overlay */}
      <section className="hero-fw">
        <div className="hero-fw-background">
          <Image
            src="/newimages/image2.jpeg"
            alt="Aysel Disbudak - Business & Wealth Mentor"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="hero-fw-overlay"></div>
        </div>
        <div className="container hero-fw-content">
          <h1 className="hero-fw-title">
            <strong>
              Van <em>kracht</em> naar <em>leiderschap</em>.
              <br />
              Bouw het bedrijf dat bij jouw past.
            </strong>
          </h1>
        </div>
      </section>

      {/* Vision Section with Image */}
      <div className="vision-section section-default">
        <div className="vision-content">
          <h2 className="vision-title">
            <em>Stel je voor...</em>
          </h2>
          <ul className="vision-list">
            <li>
              <p>
                Je weet wie je werkelijk bent en wat jouw unieke kracht is. Je
                staat stevig in je waarheid en straalt dat uit in alles wat je
                doet.
              </p>
            </li>
            <li>
              <p>
                Je leidt een bedrijf dat perfect aansluit bij jouw ziel.
                Financiële vrijheid en vervulling gaan hand in hand.
              </p>
            </li>
            <li>
              <p>
                Je neemt bewuste keuzes over je tijd, energie en geld. Je werkt
                met mensen die je inspireren en tilt elkaar naar nieuwe hoogtes.
              </p>
            </li>
            <li>
              <p>
                Je bent écht gelukkig. Niet omdat het makkelijk is, maar omdat
                je leeft volgens jouw eigen regels en waarden.
              </p>
            </li>
          </ul>
          <div className="vision-cta">
            <Button href="/diensten" variant="primary">
              vertel me meer
            </Button>
          </div>
        </div>
        <div className="vision-image">
          <Image
            src="newimages/image5.jpeg"
            alt="Aysel Disbudak"
            fill
            sizes="50vw"
            className="p-20"
          />
        </div>
      </div>

      {/* Hey I'm Aysel Section */}
      <div className="hey-section section-light-blue">
        <div className="hey-image">
          <Image
            src="newimages/IMG_3132.jpg"
            alt="Aysel Disbudak"
            fill
            sizes="50vw"
          />
        </div>
        <div className="hey-content">
          <div className="hey-slogan">
            Vertrouwen vormt de basis. <em>Bewust sturen is leiderschap.</em>
          </div>
          <h2 className="hey-greeting">
            Hey, ik ben <span>Aysel</span>
          </h2>
          <div className="hey-text">
            <p className="hey-intro">
              Ondernemer, auteur en Business & Wealth Mentor voor vrouwen en
              leiders die hun eigen pad durven te volgen.
            </p>
            <p>
              Ik weet hoe het voelt om klein gemaakt te worden. Om jezelf kwijt
              te raken. Om alleen te staan. Maar ik weet ook hoe het voelt om op
              te staan. Om je kracht terug te nemen. Om je leven opnieuw te
              schrijven.
            </p>
            <p>
              Vandaag help ik vrouwen en leiders hun waarheid terug te vinden en
              een leven en bedrijf op te bouwen vanuit{" "}
              <strong>kracht, vrijheid en bewust leiderschap</strong>.
            </p>
            <p className="hey-mission">
              Mijn leven draait om één ding: mensen helpen herinneren wie ze
              werkelijk zijn. Niet vanuit theorie, maar vanuit{" "}
              <em>échte ervaring</em>.
            </p>
            <div className="hey-offerings">
              <p>
                Op deze website vind je mijn boeken, masterclasses, mentoring,
                podcast, YouTube en tools. Alles wat ik doe, is gebouwd op één
                fundament:
              </p>
              <div className="hey-values">
                <span>Empowerment</span>
                <span>Leiderschap</span>
                <span>Waarheid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Section */}
      {/* <Section variant="purple">
        <div className="book-section">
          <div className="book-image">
            <Image
              src="/images/nuts1.jpg"
              alt="De nootjes van het huwelijk"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="book-content">
            <div className="book-badge">Autobiografie</div>
            <h2 className="book-title">
              De nootjes van het <em>huwelijk</em>
            </h2>
            <p className="book-description">
              Van een gedwongen huwelijk op jonge leeftijd tot het vinden van
              echte liefde - dit is een prachtig, bewogen en waargebeurd verhaal
              van een geëmancipeerde emigrante die alle barrières doorbreekt.
            </p>
            <div className="book-buttons">
              <Button href="/publicaties" variant="primary-reversed">
                Lees meer
              </Button>
              <Button href="/contact" variant="outline-white" className="ml-4">
                Boek mij als spreker
              </Button>
            </div>
          </div>
        </div>
      </Section> */}

      {/* Services Section - Half Content Half Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full bg-[#2E1A34]">
        <div className="flex flex-col justify-center p-10 md:p-20 lg:px-24 text-white">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] mb-6">
            Wat ik voor <em className="italic text-[#C94D4D]">jou</em> kan doen
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Of het nu gaat om zakelijke groei, financiële onafhankelijkheid of
            persoonlijk leiderschap - ik sta naast je om barrières te
            doorbreken.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-[#C94D4D] pl-6">
              <h3 className="font-heading text-2xl text-white mb-2">
                💼 Business Coaching
              </h3>
              <p className="text-white/80 leading-relaxed">
                Strategische begeleiding voor vrouwelijke ondernemers die willen
                groeien en impact willen maken. Van visie tot executie.
              </p>
            </div>

            <div className="border-l-4 border-[#C94D4D] pl-6">
              <h3 className="font-heading text-2xl text-white mb-2">
                💰 Wealth Mentorship
              </h3>
              <p className="text-white/80 leading-relaxed">
                Begeleiding naar financiële onafhankelijkheid en het slim
                opbouwen van vermogen. Jouw geld werkt voor jou.
              </p>
            </div>

            <div className="border-l-4 border-[#C94D4D] pl-6">
              <h3 className="font-heading text-2xl text-white mb-2">
                ✨ Spreker & Auteur
              </h3>
              <p className="text-white/80 leading-relaxed">
                Inspirerende lezingen en publicaties, waaronder "De nootjes van
                het huwelijk". Verhalen die raken en transformeren.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/diensten" variant="primary-reversed">
              Ontdek meer
            </Button>
          </div>
        </div>

        <div className="relative min-h-[700px]">
          <Image
            src="/newimages/image4.jpeg"
            alt="Aysel Disbudak - Services"
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Testimonial/Quote Section */}
      {/* <Section variant="purple">
        <div className="quote-fw-section">
          <blockquote className="quote-fw-text">
            "Succesvol zijn als vrouw betekent niet dat je je vrouwelijkheid
            opgeeft. Het betekent dat je jezelf <em>volledig</em> omarmt."
          </blockquote>
          <div className="quote-fw-author">— Aysel Disbudak</div>
        </div>
      </Section> */}

      {/* Biography Section - Clean Layout */}
      <Section variant="default">
        <div className="bio-fw-section">
          <div className="bio-fw-image-side">
            <div className="bio-fw-image-wrapper">
              <Image
                src="/images/2-a45d0946.webp"
                alt="Aysel Disbudak"
                width={600}
                height={750}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="bio-fw-content-side">
            <div className="bio-fw-badge">Over Mij</div>
            <h2 className="bio-fw-title">
              Van gehandicaptenzorg tot <em>business mentor</em>
            </h2>
            <div className="bio-fw-text">
              <p>
                Al sinds 1999 ben ik actief als ondernemer en heb ik diverse
                organisaties opgericht. Mijn expertise ligt in de zorgsector,
                waar ik mijn eigen methodiek heb ontwikkeld.
              </p>
              <p>
                Als Business & Wealth Mentor deel ik nu mijn kennis om andere
                vrouwen te helpen excelleren. Mijn drijfveer is simpel: het
                creëren van kansen voor iedereen.
              </p>
              <div className="bio-fw-stats">
                <div className="bio-fw-stat">
                  <div className="bio-fw-stat-number">25+</div>
                  <div className="bio-fw-stat-label">Jaar Ervaring</div>
                </div>
                <div className="bio-fw-stat">
                  <div className="bio-fw-stat-number">500+</div>
                  <div className="bio-fw-stat-label">Geïnspireerde Vrouwen</div>
                </div>
                <div className="bio-fw-stat">
                  <div className="bio-fw-stat-number">3</div>
                  <div className="bio-fw-stat-label">Publicaties</div>
                </div>
              </div>
            </div>
            <div className="bio-fw-cta">
              <Button href="/over-mij" variant="primary">
                Mijn verhaal
              </Button>
              <Button href="/contact" variant="outline" className="ml-4">
                Neem contact op
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="purple">
        <div className="cta-fw-section">
          <h2 className="cta-fw-title">
            Klaar om je <em>waarheid</em> te leven?
          </h2>
          <p className="cta-fw-text">
            Je hoeft dit niet alleen te doen. Laten we samen jouw kracht
            ontdekken en het bedrijf bouwen dat bij jouw ziel past.
          </p>
          <div className="cta-fw-buttons">
            <Button href="/contact" variant="primary-reversed">
              Neem contact op
            </Button>
            <Button
              href="/masterclass"
              variant="outline-white"
              className="ml-4"
            >
              Bekijk mijn masterclass
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
