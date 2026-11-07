import { SectionHead } from "@/components/Shared";
import { LegalBlock } from "@/components/Blocks";
import { BUSINESS } from "@/data";

export default function Privacy() {
  const mail = <a className="font-semibold text-primary" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>;
  return (
    <section className="container max-w-[80ch] py-12 sm:py-20">
      <SectionHead eyebrow="Privacy policy" title="How we handle your information">
        This policy covers the information you give us through this website. It does not change the terms that apply to
        items you bring into a location.
      </SectionHead>

      <LegalBlock title="Who is responsible">
        <p>{BUSINESS.legalName}, {BUSINESS.city}. For anything relating to your data, write to {mail} or call {BUSINESS.phone}.</p>
      </LegalBlock>

      <LegalBlock title="What we collect">
        <p>
          Only what you type into the cleaning request form: your name, email address, phone number, the address you
          choose to give, a description of what needs cleaning, and a photo if you attach one.
        </p>
        <p>If you accept analytics cookies we also collect anonymous statistics about which pages are visited.</p>
      </LegalBlock>

      <LegalBlock title="Why we use it">
        <p>
          To answer your request, quote a price and arrange the work. We do not sell your information, and we do not send
          marketing unless you ask us to.
        </p>
      </LegalBlock>

      <LegalBlock title="Form delivery provider">
        <p>
          Our online request form is processed by FormSubmit (a third-party service). The details you enter,
          including any attached photo, are sent to FormSubmit for delivery to info@etileni2.com.
          FormSubmit states that it retains submission data for up to 30 days; uploaded files are not
          retained in its submission archive. Please do not submit sensitive personal information in photos.
        </p>
      </LegalBlock>

      <LegalBlock title="How long we keep it">
        <p>
          We keep what you send through the form only as long as we need it to deal with your request and to meet our
          legal and accounting obligations. After that it is deleted. You can ask us to delete it sooner at any time.
        </p>
      </LegalBlock>

      <LegalBlock title="Your rights">
        <p>
          You can ask us what we hold about you, ask for it to be corrected, or ask us to delete it. Write to {mail} and
          we will respond.
        </p>
      </LegalBlock>

      <LegalBlock title="Cookies">
        <p>
          Strictly necessary cookies keep the site working. Analytics and marketing cookies are off until you turn them
          on, and you can change your choice at any time from the link in the footer.
        </p>
      </LegalBlock>

    </section>
  );
}
