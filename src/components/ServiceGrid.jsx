import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { cn } from "@/lib/utils";

/**
 * Service tile from the reference: icon top left, description mid,
 * hairline, name at the bottom. The first tile carries the brand fill.
 */
export function ServiceTile({ service, accent, to = "/services" }) {
  return (
    <Link
      to={to}
      className={cn(
        "rv group flex min-h-[260px] flex-col rounded-2xl p-6 transition-all duration-300 ease-brand sm:p-7",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        accent
          ? "grad-primary text-white hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(83,175,171,.3)]"
          : "border bg-muted text-foreground hover:-translate-y-1 hover:border-ring hover:bg-card hover:shadow-[0_14px_36px_rgba(83,175,171,.14)]"
      )}
    >
      <span className={cn("transition-transform duration-300 ease-brand group-hover:scale-110 group-hover:-rotate-3",
        accent ? "text-white" : "text-primary")}>
        <Icon name={service.icon} size={34} strokeWidth={1.4} />
      </span>

      <p className={cn("mt-auto pt-10 text-[14.5px] leading-relaxed",
        accent ? "text-white/90" : "text-muted-foreground")}>
        {service.body}
      </p>

      <span className={cn("mt-5 block border-t pt-4 font-display text-[16px] font-bold tracking-tight",
        accent ? "border-white/35 text-white" : "border-primary/30 text-foreground")}>
        {service.title}
      </span>
    </Link>
  );
}

/** Left column of copy, right column of tiles. */
export function ServiceSplit({ title, lead, services, children }) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <div className="rv">
        <h2 className="font-display text-[clamp(38px,6vw,64px)] font-extrabold leading-[0.98] tracking-[-.03em]">
          {title}
        </h2>
        <p className="mt-6 max-w-[42ch] text-[16.5px] leading-relaxed text-muted-foreground">{lead}</p>
        {children}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <ServiceTile key={s.title} service={s} accent={i === 0} to={s.to} />
        ))}
      </div>
    </div>
  );
}
