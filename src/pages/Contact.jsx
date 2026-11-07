import { SectionHead } from "@/components/Shared";
import RequestForm from "@/components/RequestForm";
import { HoursCard, ContactCard } from "@/components/Blocks";

export default function Contact() {
  return (
    <section className="container py-12 sm:py-20">
      <SectionHead eyebrow="Contact" title="Send us a cleaning request">
        Tell us what you need cleaned and add a photo if you have one. We will come back to you with what is possible
        and what it will cost.
      </SectionHead>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rv"><RequestForm /></div>
        <div className="rv flex flex-col gap-5">
          <HoursCard />
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
