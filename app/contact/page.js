"use client";

import Image from "next/image";
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
        <div className="contact-container">
          <div className="contact-intro-grid">
            <div className="contact-intro-image">
              <Image
                src="/newimages/image4.jpeg"
                alt="Aysel Disbudak"
                width={500}
                height={600}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                className="contact-image"
              />
            </div>
            <div className="contact-intro-text">
              <h2 className="font-heading text-aysel-purple mb-6">
                <em>Persoonlijke</em> begeleiding op maat
              </h2>
              <div className="separator-line"></div>
              <p className="font-body mb-6">
                Als Business & Wealth Mentor werk ik graag <em>persoonlijk</em>{" "}
                met vrouwen die klaar zijn voor <em>verandering</em>. Of je nu
                wilt groeien als ondernemer, financiële vrijheid nastreeft, of
                je leiderschap wilt versterken – samen maken we een plan dat{" "}
                <em>bij jou past</em>.
              </p>
              <p className="font-body mb-8">
                Neem gerust contact met me op via telefoon of email. Voor
                dringende zaken ben ik ook bereikbaar op mijn spoednummer. Ik
                kijk ernaar uit om van je te horen!
              </p>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="card-icon">📍</div>
              <h3 className="font-heading text-aysel-red">Bezoekadres</h3>
              <div className="thin-separator"></div>
              <p className="font-body">
                Keurenplein 53
                <br />
                1069 CD Amsterdam
                <br />
                Nederland
              </p>
            </div>

            <div className="contact-card">
              <div className="card-icon">📞</div>
              <h3 className="font-heading text-aysel-red">Telefoon</h3>
              <div className="thin-separator"></div>
              <p className="font-body">
                <strong>Algemeen:</strong>
                <br />
                <a href="tel:+31204470518">+31 20 44 70 518</a>
                <br />
                <br />
                <strong>Bij spoed:</strong>
                <br />
                <a href="tel:+31645200022">06 45 20 00 22</a>
              </p>
            </div>

            <div className="contact-card">
              <div className="card-icon">✉️</div>
              <h3 className="font-heading text-aysel-red">Email</h3>
              <div className="thin-separator"></div>
              <p className="font-body">
                Voor vragen en afspraken:
                <br />
                <a href="mailto:info@ayseldisbudak.nl">info@ayseldisbudak.nl</a>
              </p>
            </div>

            <div className="contact-card">
              <div className="card-icon">🕒</div>
              <h3 className="font-heading text-aysel-red">Openingstijden</h3>
              <div className="thin-separator"></div>
              <p className="font-body">
                <strong>Ma - Do:</strong> 9:00 - 17:00
                <br />
                <strong>Vrijdag:</strong> 9:00 - 15:00
                <br />
                <strong>Weekend:</strong> Gesloten
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="light-blue">
        <div className="cta-content">
          <h2 className="font-heading text-aysel-purple mb-6">
            Klaar om de <em>eerste stap</em> te zetten?
          </h2>
          <p className="font-body text-aysel-purple mb-8">
            Bel me direct voor een <em>vrijblijvend kennismakingsgesprek</em> of
            stuur een email. <em>Samen</em> kijken we hoe ik jou kan helpen jouw
            doelen te bereiken.
          </p>
          <div className="cta-buttons">
            <Button href="tel:+31204470518" variant="primary">
              Bel nu
            </Button>
            <Button
              href="mailto:info@ayseldisbudak.nl"
              variant="accent"
              className="ml-4"
            >
              Stuur een email
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
