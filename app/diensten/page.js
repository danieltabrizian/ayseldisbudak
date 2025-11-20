"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Diensten() {
  return (
    <main>
      <Header />

      <Section variant="purple" className="diensten-page-header">
        <div className="diensten-header-content">
          <span className="diensten-eyebrow">Business & Wealth Mentor</span>
          <h1 className="diensten-title">Diensten & Verdiensten</h1>
          <p className="diensten-subtitle">
            Professionele begeleiding voor ambitieuze vrouwen en een bewezen
            track record van impact en excellentie.
          </p>
        </div>
      </Section>

      {/* Services Section */}
      <Section variant="default">
        <div className="diensten-container">
          <div className="diensten-intro-grid">
            <div className="diensten-intro-text">
              <span className="eyebrow text-aysel-red">Mijn Diensten</span>
              <h2 className="font-heading text-aysel-purple">
                Als Business & Wealth Mentor
              </h2>
              <div className="separator-line"></div>
              <p className="subtitle-text">
                In 2024 maakte Aysel Disbudak een carrièreswitch van de
                zorgsector naar vrouwen empowerment. Sindsdien ondersteunt zij
                vrouwen als business & wealth mentor met diverse diensten, zoals
                business coaching, trainingen en zakelijke
                mentorshipprogramma's.
              </p>
            </div>
            <div className="diensten-intro-image">
              <Image
                src="/images/portrait.jpg"
                alt="Aysel Disbudak - Business & Wealth Mentor"
                width={400}
                height={500}
                style={{ width: "100%", height: "auto" }}
                className="portrait-image"
              />
            </div>
          </div>

          <div className="services-showcase">
            <div className="service-highlight">
              <div className="service-number">01</div>
              <h3 className="font-heading">Business Begeleiding</h3>
              <p className="font-body">
                Persoonlijke één-op-één coaching voor vrouwelijke ondernemers
                die hun bedrijf naar het volgende niveau willen tillen. Focus op
                strategie, leiderschap en persoonlijke groei.
              </p>
              <div className="service-tag">Eén-op-één coaching</div>
            </div>

            <div className="service-highlight">
              <div className="service-number">02</div>
              <h3 className="font-heading">Online Supervisie</h3>
              <p className="font-body">
                Digitale begeleiding voor ondernemers, waar je ook bent. Via
                online sessies krijg je praktische tools en inzichten om je
                business te laten groeien.
              </p>
              <div className="service-tag">Voor ondernemers</div>
            </div>

            <div className="service-highlight">
              <div className="service-number">03</div>
              <h3 className="font-heading">Trainingen Blended Learning</h3>
              <p className="font-body">
                Combinatie van online en offline trainingen zoals "Herontdek
                Jezelf en Je Bedrijf". Interactief, praktisch en direct
                toepasbaar op jouw situatie.
              </p>
              <div className="service-tag">Blended learning</div>
            </div>

            <div className="service-highlight">
              <div className="service-number">04</div>
              <h3 className="font-heading">Jaarlijks Evenement</h3>
              <p className="font-body">
                Exclusieve events rondom belangrijke thema's zoals Nationale
                Vrouwendag. Een kans om te netwerken, inspiratie op te doen en
                te groeien met gelijkgestemde vrouwen.
              </p>
              <div className="service-tag">Netwerken & inspiratie</div>
            </div>

            {/* Integrated CTA Box */}
            <div className="service-cta-box">
              <div className="service-cta-icon">✨</div>
              <h3 className="font-heading">
                Interesse in één van deze diensten?
              </h3>
              <p className="font-body">
                Laten we kennismaken! Bel of mail voor een vrijblijvend gesprek
                over hoe ik jou kan helpen.
              </p>
              <div className="service-cta-actions">
                <Button href="/contact" variant="primary-reversed">
                  Plan een gesprek
                </Button>
                <a href="tel:+31204470518" className="phone-link">
                  📞 +31 20 44 70 518
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section - Achievements */}
      <Section variant="light-blue">
        <div className="diensten-container">
          <div className="diensten-section-header">
            <span className="eyebrow text-aysel-red">Mijn Verdiensten</span>
            <h2 className="font-heading text-aysel-purple">
              Een Track Record van Impact
            </h2>
            <div className="separator-line"></div>
            <p className="subtitle-text">
              Van de oprichting van belangrijke zorginstellingen tot innovatieve
              methodieken en bestseller boeken - een overzicht van 25 jaar
              ondernemerschap en maatschappelijke impact.
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
        <div className="cta-content">
          <h2 className="font-heading text-white mb-6">Klaar om te groeien?</h2>
          <p className="font-body text-light-blue mb-8">
            Met bewezen expertise en een passie voor empowerment sta ik klaar om
            jou te begeleiden naar succes. Neem contact op voor een vrijblijvend
            kennismakingsgesprek.
          </p>
          <div className="cta-buttons">
            <Button href="/contact" variant="primary-reversed">
              Plan een gratis consult
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
