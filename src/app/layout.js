import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const productionUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-nextjs-sean-saez.vercel.app";

export const metadata = {
  metadataBase: new URL(productionUrl),
  title: {
    default: "Seán Sáez Fuller | Full-Stack JavaScript Developer",
    template: "%s | Seán Sáez Fuller",
  },
  description:
    "Portfolio of Seán Sáez Fuller, a full-stack JavaScript developer building polished web experiences with React, Angular, Next.js, Java/Spring Boot and cloud tooling.",
  keywords: [
    "Seán Sáez Fuller",
    "full-stack developer",
    "JavaScript developer",
    "React developer",
    "Angular developer",
    "Next.js portfolio",
    "Java Spring Boot developer",
  ],
  openGraph: {
    title: "Seán Sáez Fuller | Full-Stack JavaScript Developer",
    description:
      "Selected work, technical background and contact information for Seán Sáez Fuller.",
    url: productionUrl,
    siteName: "Seán Sáez Fuller Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/logo-sean.png",
        width: 512,
        height: 512,
        alt: "Seán Sáez Fuller portfolio logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seán Sáez Fuller | Full-Stack JavaScript Developer",
    description:
      "Portfolio of Seán Sáez Fuller, focused on React, Angular, Next.js, Java/Spring Boot and product-minded full-stack work.",
    images: ["/images/logo-sean.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
