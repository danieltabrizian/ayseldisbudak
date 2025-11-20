import { Italiana, Raleway } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "Aysel Disbudak | Empowerment & Coaching",
  description:
    "Ondernemer, coach, spreker en filantroop. Aysel Disbudak inspireert en versterkt vrouwen om hun volledige potentieel te bereiken.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${italiana.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
