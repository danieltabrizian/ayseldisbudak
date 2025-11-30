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
    <footer className="footer bg-light-blue text-aysel-purple">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="font-heading">Aysel Disbudak</h3>
            <p className="font-body">
              Empowering women to reach their full potential.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="font-heading">Menu</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/over-mij">Over mij</a>
              </li>
              <li>
                <a href="/diensten">Mijn aanbod</a>
              </li>
              <li>
                <a href="/masterclass">Masterclass</a>
              </li>
              <li>
                <a href="/publicaties">Boeken</a>
              </li>
              <li>
                <a href="/media">Media</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
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
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Aysel Disbudak. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
