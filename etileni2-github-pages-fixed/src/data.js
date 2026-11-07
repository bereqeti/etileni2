/** Single source of truth for site content. Edit here, not in the components. */

export const BUSINESS = {
  legalName: "N.P.Z Etileni 2",
  founded: 1974,
  staff: 15,
  phone: "044 161 910",
  phoneHref: "tel:+38344161910",
  email: "info@etileni2.com",
  city: "Prishtina, Kosovo",
  instagram: "https://www.instagram.com/etileni.2/",
  youtube: "https://www.youtube.com/watch?v=Q81E2nDunG0",
  // Leave a channel as "" and every link to it disappears from the site.
  // Never point one at a service homepage: a dead link costs more than a missing icon.
  facebook: "",
  tiktok: "",
};

/** Only the channels that have a real destination. Used by the footer, nav and contact page. */
export const SOCIALS = [
  ["instagram", "Instagram", BUSINESS.instagram],
  ["facebook", "Facebook", BUSINESS.facebook],
  ["tiktok", "TikTok", BUSINESS.tiktok],
  ["youtube", "YouTube", BUSINESS.youtube],
].filter(([, , href]) => Boolean(href));

export const SERVICES = [
  { icon: "hanger", title: "Dry cleaning", body: "Suits, trousers, winter coats, overcoats and blazers, as well as formal and wedding dresses." },
  { icon: "drop", title: "Wash and press", body: "Washed with pressing and folding, or folding only. Priced per item or by the kilogram." },
  { icon: "iron", title: "Pressing", body: "No wash. Priced per item, or by the kilogram for larger quantities." },
  { icon: "bed", title: "Home textiles", body: "Blankets, duvets with down or filling, pillows, bedspreads, mattress covers and curtains." },
  { icon: "jacket", title: "Leather and fur", body: "Leather jackets and skirts, natural and artificial fur, leather bags and footwear." },
  { icon: "overall", title: "Workwear", body: "For mechanics, electricians and full teams. Priced by the kilogram." },
];

export const LOCATIONS = [
  { address: "Rr. Eqrem Çabej 72", area: "Bulevardi Bill Klinton", query: "Rr. Eqrem Qabej 72" },
  { address: "Rr. Mark Dizdari D7/2", area: "Prishtina", query: "Mark Dizdari" },
  { address: "Rr. Enver Maloku", area: "Mati 1", query: "Enver Maloku Mati 1" },
  { address: "Rr. Gazmend Zajmi", area: "Prishtina", query: "Rruga Gazmend Zajmi" },
];

export const mapUrl = (q) =>
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Pastrimi Kimik Etileni 2 " + q + " Prishtine");

export const PRICES = [
  ["Shirt", "1.5 to 4 €"],
  ["Trousers", "2 to 4 €"],
  ["Suit jacket", "3 to 5 €"],
  ["Winter coat", "7 to 10 €"],
  ["Wash by weight, per kg", "2.5 to 5 €"],
  ["Blanket", "10 to 15 €"],
  ["Leather jacket", "20 to 30 €"],
  ["Wedding dress", "50 to 100 €"],
];

export const HOURS = [
  ["Mon to Fri", "08:00 to 20:00"],
  ["Saturday", "09:00 to 17:00"],
  ["Sunday", "Closed"],
];

export const STATS = [
  ["1974", "Cleaning Prishtina since"],
  ["4", "Locations across the city"],
  ["15", "People on the team"],
  ["94", "Items on the price list"],
];

/**
 * Real reviews from the Google Business Profile, copied verbatim on the date below.
 * Google shows relative ages ("2 weeks ago"), which rot on a static page, so each one
 * is stored as the month it was left. Spelling and punctuation are the reviewer's own.
 */
export const REVIEWS_CAPTURED = "7 November 2026";

export const REVIEWS = [
  { name: "Irisz Berta",    date: "November 2026", stars: 5, text: "They doing a really great job, definitely recommend." },
  { name: "Vlora Rrahmani", date: "November 2026", stars: 5, text: "The staff is extremely friendly and welcoming, and the quality of their work is outstanding. Everything is done with great care and attention to detail. Highly recommended!" },
  { name: "Urim Sheremeti", date: "November 2026", stars: 5, text: "The best" },
  { name: "debora ibrahimi", date: "October 2026", stars: 5, text: "Best laundry in the city, is a 10/10!! Highly recommended" },
  { name: "Medlina Raja",   date: "October 2026", stars: 5, text: "Very nice staff, and very good cleaning :)" },
  { name: "Valbona Gashi",  date: "October 2026", stars: 5, text: "Wonderful staff, top-notch cleaning, exemplary hospitality" },
  { name: "Hetem Nika",     date: "October 2026", stars: 5, text: "Kinga, you are the best in the city." },
  { name: "Giulia Datovo",  date: "October 2026", stars: 5, text: "Very professional and fast service!" },
];

export const FAQ = [
  { q: "How long does an order take?", a: "It depends on the item and how busy we are. Tell us your deadline at the counter and we will confirm a collection date on your ticket before we start. An express option is available on request." },
  { q: "Do you treat stains separately?", a: "Yes. Stain treatment is charged separately and complete removal cannot be guaranteed. The result depends on the type of stain, the material and how long it has been there." },
  { q: "What about items with no care label?", a: "We can still clean them, but we cannot guarantee the result. Our staff will tell you the risk before we begin." },
  { q: "Do you take on business accounts?", a: "Yes. Workwear for mechanics, electricians and full teams is priced by the kilogram. Call us to set up a regular collection." },
];
