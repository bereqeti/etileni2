import { useNavigate } from "react-router-dom";
import { SectionHead } from "@/components/Shared";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="container py-24 sm:py-32">
      <SectionHead eyebrow="404" title="That page does not exist">
        The link may be old, or the address may have a typo in it.
      </SectionHead>
      <Button className="mt-7 rounded-full" onClick={() => navigate("/")}>Back to the homepage</Button>
    </section>
  );
}
