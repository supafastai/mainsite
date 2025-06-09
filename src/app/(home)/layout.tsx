import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";

import Header from "@/components/genui/Header";
import Footer from "@/components/genui/Footer";
const lufga = localFont({
  variable: "--font-lufga",
  src: [
    {
      path: "../../fonts/LufgaBlack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../fonts/LufgaExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/LufgaBold.woff2",
      weight: "700",
      style: "normal",
    },

    {
      path: "../../fonts/LufgaBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../fonts/LufgaSemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/LufgaMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/LufgaRegular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../fonts/LufgaLight.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "../../fonts/LufgaExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  //  [
  //
  //
  //
  //   {
  //     path: "../../fonts/LufgaMediumItalic.woff2",
  //     weight: "500",
  //     style: "italic",
  //   },
  //   {
  //     path: "../../fonts/LufgaSemiBoldItalic.woff2",
  //     weight: "600",
  //     style: "italic",
  //   },
  //   {
  //     path: "../../fonts/LufgaLightItalic.woff2",
  //     weight: "300",
  //     style: "italic",
  //   },
  //   {
  //     path: "../../fonts/LufgaExtraLightItalic.woff2",
  //     weight: "200",
  //     style: "italic",
  //   },
  //   {
  //     path: "../../fonts/LufgaThinItalic.woff2",
  //     weight: "100",
  //     style: "italic",
  //   },
  //   {
  //     path: "../../fonts/LufgaBlackItalic.woff2",
  //     weight: "900",
  //     style: "italic",
  //   },
  //   {
  //     path: "../../fonts/LufgaExtraBoldItalic.woff2",
  //     weight: "800",
  //     style: "italic",
  //   },
  // ],
});
export const metadata: Metadata = {
  title: "Supafast AI",
  description: "Supafast AI is your edge over the competition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lufga.variable}`}>
      <body className={` ${lufga.className} antialiased relative z-10`}>
        <Header />
        <main className="flex flex-col items-center justify-center w-full sm:w-10/12  lg:w-3/4 mx-auto px-4 sm:px-8 md:px-20 py-8 sm:py-16 md:py-32 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
