"use client";

import { useState } from "react";

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);

  // Obfuscated email - decoded on click
  const getEmail = () => {
    const user = "info";
    const domain = "ayseldisbudak";
    const tld = "nl";
    return `${user}@${domain}.${tld}`;
  };

  const revealEmail = () => {
    setShowEmail(true);
  };

  return (
    <footer className="footer section-light-blue text-aysel-purple">
      <div className="container footer-container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <h3 className="font-heading text-2xl mb-4">Aysel Disbudak</h3>
            <p className="font-body text-lg">
              Empowering women to reach their full potential.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-4">Menu</h4>
            <div className="flex gap-8">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:text-[#C94D4D] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/over-mij"
                    className="hover:text-[#C94D4D] transition-colors"
                  >
                    Over mij
                  </a>
                </li>
                <li>
                  <a
                    href="/diensten"
                    className="hover:text-[#C94D4D] transition-colors"
                  >
                    Mijn aanbod
                  </a>
                </li>
                <li>
                  <a
                    href="/masterclass"
                    className="hover:text-[#C94D4D] transition-colors"
                  >
                    Masterclass
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/publicaties"
                    className="hover:text-[#C94D4D] transition-colors"
                  >
                    Boeken
                  </a>
                </li>
                <li>
                  <a
                    href="/media"
                    className="hover:text-[#C94D4D] transition-colors"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-[#C94D4D] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="footer-contact">
            <h4 className="font-heading">Contact</h4>
            <p className="address">
              Keurenplein 53
              <br />
              1069 CD Amsterdam
            </p>
            <p>
              Tel: <a href="tel:+31204470518">+31 20 44 70 518</a>
            </p>
            <p>
              Bij spoed: <a href="tel:+31645200022">06 45 20 00 22</a>
            </p>
            <p>
              Email:{" "}
              {showEmail ? (
                <a href={`mailto:${getEmail()}`}>{getEmail()}</a>
              ) : (
                <button onClick={revealEmail} className="email-reveal-btn">
                  Click to reveal email
                </button>
              )}
            </p>
            <p className="hours">
              ma t/m do 9:00 uur t/m 17:00 uur
              <br />
              vrijdag tot 15:00 uur
            </p>
          </div> */}
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Aysel Disbudak. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm text-aysel-purple/60">
            Website door{" "}
            <a
              href="https://breazylabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C94D4D] transition-colors underline"
            >
              BreazyLabs
            </a>{" "}
            &middot; Marketing door{" "}
            <a
              href="https://vamous.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C94D4D] transition-colors underline"
            >
              Vamous
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
