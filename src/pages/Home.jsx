import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHead, Eyebrow, MediaBg } from "@/components/Shared";
import { LocationCard, PriceList, ReviewCard } from "@/components/Blocks";
import { ServiceSplit } from "@/components/ServiceGrid";
import StepsBento from "@/components/StepsBento";
import { Icon } from "@/components/Icons";
import { SERVICES, LOCATIONS, STATS, REVIEWS } from "@/data";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero: media full bleed behind, everything else on top */}
      <section className="relative isolate overflow-hidden text-white">
        <MediaBg />
        <div className="container pb-10 pt-12 sm:pb-12 sm:pt-28">
          <div className="max-w-[58ch]">
            <Eyebrow onDeep>Since 1974 - Four locations</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(32px,7vw,60px)] font-extrabold leading-[1.02] tracking-[-.02em] text-white">
              Dry &amp; Wet Cleaning <span className="text-accent">in Prishtina.</span>
            </h1>
            <p className="mt-5 max-w-[52ch] text-[clamp(15px,1.5vw,17.5px)] leading-relaxed text-[#C6E3E4]">
              Etileni 2 has cleaned garments, home textiles, leather and fur for households and businesses across the city
              for over fifty years. Bring your items to any of our four locations and collect them ready to wear.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button size="lg" className="w-full rounded-full sm:w-auto" onClick={() => navigate("/contact")}>
                Send a cleaning request <Icon name="arrow" size={17} strokeWidth={2.3} />
              </Button>
              <Button size="lg" variant="outlineOnDeep" className="w-full rounded-full sm:w-auto" onClick={() => navigate("/locations")}>
                Find a location
              </Button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">
            {STATS.map(([n, label]) => (
              <div key={label} className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur sm:p-5">
                <div className="font-display text-[clamp(24px,3vw,34px)] font-extrabold leading-none tabular-nums text-accent">{n}</div>
                <div className="mt-2 text-[13px] leading-snug text-[#C6E3E4]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services: copy left, tile grid right */}
      <section className="container py-14 sm:py-20">
        <ServiceSplit
          title={<>Our<br />Services</>}
          lead="From a single shirt to the curtains of an entire house. Every item is treated according to its fabric and its care label, and the price is confirmed before we begin."
          services={SERVICES.slice(0, 4)}
        >
          <Button className="mt-8 rounded-full" onClick={() => navigate("/services")}>
            See all services <Icon name="arrow" size={17} strokeWidth={2.3} />
          </Button>
        </ServiceSplit>
      </section>

      {/* How it works */}
      <section className="grad-deep">
        <div className="container py-14 sm:py-20">
          <div className="mx-auto max-w-[56ch] text-center">
            <div className="flex justify-center"><Eyebrow onDeep>How it works</Eyebrow></div>
            <h2 className="mt-4 font-display text-[clamp(28px,3.8vw,42px)] font-extrabold leading-[1.1] tracking-tight text-white">
              Three steps, no complications
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-[#9CC3C4]">
              You drop items off, we handle the rest. The price is agreed before any work begins.
            </p>
          </div>
          <StepsBento />
        </div>
      </section>

      {/* Inside the shop */}
      <section className="relative isolate overflow-hidden py-16 text-white sm:py-32">
        <MediaBg />
        <div className="container">
          <div className="max-w-[58ch]">
            <Eyebrow onDeep>Inside the shop</Eyebrow>
            <h2 className="mt-3.5 font-display text-[clamp(28px,3.8vw,42px)] font-extrabold leading-[1.1] tracking-tight text-white">
              Fifty years of doing one thing properly
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-[#C6E3E4]">
              Four locations across Prishtina and a team of fifteen people handle everyday garments alongside items that
              need particular care: leather, fur, wedding dresses and home textiles.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="onDeep" className="w-full rounded-full sm:w-auto" onClick={() => navigate("/about")}>Read more about us</Button>
              <Button variant="outlineOnDeep" className="w-full rounded-full sm:w-auto" onClick={() => navigate("/services")}>See what we clean</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted">
        <div className="container py-14 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHead eyebrow="Pricing" title="Every price is listed, and quoted before we start">
                The full list is displayed at each location. Prices shown are for standard cleaning and can change
                depending on the material.
              </SectionHead>
              <Button className="mt-7 rounded-full" onClick={() => navigate("/pricing")}>See the price list</Button>
            </div>
            <Card className="rv p-6 sm:p-7">
              <Eyebrow>Examples from the list</Eyebrow>
              <div className="mt-4"><PriceList /></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="container py-14 sm:py-20">
        <SectionHead eyebrow="Locations" title="Four locations in Prishtina">
          All open every working day until 20:00.
        </SectionHead>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((l) => <LocationCard key={l.address} location={l} />)}
        </div>
        <Button className="mt-8 rounded-full" variant="outline" onClick={() => navigate("/locations")}>
          All locations and map
        </Button>
      </section>

      {/* Reviews */}
      <section className="bg-muted">
        <div className="container py-14 sm:py-20">
          <SectionHead eyebrow="Google reviews" title="What customers say">
            Every word below was left on our Google Business Profile by a customer. Nothing here is written by us.
          </SectionHead>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.slice(0, 3).map((r) => <ReviewCard key={r.name} review={r} />)}
          </div>
          <Button className="mt-8 rounded-full" variant="outline" onClick={() => navigate("/reviews")}>
            Read all reviews
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-14 sm:py-20">
        <div className="grad-primary flex flex-wrap items-center justify-between gap-6 rounded-[28px] p-8 text-white sm:p-12">
          <div>
            <h2 className="max-w-[22ch] font-display text-[clamp(24px,3vw,36px)] font-extrabold leading-tight tracking-tight text-white">
              Not sure what your item needs?
            </h2>
            <p className="mt-3 max-w-[46ch] text-white/90">
              Send us the details and a photo. We will tell you what is possible and what it will cost before you come in.
            </p>
          </div>
          <Button variant="onDeep" size="lg" className="w-full rounded-full sm:w-auto" onClick={() => navigate("/contact")}>
            Send a request
          </Button>
        </div>
      </section>
    </>
  );
}
