import { useNavigate } from "react-router-dom";
import { Media } from "@/components/Shared";
import { ServiceSplit } from "@/components/ServiceGrid";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icons";
import { SERVICES, FAQ } from "@/data";

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="container py-12 sm:py-20">
      <ServiceSplit
        title={<>Our<br />Services</>}
        lead="Six service lines cover everything on our price list, from everyday garments to items that need particular care. Each one is priced individually on the list displayed at every location."
        services={SERVICES.map((s) => ({ ...s, to: "/contact" }))}
      >
        <Button className="mt-8 rounded-full" onClick={() => navigate("/contact")}>
          Ask about your item <Icon name="arrow" size={17} strokeWidth={2.3} />
        </Button>
      </ServiceSplit>

      <Media ratio="21x9" video className="rv mt-14"
        label="Process film: intake, treatment, pressing, collection" note="Full width - 45 to 60 seconds" />

      <div className="mt-12">
        <Accordion items={FAQ} />
      </div>
    </section>
  );
}
