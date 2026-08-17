import throne from "@/assets/throne.jpg";
import regal from "@/assets/regal.jpg";
import noble from "@/assets/noble.jpg";
import orion from "@/assets/orion.jpg";
import vanilla from "@/assets/vanilla.jpg";

export type Product = {
  slug: string;
  name: string;
  img: string;
  tags: string[];
  notes: string;
  price: number;
  isNew?: boolean;
  story: string;
};

export const products: Product[] = [
  {
    slug: "throne",
    name: "THRONE (100ML)",
    img: throne,
    tags: ["LEATHER", "UNISEX", "PARFUM"],
    notes: "WARM · LEATHER · AMBER",
    price: 2499,
    story:
      "Polished leather, dark amber and a whisper of smoke. Throne is the scent of the seat everyone wants.",
  },
  {
    slug: "regal",
    name: "REGAL (100ML)",
    img: regal,
    tags: ["OUD", "UNISEX", "PARFUM"],
    notes: "OUD · SMOKY · MUSK",
    price: 1499,
    story: "Oud, smoke and musk built for long nights and longer memories.",
  },
  {
    slug: "noble",
    name: "NOBLE (100ML)",
    img: noble,
    tags: ["CITRUS", "UNISEX", "PARFUM"],
    notes: "FRESH · WOODY · AROMATIC",
    price: 1499,
    story: "Bright citrus opening that dries down into warm woods. Quietly commanding.",
  },
  {
    slug: "orion",
    name: "ORION (100ML)",
    img: orion,
    tags: ["FRESH", "UNISEX", "PARFUM"],
    notes: "FRESH · CITRUS · AROMATIC",
    price: 1499,
    story: "Cool, aromatic and endless — a clear night sky in parfum concentration.",
  },
  {
    slug: "vanilla",
    name: "VANILLA (100ML)",
    img: vanilla,
    tags: ["VANILLA", "UNISEX", "PARFUM"],
    notes: "VANILLA · CREAMY · TONKA",
    price: 1499,
    isNew: true,
    story:
      "Madagascan vanilla, tonka bean and soft amber. The newest king on the board — the softest power move.",
  },
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;