import type { Metadata } from "next";
import "../globals.css";

import Header from "@/components/genui/Header";
import Footer from "@/components/genui/Footer";

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
    <html lang="en">
      <body className={` antialiased relative z-10`}>
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-20 py-8 sm:py-32 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
