import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Icon } from "./Icons";
import { IconDisc } from "./Shared";
import { BUSINESS } from "@/data";
import { cn } from "@/lib/utils";

const FORM_ENDPOINT = "https://formsubmit.co/info@etileni2.com";
const EMPTY = { name: "", email: "", phone: "", address: "", requirements: "" };

export default function RequestForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [photo, setPhoto] = useState(null);
  const fileRef = useRef(null);

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  function validate() {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 6) e.phone = "Please enter a phone number we can reach you on.";
    if (values.requirements.trim().length < 10) e.requirements = "Please tell us what needs cleaning.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e) {
    // GitHub Pages has no server-side forms. Once validation succeeds,
    // the browser submits the multipart form directly to FormSubmit.
    // The mailbox owner must confirm the first activation email.
    if (!validate()) {
      e.preventDefault();
      document.querySelector('[aria-invalid="true"]')?.focus();
    }
  }

  function pick(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!(["image/jpeg", "image/png"].includes(file.type)) || file.size > 8 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, photo: "Choose a JPG or PNG image under 8 MB." }));
      e.target.value = "";
      return;
    }
    setErrors((prev) => ({ ...prev, photo: undefined }));
    setPhoto({ file, name: file.name, size: Math.round(file.size / 1024), url: URL.createObjectURL(file) });
  }

  const Field = ({ id, label, required, full, children }) => (
    <div className={cn("flex flex-col gap-2", full && "sm:col-span-2")}>
      <Label htmlFor={id}>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {children}
      {errors[id] && <span className="text-[12.5px] font-medium text-destructive">{errors[id]}</span>}
    </div>
  );

  return (
    <Card className="p-6 sm:p-7">
      <form method="POST" action={FORM_ENDPOINT} encType="multipart/form-data" onSubmit={onSubmit} noValidate>
        <input type="hidden" name="_subject" value="New Etileni 2 cleaning request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_url" value="https://etileni2.com/#/contact" />
        <p className="hidden">
          <label>Leave this field empty <input name="_honey" tabIndex={-1} autoComplete="off" /></label>
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="name" label="Full name" required>
            <Input id="name" name="name" autoComplete="name" placeholder="Arben Krasniqi"
              value={values.name} onChange={set("name")} aria-invalid={!!errors.name} />
          </Field>
          <Field id="email" label="Email" required>
            <Input id="email" name="email" type="email" autoComplete="email" placeholder="arben@example.com"
              value={values.email} onChange={set("email")} aria-invalid={!!errors.email} />
          </Field>
          <Field id="phone" label="Phone number" required>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="044 000 000"
              value={values.phone} onChange={set("phone")} aria-invalid={!!errors.phone} />
          </Field>
          <Field id="address" label="Address">
            <Input id="address" name="address" autoComplete="street-address" placeholder="Street, neighbourhood, city"
              value={values.address} onChange={set("address")} />
          </Field>
          <Field id="requirements" label="What do you need cleaned?" required full>
            <Textarea id="requirements" name="requirements" value={values.requirements} onChange={set("requirements")}
              aria-invalid={!!errors.requirements}
              placeholder="Two wool coats and a wedding dress. The dress has a mark near the hem." />
          </Field>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <Label>Photo of the item</Label>
            <button type="button" onClick={() => fileRef.current?.click()}
              className={cn("rounded-lg border border-input p-6 text-center transition-all duration-300 ease-brand",
                "hover:border-ring hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                photo && "bg-muted")}>
              <IconDisc name="upload" size={24} className="mx-auto mb-3" />
              <div className="text-[14.5px] font-semibold">Click to add a photo</div>
              <div className="mt-1 text-[12.5px] text-muted-foreground">
                JPG or PNG, up to 8 MB. Optional, but it helps us quote accurately.
              </div>
              {photo && (
                <div className="mt-4 flex items-center gap-3.5 text-left">
                  <img src={photo.url} alt="" className="h-16 w-16 rounded-md object-cover" />
                  <div>
                    <div className="text-[14px] font-semibold">{photo.name}</div>
                    <div className="text-[12.5px] text-muted-foreground">{photo.size} KB</div>
                  </div>
                </div>
              )}
            </button>
            <input ref={fileRef} name="attachment" type="file" accept="image/jpeg,image/png" className="hidden" onChange={pick} />
          </div>
        </div>

        {errors.photo && <p className="mt-3 text-[12.5px] font-medium text-destructive">{errors.photo}</p>}
        <p className="mt-4 text-[12.5px] text-muted-foreground">
          Requests and optional photos are securely submitted through FormSubmit, an external
          form delivery service, and forwarded to info@etileni2.com. See our privacy policy.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button type="submit" size="lg" className="rounded-full">
            Send request
            <Icon name="arrow" size={17} strokeWidth={2.3} />
          </Button>
          <span className="text-[13px] text-muted-foreground">
            Or call <a className="font-semibold text-primary" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
          </span>
        </div>
      </form>
    </Card>
  );
}
