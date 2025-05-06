import React from "react";
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

import NavlistItem from "./NavlistItem";

function Header() {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/" className="text-2xl font-bold">
        <Image
          src="/logos/SupaFast-Full-Logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-fit"
        />
      </Link>

      <div className="flex items-center gap-4">
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
      <Button>Join Waitlist</Button>
    </nav>
  );
}

export default Header;
