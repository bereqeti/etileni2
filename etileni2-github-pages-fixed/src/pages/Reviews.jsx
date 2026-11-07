import { SectionHead } from "@/components/Shared";
import { ReviewCard } from "@/components/Blocks";
import { Card } from "@/components/ui/card";
import { Stars } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { mapUrl, REVIEWS, REVIEWS_CAPTURED } from "@/data";

export default function Reviews() {
  return (
    <section className="container py-12 sm:py-20">
      <SectionHead eyebrow="Google reviews" title="What customers say">
        Every review below was left on our Google Business Profile and is reproduced word for word.
        Nothing on this page is written by us.
      </SectionHead>

      <div className="rv mt-8 flex flex-wrap items-center gap-4">
        <Card className="flex items-center gap-4 px-6 py-5">
          <Stars />
          <div className="text-[13.5px] text-muted-foreground">
            Every one of the {REVIEWS.length} most recent reviews left us five stars
          </div>
        </Card>
        <Button variant="outline" className="rounded-full" asChild={false} onClick={() => window.open(mapUrl(""), "_blank", "noopener")}>
          Read them on Google
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => <ReviewCard key={r.name} review={r} />)}
      </div>

      <p className="rv mt-8 text-[13px] text-muted-foreground">
        {REVIEWS.length} most recent reviews, copied from Google on {REVIEWS_CAPTURED}.
        Google shows the age of a review rather than its date, so each one is shown by the month it was left.
      </p>
    </section>
  );
}
