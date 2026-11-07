import { useNavigate } from "react-router-dom";
import { SectionHead, Eyebrow, IconDisc } from "@/components/Shared";
import { PriceList, TicketAlert } from "@/components/Blocks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const navigate = useNavigate();
  return (
    <section className="container py-12 sm:py-20">
      <SectionHead eyebrow="Pricing" title="Every price is listed, and quoted before we start">
        The full price list is displayed at each location. Listed prices are for standard cleaning and can change
        depending on the material. Our staff confirm the final price when your items are taken in, so nothing is decided
        after the work is done.
      </SectionHead>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="rv p-6 sm:p-7">
          <Eyebrow>Examples from the list</Eyebrow>
          <div className="mt-4"><PriceList /></div>
          <p className="mt-5 text-[12.5px] leading-relaxed text-muted-foreground">
            Prices in euro. Stain treatment is charged separately, and complete removal cannot be guaranteed.
          </p>
        </Card>

        <div className="rv flex flex-col gap-5">
          <Card className="p-6 sm:p-7">
            <IconDisc name="hanger" />
            <h3 className="mt-5 font-display text-lg font-bold tracking-tight">The full list is on the wall</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
              Ninety four items, priced individually. A copy is displayed at every location so you can check before you
              hand anything over.
            </p>
          </Card>
          <TicketAlert />
          <Button className="rounded-full" onClick={() => navigate("/contact")}>Ask for a quote</Button>
        </div>
      </div>
    </section>
  );
}
