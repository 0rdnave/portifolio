import type { Metadata } from "next";
import { Roboto_Slab, Khand } from "next/font/google";
import "./globals.scss";
import "./portfunio.scss";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-family-roboto",
});
const khand = Khand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-family-khand",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${khand.variable} ${roboto.variable}`} lang="pt-br">
      <body className="font-l">{children}</body>
    </html>
  );
}
