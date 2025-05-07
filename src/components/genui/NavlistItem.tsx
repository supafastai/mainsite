import React, { forwardRef } from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

// Convert the component to use forwardRef
const NavlistItem = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ title, children, className, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all bg-gradient-to-r from-imperial-red-light/10 to-gray-100 hover:from-imperial-red-primary hover:via-ut-orange-primary/10 hover:to-triadic-blue/10 hover:shadow-sm hover:scale-[1.02] focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

// Add a display name for better debugging
NavlistItem.displayName = "NavlistItem";

export default NavlistItem;
