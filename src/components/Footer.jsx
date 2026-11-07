import { Link } from "react-router-dom";
import { BUSINESS, HOURS, SOCIALS } from "@/data";
import { SocialIcon } from "./Icons";

const PAGES = [
  ["/services", "Services"],
  ["/pricing", "Pricing"],
  ["/locations", "Locations"],
  ["/about", "About"],
  ["/reviews", "Reviews"],
  ["/contact", "Contact"],
];

export default function Footer({ onOpenCookies }) {
  return (
    <footer className="grad-deep text-[#9CC3C4]">
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1.15fr_0.8fr]">
          <div>
            <img src="/logo.png" alt="Etileni 2 Pastrimi Kimik" width="600" height="187" className="h-9 w-auto" />
            <p className="mt-4 max-w-[34ch] text-[13.5px] leading-relaxed">
              Dry and wet cleaning in Prishtina since {BUSINESS.founded}. Four locations, fifteen people, one standard.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(([key, label, href]) => (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:border-white hover:bg-white/20">
                  <SocialIcon name={key} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[.16em] text-white">Pages</div>
            <div className="mt-4 flex flex-col items-start gap-3 text-[13.5px]">
              {PAGES.map(([to, label]) => (
                <Link key={to} to={to} className="transition-colors duration-300 hover:text-white">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[.16em] text-white">Working hours</div>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-[13.5px]">
              {HOURS.map(([day, value]) => (
                <div key={day} className="contents">
                  <dt className="whitespace-nowrap">{day}</dt>
                  <dd className="m-0 whitespace-nowrap text-right font-semibold tabular-nums text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-col gap-2 text-[13.5px]">
              <a className="font-semibold text-white transition-colors hover:text-accent" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
              <a className="font-semibold text-white transition-colors hover:text-accent" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              <span>{BUSINESS.city}</span>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[.16em] text-white">Legal</div>
            <div className="mt-4 flex flex-col items-start gap-3 text-[13.5px]">
              <Link to="/privacy" className="transition-colors duration-300 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="transition-colors duration-300 hover:text-white">Terms of Service</Link>
              <button type="button" onClick={onOpenCookies} className="transition-colors duration-300 hover:text-white">
                Cookies Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-6 text-[13px]">
          <div>© {new Date().getFullYear()} All rights reserved. HoB Studio L.L.C</div>
          <div>{BUSINESS.legalName} - {BUSINESS.city}</div>
        </div>
      </div>
    </footer>
  );
}
