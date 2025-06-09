"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

// import NavlistItem from "./NavlistItem";
// import { FiTarget, FiMail, FiGlobe } from "react-icons/fi";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setIsVisible(path !== "/signup" && path !== "/login");
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="flex sticky top-0 z-50 bg-white/70 backdrop-blur-sm justify-between items-center p-4 ">
      <Link href="/" className="text-2xl font-bold z-10">
        <Image
          src="/logos/SupaFast-Full-Logo.png"
          alt="logo"
          width={150}
          height={150}
          className="w-[100px] sm:w-[125px] md:w-[150px] h-auto"
        />
      </Link>

      <button
        className="md:hidden z-10"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* <div className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg bg-transparent focus:bg-white/90 focus-within:bg-white/90 *:bg-white/90 hover:bg-white group-hover:bg-white hover:text-black focus:text-black focus-within:text-black text-black hover:scale-[1.02] hover:shadow-sm transition-all duration-300 data-[state=open]:bg-white  data-[state=open]:hover:bg-accent[data-state=open]:bg-white data-[state=open]:focus:bg-accent[data-state=open]:focus:bg-white data-[state=open]:text-black data-[state=open]:scale-[1.02] data-[state=open]:shadow-sm">
                Tools
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-[100] bg-white/90 backdrop-blur-sm">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                  <NavlistItem
                    href="/tools/ads"
                    title="Ads"
                    icon={<FiTarget className="w-4 h-4 text-blue-500" />}
                  >
                    Monitor and analyse competitor ads & campaigns
                  </NavlistItem>
                  <NavlistItem
                    href="/tools/emails"
                    title="Email"
                    icon={<FiMail className="w-4 h-4 text-emerald-500" />}
                  >
                    Track Competitor email campaigns & get instant insights
                  </NavlistItem>
                  <NavlistItem
                    href="/tools/websites"
                    title="Websites"
                    icon={<FiGlobe className="w-4 h-4 text-yellow-500" />}
                  >
                    Monitor and analyse competitor websites
                  </NavlistItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className=" hover:bg-primary/10 hover:text-black hover:scale-[1.02] hover:shadow-sm transition-all duration-300"
                href="/roadmap"
              >
                Roadmap
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className=" text-lg font-medium hover:bg-accent/10 hover:text-black hover:scale-[1.02] hover:shadow-sm transition-all duration-300"
                href="/#faq"
              >
                FAQ
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div> */}

      <Button
        onClick={() => router.push("/signup")}
        className="hidden h-fit w-fit text-lg font-medium md:block bg-gradient-to-r from-secondary to-primary"
      >
        Get my Insights
      </Button>

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white/85 backdrop-blur-sm z-[100] md:hidden flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-6 text-lg">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            {/* <Link
              href="/tools/ads"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-primary transition-colors"
            >
              Ads
            </Link>
            <Link
              href="/tools/email"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-primary transition-colors"
            >
              Email
            </Link>
            <Link
              href="/tools/websites"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-primary transition-colors"
            >
              Websites
            </Link> */}
            {/* <Link
              href="/roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-primary transition-colors"
            >
              Roadmap
            </Link> */}
            {/* <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-primary transition-colors"
            >
              FAQ
            </Link> */}
            <Button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 h-fit w-fit text-lg font-medium  bg-gradient-to-r from-secondary to-primary"
            >
              Get my Insights
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
