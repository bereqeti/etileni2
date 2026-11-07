import { useLocation, useNavigate } from "react-router-dom";
import { BUSINESS } from "@/data";
import { Icon } from "./Icons";

/**
 * Sticky action bar, phones only.
 * Sits above the home indicator via env(safe-area-inset-bottom).
 */
export default function MobileBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-3 px-4 py-3">
        <a
          href={BUSINESS.phoneHref}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-input bg-background text-[15px] font-semibold text-primary active:bg-secondary"
        >
          <Icon name="phone" size={18} strokeWidth={1.9} />
          Call
        </a>
        <button
          type="button"
          onClick={() => navigate("/contact")}
          className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full grad-primary text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(83,175,171,.3)]"
        >
          Send a request
          <Icon name="arrow" size={17} strokeWidth={2.3} />
        </button>
      </div>
    </div>
  );
}
