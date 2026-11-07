import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Icon } from "./Icons";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

const NAV = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/pricing", "Pricing"],
  ["/locations", "Locations"],
  ["/about", "About"],
  ["/reviews", "Reviews"],
];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const item = ({ isActive }) =>
    cn("rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-brand",
      isActive ? "grad-primary text-white" : "text-muted-foreground hover:bg-secondary hover:text-foreground");

  return (
    <>
      <header className={cn("sticky top-0 z-50 bg-background/90 backdrop-blur transition-shadow duration-300",
        stuck && "shadow-[0_4px_22px_rgba(11,43,51,.09)]")}>
        <div className="container">
          <div className="flex items-center justify-between gap-4 py-3">
            <NavLink to="/" aria-label="Etileni 2" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <img src="/logo.png" alt="Etileni 2 Pastrimi Kimik" width="600" height="187"
                className={cn("w-auto transition-all duration-300", stuck ? "h-7" : "h-8 sm:h-9")} />
            </NavLink>

            <nav className="hidden items-center gap-1 lg:flex">
              {NAV.map(([to, label]) => (
                <NavLink key={to} to={to} end={to === "/"} className={item}>{label}</NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <Button size="sm" className="hidden rounded-full px-5 sm:inline-flex" onClick={() => navigate("/contact")}>
                Contact us
              </Button>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary lg:hidden"
                aria-label="Open menu"
                aria-expanded={menu}
                onClick={() => setMenu(true)}
              >
                <Icon name="menu" size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={menu} onClose={() => setMenu(false)} />
    </>
  );
}
