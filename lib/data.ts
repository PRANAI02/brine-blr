// ============================================================
// BRINE — INDIRANAGAR, BENGALURU
// Modern-European bar & kitchen. Brutalist concrete + copper.
// This one file drives the whole site.
// ============================================================

export const INFO = {
  name: "Brine",
  city: "Bengaluru",
  handle: "brine_blr", // without the @
  tagline: "Salt, ferment, fire — a modern-European bar & kitchen",
  address: "872A, 80 Feet Rd, HAL 2nd Stage, New Tippasandra, Indiranagar, Bengaluru 560075",
  addressShort: "Indiranagar",
  hours: "Tue–Sun · 5 PM – 1 AM",
  hoursNote: "Closed Mondays",
  costForTwo: "₹2,500 for two (approx.)",
  rating: "4.5",
  ratingCount: "New",
  instagram: "https://www.instagram.com/brine_blr/",
  whatsappRaw: "917338537171",
  whatsappDisplay: "+91 73385 37171",
  // Primary booking partner — the Nav / hero "Book a Table" open this.
  reserveUrl: "https://www.district.in/dining/bangalore/brine-indiranagar-bangalore",
  districtUrl: "https://www.district.in/dining/bangalore/brine-indiranagar-bangalore",
  dineoutUrl: "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F1373103%3Fsource%3Dsharing",
  zomatoUrl: "https://www.zomato.com/bangalore/brine-indiranagar-bangalore",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Brine%20Indiranagar%20Bengaluru",
  mapEmbed:
    "https://maps.google.com/maps?q=Brine%20872A%2080%20Feet%20Road%20HAL%202nd%20Stage%20Indiranagar%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

// Weekly hours — Tue–Sun 5 PM–1 AM, closed Mondays.
export const HOURS: { day: string; times: string[] }[] = [
  { day: "Monday", times: ["Closed"] },
  { day: "Tuesday", times: ["5:00 PM – 1:00 AM"] },
  { day: "Wednesday", times: ["5:00 PM – 1:00 AM"] },
  { day: "Thursday", times: ["5:00 PM – 1:00 AM"] },
  { day: "Friday", times: ["5:00 PM – 1:00 AM"] },
  { day: "Saturday", times: ["5:00 PM – 1:00 AM"] },
  { day: "Sunday", times: ["5:00 PM – 1:00 AM"] },
];

// 6 signature highlights — real photography (3 plates, 3 pours).
export type Signature = { key: string; name: string; note: string; price: string; img: string };
export const SIGNATURES: Signature[] = [
  { key: "From the Sea", name: "Tiger Prawns", note: "Prawn head butter · prawn chilli crisp · fennel · prawn oil.", price: "₹850", img: "/images/dish-prawns.jpg" },
  { key: "Off the Fire", name: "Mackerel", note: "Burnt cherry tomato vierge · dashi emulsion.", price: "₹750", img: "/images/dish-mackerel.jpg" },
  { key: "From the Garden", name: "Charred Cabbage", note: "Root vegetables · emmental cream · chilli oil.", price: "₹550", img: "/images/dish-cabbage.jpg" },
  { key: "The Namesake", name: "Salt & Pepper", note: "Three-pepper gin · bitter bianco · dry vermouth · brine.", price: "₹895", img: "/images/bar-1.jpg" },
  { key: "After Dark", name: "Coffee Cocktail", note: "1800 tequila · cocoa butter · vermouth · Attikan estate coffee · Campari.", price: "₹1195", img: "/images/bar-2.jpg" },
  { key: "The Classic", name: "Vesper", note: "Tanqueray gin · Skyy vodka · dry vermouth.", price: "₹995", img: "/images/bar-3.jpg" },
];

export type MenuItem = { name: string; desc?: string; price: string; veg?: boolean };
export type MenuCategory = { title: string; kicker: string; items: MenuItem[] };

// Full menu — transcribed from the venue's card. `veg: true` → green dot.
export const MENU: MenuCategory[] = [
  {
    title: "Small",
    kicker: "To Begin",
    items: [
      { name: "Foccacia", desc: "Lacto chilli peppers · kimchi butter · labneh", price: "₹325", veg: true },
      { name: "Honey Toast", desc: "Blue cheese · Sichuan peppercorns", price: "₹350", veg: true },
      { name: "Stem Salad", desc: "Bok choy · cabbage · spinach · shimeji · miso guajillo vinaigrette", price: "₹470", veg: true },
      { name: "Grain Salad", desc: "Pearl couscous · quinoa · amaranth · smoked beetroot · asparagus · pomegranate", price: "₹400", veg: true },
      { name: "Triple-Cooked Crispy Potatoes", desc: "Tomato jam · vinegar · hot sauce", price: "₹400", veg: true },
      { name: "Haloumi", desc: "Potato bun · romesco · basil · oyster mushroom", price: "₹550", veg: true },
      { name: "Black Caesar", desc: "Charred kale · romaine · chicken skin · parmesan · anchovy", price: "₹460" },
      { name: "Chicken Skewers", desc: "Tare · bok choy leaf · almond arbol sauce", price: "₹450" },
      { name: "Beef Tartare", desc: "Potato pavé · egg yolk · parmesan · mustard", price: "₹450" },
      { name: "Fried Snapper & Sea Bass", desc: "Basil dust · malt vinegar mist · cucumber tartare", price: "₹650" },
      { name: "Chicken Liver Pâté", desc: "Brandy · apricot · balsamic", price: "₹450" },
      { name: "Tiger Prawns", desc: "Prawn head butter · prawn chilli crisp · fennel · prawn oil", price: "₹850" },
      { name: "Bone-in Lamb Belly", desc: "Onion soubise · burnt pineapple · fennel", price: "₹800" },
      { name: "Cheeseburger", desc: "Prime rib · chuck · striploin · mustard · potato bun · onions · koji", price: "₹750" },
    ],
  },
  {
    title: "Big",
    kicker: "Mains",
    items: [
      { name: "Miso Fettuccine", desc: "Black garlic · chilli", price: "₹500", veg: true },
      { name: "Orecchiette", desc: "King oyster · oyster · parmesan foam", price: "₹600", veg: true },
      { name: "Charred Cabbage", desc: "Root vegetables · emmental cream · chilli oil", price: "₹550", veg: true },
      { name: "Roasted Tomato Risotto", desc: "Cherry tomato · mozzarella · parmesan · tomato vinegar (2022)", price: "₹550", veg: true },
      { name: "Crackling Pork", desc: "Chimichurri · avo crema · green apple", price: "₹900" },
      { name: "Mackerel", desc: "Burnt cherry tomato vierge · dashi emulsion", price: "₹750" },
      { name: "Baby Octopus", desc: "Mackerel tare · scallion · noodles", price: "₹700" },
      { name: "Duck Tea", desc: "Lacto ginger · tare · noodles · duck breast", price: "₹900" },
      { name: "Chicken Breast", desc: "Mustard jus · carrot", price: "₹650" },
      { name: "Snapper", desc: "Asparagus · dashi beurre blanc · leek oil", price: "₹850" },
      { name: "Confit Duck", desc: "Warm potato salad · carrot purée", price: "₹900" },
      { name: "Striploin", desc: "Shio koji · broccoli · bok choy · chocolate jus", price: "₹900" },
    ],
  },
  {
    title: "Dessert",
    kicker: "Sweet",
    items: [
      { name: "Crémeux", desc: "Dark chocolate · feuilletine · EVOO · Maldon", price: "₹400", veg: true },
      { name: "Berries", desc: "Almond crumble · cream cheese foam · meringue shards", price: "₹550", veg: true },
      { name: "French Toast", desc: "Orange pound cake · cream cheese", price: "₹400", veg: true },
      { name: "Corn Ice Cream", desc: "Amaranth", price: "₹225", veg: true },
      { name: "Banana Ice Cream", desc: "Candied walnut", price: "₹225", veg: true },
      { name: "Brown Sugar Ice Cream", price: "₹225", veg: true },
    ],
  },
  {
    title: "Signature Cocktails",
    kicker: "The Bar",
    items: [
      { name: "Salt & Pepper", desc: "Three-pepper gin · bitter bianco · dry vermouth · brine", price: "₹895", veg: true },
      { name: "Cheese", desc: "Skyy vodka · Gruyère · lapsang souchong · apple", price: "₹895", veg: true },
      { name: "Peanut", desc: "Templeton rye · peanut butter · maraschino", price: "₹995", veg: true },
      { name: "Coconut", desc: "Camikara rum · toasted coconut · kaffir lime ferment · guava acid", price: "₹895", veg: true },
      { name: "Coffee", desc: "1800 tequila · cocoa butter · vermouth · Attikan estate coffee · Campari", price: "₹1195", veg: true },
      { name: "Monchito", desc: "Camikara rum · toasted coconut · butterscotch · pineapple sorbet · coconut cream", price: "₹895", veg: true },
      { name: "Carajillo 43", desc: "Skyy vodka · Licor 43 · espresso", price: "₹895", veg: true },
      { name: "Vesper", desc: "Tanqueray gin · Skyy vodka · dry vermouth", price: "₹995", veg: true },
      { name: "Picante de la Casa", desc: "1800 tequila · coriander · serrano chilli · agave · tajín", price: "₹1195", veg: true },
      { name: "High Tea", desc: "Camikara rum · coconut water · sencha · tropical fruit soda", price: "₹895", veg: true },
      { name: "Manhattan", desc: "Templeton rye · Cocchi vermouth · bitters", price: "₹1195", veg: true },
      { name: "Weeds", desc: "Tanqueray gin · seaweed · dry vermouth · brine", price: "₹995", veg: true },
    ],
  },
  {
    title: "Ferments & House Brews",
    kicker: "Zero Proof · 0% ABV",
    items: [
      { name: "Kombucha", desc: "Hojicha · fresh ginger", price: "₹425", veg: true },
      { name: "Sencha", desc: "Coconut water · tropical fruit soda", price: "₹395", veg: true },
      { name: "Mango", desc: "Passion fruit · kaffir lime ferment", price: "₹395", veg: true },
    ],
  },
];

export const BUTTERS: MenuItem[] = [];

// Live Instagram post embeds. Paste 4–6 real post/reel permalinks
// (e.g. "https://www.instagram.com/p/ABC123/" or "/reel/ABC123/").
// When empty, the site falls back to the curated photo tiles.
export const INSTA_POSTS: string[] = [];

// Press quotes — verbatim phrases from published coverage of Brine, attributed.
export type Review = { text: string; who: string };
export const REVIEWS: Review[] = [
  {
    text: "Brutalism-inspired concrete minimalism, industrial loft-like openness, glass cubes, warm, atmospheric lighting.",
    who: "Homegrown",
  },
  {
    text: "The cocktail menu is a bit adventurous — a vodka and lapsang souchong drink with hints of nutty Gruyère.",
    who: "The Nod Mag",
  },
  {
    text: "The cocktail programme experiments with savoury, smoky, saline, and umami flavours.",
    who: "Homegrown",
  },
];

// "Follow, find & book" cards.
export const CHANNELS = [
  { name: "Instagram", desc: "New dishes & the day's specials", href: "https://www.instagram.com/brine_blr/", cta: "Follow @brine_blr" },
  { name: "District", desc: "Reserve your table", href: "https://www.district.in/dining/bangalore/brine-indiranagar-bangalore", cta: "Book on District" },
  { name: "Dineout", desc: "Reserve your table", href: "https://www.dineout.co.in/bangalore-restaurants?search_str=brine%20indiranagar", cta: "Book on Dineout" },
];
