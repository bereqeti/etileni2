import { SectionHead, Eyebrow } from "@/components/Shared";
import { LegalBlock, TicketAlert } from "@/components/Blocks";
import { Card } from "@/components/ui/card";

const NOT_GUARANTEED = [
  "Buttons, buckles and fastenings, against the effect of cleaning chemicals.",
  "Fabrics and leather whose dye has not been properly fixed.",
  "Sequins and decorative elements that have not been properly fixed.",
  "Items presented with a false care label, or with no care label at all.",
];

export default function Terms() {
  return (
    <section className="container max-w-[80ch] py-12 sm:py-20">
      <SectionHead eyebrow="Terms of service" title="Vërejtje: our terms">
        These are the terms displayed at every location, in English. The Albanian notice on the wall is the original,
        and it is the version that applies.
      </SectionHead>

      <LegalBlock title="What we cannot guarantee">
        <p>Cleaning carries risk on certain materials. We do not accept liability for the following:</p>
        <ol className="ml-5 flex list-decimal flex-col gap-2">
          {NOT_GUARANTEED.map((x) => <li key={x}>{x}</li>)}
        </ol>
      </LegalBlock>

      <LegalBlock title="Your responsibilities">
        <p>
          Please check the pockets of your garments before or during hand over. We cannot accept liability for the loss
          or destruction of items left in pockets.
        </p>
        <p>Claims can only be made at the time of collection, so please check your items at the counter before you leave.</p>
      </LegalBlock>

      <LegalBlock title="If we damage an item">
        <p>Where a material is damaged by us, we are obliged to pay under these conditions:</p>
      </LegalBlock>

      <div className="rv mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Card className="p-6">
          <Eyebrow>Standard cover</Eyebrow>
          <p className="mt-3 text-[15px] leading-relaxed">We guarantee <b className="font-bold">1000%</b> of the cleaning price paid.</p>
          <div className="mt-4 font-display text-xl font-bold text-primary">5 € x 1000% = 50 €</div>
        </Card>
        <Card className="p-6">
          <Eyebrow>Full cover, on request</Eyebrow>
          <p className="mt-3 text-[15px] leading-relaxed">
            If you want the item covered at <b className="font-bold">100%</b> of its purchase value, the cleaning price
            is 10% of that value.
          </p>
          <div className="mt-4 font-display text-xl font-bold text-[#5E9E22]">50 € x 10% = 5 €</div>
        </Card>
      </div>

      <TicketAlert className="mt-8" />

      <p className="rv mt-8 text-[13px] leading-relaxed text-muted-foreground">
        By handing over your items you accept the terms set out above. N.P.Z Etileni 2, Prishtina, Kosovo.
      </p>
    </section>
  );
}
