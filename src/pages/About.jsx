import { SectionHead } from "@/components/Shared";

export default function About() {
  return (
    <section className="container py-12 sm:py-20">
      <SectionHead eyebrow="About us" title="Fifty years of careful cleaning" />
      <div className="rv mt-8 flex max-w-[68ch] flex-col gap-4 text-[16.5px] leading-relaxed text-muted-foreground">
        <p>
          Etileni 2 has been cleaning for Prishtina since <b className="font-semibold text-foreground">1974</b>. Four
          locations across the city and a team of fifteen people handle everyday garments alongside items that need
          particular care: leather, fur, wedding dresses and home textiles.
        </p>
        <p>
          We work across every budget and every sector, from a single shirt to the workwear of an entire crew. Our
          capacity is there to hold the highest standard of service we can offer, and that comes down to the people who
          do the work.
        </p>
        <p>
          Each item is handled according to its fabric and its care label. Where something carries a risk, we say so
          before we begin, and the price is confirmed before any work starts.
        </p>
      </div>
    </section>
  );
}
