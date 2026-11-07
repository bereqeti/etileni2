import { Link } from "react-router-dom";
import { Card, CardLink } from "./ui/card";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { AvatarFallback } from "./ui/avatar";
import { Icon, Stars } from "./Icons";
import { Eyebrow, IconDisc } from "./Shared";
import { PRICES, HOURS, BUSINESS, SOCIALS, mapUrl } from "@/data";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, to = "/services" }) {
  return (
    <Link to={to} className="rv block focus-visible:outline-none">
      <CardLink className="h-full p-6 sm:p-7">
        <IconDisc name={service.icon} className="transition-transform duration-300 ease-brand group-hover:scale-110 group-hover:-rotate-3" />
        <h3 className="mt-5 font-display text-lg font-bold tracking-tight">{service.title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{service.body}</p>
      </CardLink>
    </Link>
  );
}

/** Not clickable, so deliberately no hover stroke. */
export function StepCard({ n, title, body }) {
  return (
    <div className="rv rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-7">
      <span className="flex h-12 w-12 items-center justify-center rounded-full grad-primary font-display text-[17px] font-extrabold text-white">{n}</span>
      <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-[#9CC3C4]">{body}</p>
    </div>
  );
}

export function LocationCard({ location }) {
  return (
    <a href={mapUrl(location.query)} target="_blank" rel="noopener noreferrer" className="rv block focus-visible:outline-none">
      <CardLink className="flex h-full flex-col p-6 sm:p-7">
        <IconDisc name="pin" size={24} className="h-11 w-11 transition-transform duration-300 ease-brand group-hover:scale-110" />
        <span className="mt-4 block font-display text-xl font-bold leading-tight">{location.address}</span>
        <span className="mt-1 block text-[14px] text-muted-foreground">{location.area}</span>
        <span className="mt-auto flex items-center gap-2 pt-5 text-[13.5px] font-bold text-primary">
          Open in Maps
          <span className="transition-transform duration-300 ease-brand group-hover:translate-x-1.5">
            <Icon name="arrow" size={15} strokeWidth={2.4} />
          </span>
        </span>
      </CardLink>
    </a>
  );
}

export function CallCard() {
  return (
    <Card className="rv flex flex-col p-6 sm:p-7">
      <IconDisc name="phone" green size={24} className="h-11 w-11" />
      <span className="mt-4 block font-display text-xl font-bold leading-tight">Not sure which one?</span>
      <span className="mt-1 block text-[14px] leading-relaxed text-muted-foreground">
        Call us and we will tell you which location is closest and how long your items will take.
      </span>
      <a className="mt-auto pt-5 text-[15px] font-bold text-primary" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
    </Card>
  );
}

export function PriceList() {
  return (
    <div>
      {PRICES.map(([item, price]) => (
        <div key={item} className="flex items-baseline justify-between gap-4 bg-background py-3 text-[15px]">
          <span>{item}</span>
          <b className="font-bold tabular-nums text-primary">{price}</b>
        </div>
      ))}
    </div>
  );
}

export function TicketAlert({ className }) {
  return (
    <Alert variant="brand" className={cn("rv shadow-[0_12px_30px_rgba(83,175,171,.28)]", className)}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
        <Icon name="clock" size={22} strokeWidth={1.9} />
      </span>
      <div>
        <AlertTitle className="text-[17px] text-white">Please keep your ticket</AlertTitle>
        <AlertDescription className="text-white/90">
          Items should be collected within <b className="font-bold text-white">15 days</b>, and claims can only be made
          <b className="font-bold text-white"> at the time of collection</b>. Check your items at the counter before you leave.
        </AlertDescription>
      </div>
    </Alert>
  );
}

/** Placeholder card. Wire to the Google Places API before launch. See README. */
/** One Google review, written by the customer. Nothing here is edited. */
export function ReviewCard({ review }) {
  if (!review) return null;
  const initial = review.name.trim().charAt(0).toUpperCase();
  return (
    <figure className="rv m-0 flex h-full flex-col rounded-2xl border bg-card p-6 sm:p-7">
      <Stars />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">{review.text}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <AvatarFallback>{initial}</AvatarFallback>
        <div>
          <div className="text-[14.5px] font-semibold">{review.name}</div>
          <div className="text-[12.5px] text-muted-foreground">{review.date}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function HoursCard() {
  return (
    <Card className="p-6 sm:p-7">
      <h3 className="font-display text-xl font-bold tracking-tight">Opening hours</h3>
      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
        {HOURS.map(([day, value]) => (
          <div key={day} className="contents">
            <dt className="whitespace-nowrap py-3 text-[15.5px]">{day}</dt>
            <dd className="m-0 whitespace-nowrap py-3 text-right text-[15.5px] font-bold tabular-nums text-primary">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[13px] text-muted-foreground">
        Hours may change over public holidays. Changes are announced on our social channels.
      </p>
    </Card>
  );
}

export function ContactCard() {
  const rows = [
    ["phone", "Phone", BUSINESS.phone, BUSINESS.phoneHref, false],
    ["mail", "Email", BUSINESS.email, `mailto:${BUSINESS.email}`, true],
    ["pin", "Where", BUSINESS.city, null, false],
  ];
  return (
    <Card className="p-6 sm:p-7">
      <h3 className="font-display text-xl font-bold tracking-tight">Get in touch</h3>
      <div className="mt-5 flex flex-col gap-5">
        {rows.map(([icon, label, value, href, green]) => (
          <div key={label} className="flex items-center gap-4">
            <IconDisc name={icon} green={green} size={21} className="h-12 w-12" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[.14em] text-muted-foreground">{label}</div>
              <div className="mt-0.5 font-display text-lg font-bold">
                {href ? <a className="hover:text-primary" href={href}>{value}</a> : value}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {SOCIALS.map(([key, label, href]) => (
          <a key={key} className="inline-flex h-10 items-center rounded-full bg-secondary px-5 text-[13.5px] font-semibold text-primary transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:grad-primary hover:text-white"
            href={href} target="_blank" rel="noopener noreferrer">{label}</a>
        ))}
      </div>
    </Card>
  );
}

export function LegalBlock({ title, children }) {
  return (
    <div className="rv">
      <h3 className="mt-9 font-display text-lg font-bold tracking-tight">{title}</h3>
      <div className="mt-2.5 flex flex-col gap-3 text-[15.5px] leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export { Eyebrow };
