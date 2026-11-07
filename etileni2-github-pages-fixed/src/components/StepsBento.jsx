import { Icon } from "./Icons";
import { cn } from "@/lib/utils";

function Tile({ className, children }) {
  return (
    <div className={cn("rv rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm sm:p-7", className)}>
      {children}
    </div>
  );
}

/**
 * Bento layout from the reference, in our deep blue section.
 * Tall card, stacked pair, tall card, then one wide card across the bottom.
 */
export default function StepsBento() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {/* tall left */}
      <Tile className="flex flex-col lg:row-span-2">
        <span className="flex h-12 w-12 items-center justify-center rounded-full grad-primary font-display text-[17px] font-extrabold text-white">
          01
        </span>
        <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">Bring your items</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-[#9CC3C4]">
          Visit any of our four locations. Our staff inspect each item, quote the price and issue your ticket before
          anything is touched.
        </p>
        <div className="mt-auto pt-10">
          <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
            <span className="text-[13px] text-[#C6E3E4]">Open every working day</span>
            <span className="font-display text-[15px] font-bold text-accent tabular-nums">until 20:00</span>
          </div>
        </div>
      </Tile>

      {/* middle top, the small figure card */}
      <Tile className="flex items-center justify-between gap-4">
        <div>
          <div className="font-display text-xl font-bold tracking-tight text-white">Treated by material</div>
          <div className="mt-1 text-[13px] text-[#9CC3C4]">Fabric and care label, every time</div>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 text-accent">
          <Icon name="drop" size={24} />
        </span>
      </Tile>

      {/* tall right, the hero numeral */}
      <Tile className="flex flex-col lg:row-span-2">
        <div className="font-display text-[clamp(56px,7vw,86px)] font-extrabold leading-none tracking-[-.04em] text-white">
          15<span className="text-accent">d</span>
        </div>
        <p className="mt-auto pt-10 font-display text-xl font-bold tracking-tight text-white">Collect within 15 days</p>
        <p className="mt-3 text-[14.5px] leading-relaxed text-[#9CC3C4]">
          Keep your ticket. Claims can only be made at the time of collection, so check your items at the counter before
          you leave.
        </p>
      </Tile>

      {/* middle bottom */}
      <Tile className="flex flex-col">
        <span className="flex h-12 w-12 items-center justify-center rounded-full grad-primary font-display text-[17px] font-extrabold text-white">
          02
        </span>
        <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">We treat each piece</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-[#9CC3C4]">
          Stains are treated separately where required, and we say so in advance when an item carries a risk.
        </p>
      </Tile>

      {/* wide bottom */}
      <Tile className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-3">
        <div className="flex items-center gap-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full grad-primary font-display text-[17px] font-extrabold text-white">
            03
          </span>
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-white">Collect them ready</h3>
            <p className="mt-1 text-[14.5px] leading-relaxed text-[#9CC3C4]">
              Cleaned, pressed and either folded or returned on hangers, ready to wear.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
          <Icon name="clock" size={20} className="text-accent" />
          <span className="text-[13px] text-[#C6E3E4]">Price agreed before any work begins</span>
        </div>
      </Tile>

    </div>
  );
}
