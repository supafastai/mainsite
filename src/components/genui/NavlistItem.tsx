import React, { forwardRef } from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

// Convert the component to use forwardRef
const NavlistItem = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: React.ReactNode;
  }
>(({ title, children, className, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all bg-white border border-blue-200 text-black hover:text-black hover:bg-blue-50 hover:border-blue-300 hover:shadow-sm hover:scale-[1.02] focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <div className="text-sm font-medium leading-none">
              <h1>{title}</h1>
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
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
