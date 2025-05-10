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
        <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
