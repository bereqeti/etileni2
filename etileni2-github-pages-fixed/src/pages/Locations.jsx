import { SectionHead } from "@/components/Shared";
import { LocationCard, CallCard } from "@/components/Blocks";
import { LOCATIONS } from "@/data";

export default function Locations() {
  return (
    <section className="container py-12 sm:py-20">
      <SectionHead eyebrow="Locations" title="Four locations in Prishtina">
        Open Monday to Friday until 20:00 and Saturday until 17:00. Tap any location to open it in Google Maps.
      </SectionHead>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((l) => <LocationCard key={l.address} location={l} />)}
        <CallCard />
      </div>
    </section>
  );
}
