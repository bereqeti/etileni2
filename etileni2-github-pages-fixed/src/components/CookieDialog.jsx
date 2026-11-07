import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

const KEY = "etileni2.cookies";
const DEFAULTS = { analytics: false, marketing: false };

export function readCookiePrefs() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || "null") }; }
  catch { return { ...DEFAULTS }; }
}
function write(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* private mode */ } }

const ROWS = [
  ["Strictly necessary", "Required for the site to work: page routing, your cookie choices and form security. These cannot be switched off.", "necessary"],
  ["Analytics", "Anonymous statistics on which pages are visited, so we know what to improve. Nothing is used to identify you.", "analytics"],
  ["Marketing", "Used to measure whether an advert or a social post brought you here. Off unless you turn it on.", "marketing"],
];

export default function CookieDialog({ open, onOpenChange }) {
  const [prefs, setPrefs] = useState(DEFAULTS);
  useEffect(() => { if (open) setPrefs(readCookiePrefs()); }, [open]);

  const save = (v) => { write(v); setPrefs(v); onOpenChange(false); };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cookie settings</DialogTitle>
          <DialogDescription>
            Choose what we may store on your device. You can change this at any time from the footer.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-5 flex flex-col gap-4">
          {ROWS.map(([title, body, key]) => (
            <div key={key} className="flex items-start justify-between gap-5 rounded-xl border p-4">
              <div>
                <div className="text-[15px] font-semibold">{title}</div>
                <div className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{body}</div>
              </div>
              <Switch
                checked={key === "necessary" ? true : prefs[key]}
                disabled={key === "necessary"}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, [key]: v }))}
              />
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button onClick={() => save({ analytics: true, marketing: true })}>Accept all</Button>
          <Button variant="outline" onClick={() => save(prefs)}>Save my choices</Button>
          <Button variant="ghost" onClick={() => save({ ...DEFAULTS })}>Reject optional</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
