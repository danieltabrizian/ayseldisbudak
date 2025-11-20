"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section - Deep Purple with Arch Image */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-eyebrow">Business & Wealth Mentor</span>
            <h1 className="hero-title">HI, IK BEN AYSEL</h1>
            <p className="hero-subtitle">
              <span className="block mt-4 font-bold text-aysel-red">
                Vrouwen empowerment
              </span>
              <br />
              Benut je volle potentieel en vergroot je impact op de wereld.
            </p>
            <div className="hero-buttons">
              <Button href="/diensten" variant="primary-reversed">
                Mijn diensten
              </Button>
              <Button
                href="/publicaties"
                variant="outline-white"
                className="ml-4"
              >
                Mijn publicaties
              </Button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="arch-frame">
              <Image
                src="/images/hero-new.webp"
                alt="Aysel Disbudak - Business & Wealth Mentor"
                width={600}
                height={800}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="hero-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Cool White */}
      <Section variant="default" className="pt-0">
        <div className="intro-content">
          <h2 className="font-heading text-aysel-purple">
            Vrouw met een missie
          </h2>
          <div className="separator-line"></div>
          <p className="font-body">
            Als Business & Wealth Mentor sta ik naast je om barrières te
            doorbreken. Of het nu gaat om zakelijke groei, financiële
            onafhankelijkheid of persoonlijk leiderschap: ik geloof dat iedere
            vrouw het recht heeft om succesvol te zijn.
          </p>
        </div>
      </Section>

      {/* Book Section - Purple Background */}
      <Section variant="purple">
        <div className="book-section">
          <div className="book-image">
            <Image
              src="/images/nuts1.jpg"
              alt="De nootjes van het huwelijk - Aysel Çaliskan"
              width={220}
              height={330}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="book-content">
            <span className="eyebrow text-light-blue">Mijn Boek</span>
            <h2 className="font-heading text-white mb-6">
              De nootjes van het huwelijk
            </h2>
            <p className="font-body text-light-blue mb-8">
              In <em>De nootjes van het huwelijk</em> vertelt Aysel Çaliskan
              nuchter en met humor haar hartverscheurende levensverhaal. Van een
              gedwongen huwelijk op jonge leeftijd tot het vinden van echte
              liefde - dit is een prachtig, bewogen en waargebeurd verhaal van
              een geëmancipeerde emigrante die alle barrières doorbreekt.
            </p>
            <Button href="/publicaties" variant="primary-reversed">
              Bekijk publicaties
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Highlight - Light Blue with Editorial Grid */}
      <Section variant="light-blue">
        <div className="container">
          <div className="section-header text-center mb-12">
            <span className="services-eyebrow">Expertise</span>
            <h2 className="services-title">Wat ik doe</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="card-number">01</div>
              <h3 className="font-heading text-aysel-purple">
                Business Coaching
              </h3>
              <p className="font-body">
                Strategische begeleiding voor vrouwelijke ondernemers die willen
                groeien en impact willen maken.
              </p>
              <div className="card-line"></div>
            </div>
            <div className="service-card">
              <div className="card-number">02</div>
              <h3 className="font-heading text-aysel-purple">
                Wealth Mentorship
              </h3>
              <p className="font-body">
                Begeleiding naar financiële onafhankelijkheid en het slim
                opbouwen van vermogen.
              </p>
              <div className="card-line"></div>
            </div>
            <div className="service-card">
              <div className="card-number">03</div>
              <h3 className="font-heading text-aysel-purple">
                Spreker & Auteur
              </h3>
              <p className="font-body">
                Inspirerende lezingen en publicaties, waaronder "De nootjes van
                het huwelijk".
              </p>
              <div className="card-line"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Biography Section - Bright Purple Alt */}
      <Section variant="purple">
        <div className="bio-grid">
          <div className="bio-text">
            <span className="eyebrow text-light-blue">Over Mij</span>
            <h2 className="font-heading text-white mb-6">
              Ondernemer & Mentor
            </h2>
            <p className="font-body text-light-blue mb-6">
              Al sinds 1999 ben ik actief als ondernemer en heb ik diverse
              organisaties opgericht. Mijn expertise ligt in de zorgsector, waar
              ik mijn eigen methodiek heb ontwikkeld. Als Business & Wealth
              Mentor deel ik nu mijn kennis om andere vrouwen te helpen
              excelleren.
            </p>
            <p className="font-body text-light-blue mb-8">
              Naast mijn zakelijke activiteiten ben ik auteur van het boek "De
              nootjes van het huwelijk" en heb ik een educatief spel ontwikkeld.
              Mijn drijfveer is simpel: het creëren van kansen voor iedereen.
            </p>
            <div className="bio-quote-inline">
              <blockquote className="bio-quote font-heading text-white">
                "Ik ben een vrouw met een missie: jou helpen je dromen waar te
                maken."
              </blockquote>
              <div className="signature text-aysel-red mt-4">
                — Aysel Disbudak
              </div>
            </div>
            <div style={{ marginTop: "3rem" }}>
              <Button href="/diensten" variant="primary-reversed">
                Lees meer over mijn diensten
              </Button>
            </div>
          </div>
          <div className="bio-image-wrapper">
            <Image
              src="/images/2-a45d0946.webp"
              alt="Aysel Disbudak"
              width={500}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              className="bio-image"
            />
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
