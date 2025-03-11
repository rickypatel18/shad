import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation/navigation-menu";
import { Link } from "react-router-dom";



// Navigation Links Component
export const NavigationLinks: React.FC = () => {
  const links = ["About Us", "Services", "Contact", "Shop", "Blog", "FAQ"];

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="flex gap-[24px] xl:gap-[27px]">
        {links.map((link, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link to={""} className={navigationMenuTriggerStyle()}>
                {link}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

// ListItem Component
interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <p className="text-sm font-medium">{title}</p>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
