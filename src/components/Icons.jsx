const PATHS = {
  hanger: <><path d="M12 3a1.8 1.8 0 0 0-1 3.3V8l-7.4 5.2A1.6 1.6 0 0 0 4.5 16h15a1.6 1.6 0 0 0 .9-2.8L13 8V6.3A1.8 1.8 0 0 0 12 3Z" /><path d="M4 19h16" /></>,
  drop: <><path d="M12 3c3.2 3.6 5 6.2 5 8.6A5 5 0 0 1 7 11.6C7 9.2 8.8 6.6 12 3Z" /><path d="M9.6 12.4a2.6 2.6 0 0 0 2.6 2.6" /></>,
  iron: <><path d="M3 15h13a4 4 0 0 0 4-4V8h-8a9 9 0 0 0-9 7Z" /><path d="M3 19h15" /><path d="M7.5 11.5h4" /></>,
  bed: <><path d="M3 17v-4.5A2.5 2.5 0 0 1 5.5 10h13a2.5 2.5 0 0 1 2.5 2.5V17" /><path d="M3 17h18" /><path d="M3 20v-3M21 20v-3" /><path d="M6.5 10V7.5A1.5 1.5 0 0 1 8 6h8a1.5 1.5 0 0 1 1.5 1.5V10" /></>,
  jacket: <><path d="M9 4 5 6.2A2 2 0 0 0 4 8v11h16V8a2 2 0 0 0-1-1.8L15 4" /><path d="M9 4a3 3 0 0 0 6 0" /><path d="M12 8v11" /></>,
  overall: <><path d="M8 3v3a4 4 0 0 0 8 0V3" /><path d="M8 3 5.5 4.2A2 2 0 0 0 4.4 6l-.9 5.2a1 1 0 0 0 1 1.2H6V21h12v-8.6h1.5a1 1 0 0 0 1-1.2L19.6 6a2 2 0 0 0-1.1-1.8L16 3" /></>,
  pin: <><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="4" /><path d="m3.8 7 8.2 5.6L20.2 7" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></>,
  arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
  image: <><rect x="3" y="5" width="18" height="14" rx="3" /><circle cx="8.5" cy="10" r="1.6" /><path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" /></>,
  upload: <><path d="M12 16V8" /><path d="m8.5 11.5 3.5-3.5 3.5 3.5" /><path d="M4 16.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 8v5" /><circle cx="12" cy="16.4" r=".9" fill="currentColor" stroke="none" /></>,
  menu: <><circle cx="6" cy="7" r="1.7" fill="currentColor" stroke="none" /><circle cx="6" cy="12" r="1.7" fill="currentColor" stroke="none" /><circle cx="6" cy="17" r="1.7" fill="currentColor" stroke="none" /><circle cx="13" cy="7" r="1.7" fill="currentColor" stroke="none" /><circle cx="13" cy="12" r="1.7" fill="currentColor" stroke="none" /><circle cx="13" cy="17" r="1.7" fill="currentColor" stroke="none" /></>,
};

export function Icon({ name, size = 24, strokeWidth = 1.6, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

export function PlayIcon({ size = 26 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5 19 12 8 18.5v-13Z" /></svg>;
}

export function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.8 6.6 19.7l1.2-6.1L3.3 9.4l6.1-.8L12 3Z" />
        </svg>
      ))}
    </div>
  );
}

export const SOCIAL_ICONS = {
  facebook: <path d="M14 8.5V7c0-.8.3-1.2 1.2-1.2H17V3h-2.6C11.7 3 11 4.6 11 6.7v1.8H9V11h2v10h3V11h2.3l.4-2.5H14Z" />,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5.5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17.1" cy="6.9" r=".95" fill="currentColor" stroke="none" /></>,
  youtube: <><rect x="2.5" y="5.5" width="19" height="13" rx="5" /><path d="m10.3 9.4 4.6 2.6-4.6 2.6V9.4Z" fill="currentColor" stroke="none" /></>,
  tiktok: <path d="M16.1 2.6h-2.8v12.2a2.6 2.6 0 1 1-2.6-2.6c.2 0 .4 0 .6.1V9.4a5.5 5.5 0 1 0 4.8 5.4V8.7c1 .7 2.2 1.1 3.5 1.2V7a4.2 4.2 0 0 1-3.5-4.4Z" />,
};

export function SocialIcon({ name, size = 17 }) {
  const filled = name === "facebook" || name === "tiktok";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"} strokeWidth="1.8" aria-hidden="true">
      {SOCIAL_ICONS[name]}
    </svg>
  );
}
