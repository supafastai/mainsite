"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

import NavlistItem from "./NavlistItem";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 relative">
      <Link href="/" className="text-2xl font-bold z-10">
        <Image
          src="/logos/SupaFast-Full-Logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-fit"
        />
      </Link>

      <button
        className="md:hidden z-10"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <NavlistItem href="/tools/ads" title="Ads">
                    Monitor and analyse competitor ads & campaigns
                  </NavlistItem>
                  <NavlistItem href="/tools/email" title="Email">
                    Track Competitor email campaigns & get instant insights
                  </NavlistItem>
                  <NavlistItem href="/tools/websites" title="Websites">
                    Monitor and analyse competitor websites
                  </NavlistItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/roadmap">Roadmap</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/faq">FAQ</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Button className="hidden md:block">Join Waitlist</Button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[5] md:hidden flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-6 text-lg">
            <Link href="/tools/ads" onClick={() => setMobileMenuOpen(false)}>
              Ads
            </Link>
            <Link href="/tools/email" onClick={() => setMobileMenuOpen(false)}>
              Email
            </Link>
            <Link
              href="/tools/websites"
              onClick={() => setMobileMenuOpen(false)}
            >
              Websites
            </Link>
            <Link href="/roadmap" onClick={() => setMobileMenuOpen(false)}>
              Roadmap
            </Link>
            <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Button onClick={() => setMobileMenuOpen(false)}>
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
