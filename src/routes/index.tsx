import { createFileRoute } from "@tanstack/react-router";
import { Menu, ShoppingCart, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

import hero from "@/assets/hero.jpg";
import throne from "@/assets/throne.jpg";
import regal from "@/assets/regal.jpg";
import noble from "@/assets/noble.jpg";
import orion from "@/assets/orion.jpg";
import vanilla from "@/assets/vanilla.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SARKAR — Luxury Chess-Piece Perfumes | Shop The Collection" },
      {
        name: "description",
        content:
          "SARKAR crafts long-lasting luxury parfums in iconic chess-king bottles. Shop Throne, Regal, Noble, Orion and the new Vanilla — 100ml, unisex.",
      },
      { property: "og:title", content: "SARKAR — Luxury Chess-Piece Perfumes" },
      {
        property: "og:description",
        content:
          "Five scents. One crown. Shop the SARKAR parfum collection, now with the new Vanilla edition.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "THRONE (100ML)", img: throne, tags: ["LEATHER", "UNISEX", "PARFUM"], price: "₹2,499" },
  { name: "REGAL (100ML)", img: regal, tags: ["OUD", "UNISEX", "PARFUM"], price: "₹1,499" },
  { name: "NOBLE (100ML)", img: noble, tags: ["CITRUS", "UNISEX", "PARFUM"], price: "₹1,499" },
  { name: "ORION (100ML)", img: orion, tags: ["FRESH", "UNISEX", "PARFUM"], price: "₹1,499" },
  { name: "VANILLA (100ML)", img: vanilla, tags: ["VANILLA", "UNISEX", "PARFUM"], price: "₹5,500", isNew: true },
];

const bundle = [
  { name: "THRONE (100ML)", notes: "WARM · LEATHER · AMBER", img: throne },
  { name: "REGAL (100ML)", notes: "OUD · SMOKY · MUSK", img: regal },
  { name: "NOBLE (100ML)", notes: "FRESH · WOODY · AROMATIC", img: noble },
  { name: "ORION (100ML)", notes: "FRESH · CITRUS · AROMATIC", img: orion },
  { name: "VANILLA (100ML)", notes: "VANILLA · CREAMY · TONKA", img: vanilla },
];

function Index() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-ink py-2 text-center text-[11px] font-semibold tracking-[0.18em] text-ink-foreground">
        CLAIM TWO 7ML FREEBIES WITH EVERY ORDER
      </div>

      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background px-5 py-4">
        <button aria-label="Open menu" className="text-foreground">
          <Menu className="h-7 w-7" strokeWidth={2.5} />
        </button>
        <a href="/" className="font-display text-2xl font-medium tracking-[0.35em] sm:text-3xl">
          SARKAR
        </a>
        <div className="flex items-center gap-4">
          <a
            href="#collection"
            className="hidden bg-primary px-5 py-2 text-sm font-bold text-primary-foreground sm:inline-block"
          >
            Buy Now
          </a>
          <ShoppingCart className="h-7 w-7" strokeWidth={1.8} />
        </div>
      </header>

      <section className="relative">
        <img
          src={hero}
          alt="SARKAR chess-king perfume bottles on dark stone"
          width={1920}
          height={1088}
          className="h-[62vh] w-full object-cover sm:h-[78vh]"
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">NEW ARRIVAL</p>
        <h1 className="mt-4 text-4xl uppercase sm:text-6xl">Vanilla. The Softest Power Move.</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Creamy Madagascan vanilla, tonka bean and warm amber — the fifth king joins the SARKAR
          board. Long-lasting parfum concentration, 100ml, unisex.
        </p>
        <a
          href="#collection"
          className="mt-8 inline-block bg-primary px-8 py-4 text-sm font-bold tracking-widest text-primary-foreground"
        >
          SHOP VANILLA
        </a>
      </section>

      <section id="collection" className="px-4 pb-20">
        <h2 className="mb-10 text-center text-4xl uppercase sm:text-6xl">Shop The Collection</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((p) => (
            <article key={p.name} className="border border-border p-4 text-center">
              <div className="relative bg-secondary">
                {p.isNew && (
                  <span className="absolute left-3 top-3 bg-primary px-2 py-1 text-[10px] font-bold tracking-widest text-primary-foreground">
                    NEW
                  </span>
                )}
                <img
                  src={p.img}
                  alt={p.name}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="mx-auto h-72 w-full object-contain"
                />
              </div>
              <h3 className="mt-6 text-lg uppercase">{p.name}</h3>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="bg-secondary px-3 py-1 text-[10px] tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-semibold">{p.price}</p>
              <button className="mt-4 w-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">
                Add To Cart
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-ink-foreground">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl uppercase sm:text-6xl">
            Build Your Own
            <br />
            Bundle
          </h2>
          <dl className="mt-12 max-w-md">
            {[
              ["BUY 2", "SAVE ₹599"],
              ["BUY 3", "SAVE ₹998"],
              ["BUY 4", "SAVE ₹1800"],
            ].map(([a, b]) => (
              <div key={a} className="flex justify-between border-b border-ink-foreground/25 py-4">
                <dt className="text-lg tracking-wide">{a}</dt>
                <dd className="text-lg font-bold">{b}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-4 py-20">
        <p className="mb-10 text-center text-2xl sm:text-3xl">Five scents. All yours to choose.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {bundle.map((p) => (
            <article key={p.name} className="border border-border p-6 text-center">
              <img
                src={p.img}
                alt={p.name}
                width={900}
                height={1100}
                loading="lazy"
                className="mx-auto h-64 w-full bg-secondary object-contain"
              />
              <h3 className="mt-6 text-lg uppercase">{p.name}</h3>
              <p className="mt-2 text-xs tracking-widest text-muted-foreground">{p.notes}</p>
              <button className="mt-5 w-full bg-primary px-4 py-3 text-sm font-bold tracking-widest text-primary-foreground">
                ADD TO BUNDLE
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 text-center">
        <h2 className="text-5xl uppercase sm:text-8xl">The One &amp; Only</h2>
      </section>

      <footer className="border-t border-border px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <form className="flex items-center gap-3 border-b border-foreground pb-2" onSubmit={(e) => e.preventDefault()}>
            <input
              aria-label="Email"
              placeholder="ENTER EMAIL"
              className="w-full bg-transparent text-sm tracking-widest outline-none"
            />
            <button aria-label="Subscribe">
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
          {[
            ["FRAGRANCES", ["Throne", "Regal", "Noble", "Orion", "Vanilla"]],
            ["COMPANY", ["Know Sarkar", "Blogs", "Careers"]],
            ["POLICY", ["Shipping", "Returns", "Privacy"]],
            ["CONTACT US", ["care@sarkar.store", "+91 00000 00000"]],
          ].map(([title, items]) => (
            <div key={title as string}>
              <h3 className="border-b border-foreground pb-1 text-sm tracking-widest">{title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {(items as string[]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl gap-5 text-foreground">
          <Instagram className="h-5 w-5" />
          <Facebook className="h-5 w-5" />
          <Youtube className="h-5 w-5" />
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 bg-ink text-ink-foreground">
        <p className="py-2 text-center text-sm font-bold tracking-widest">BUILD YOUR OWN BUNDLE</p>
        <div className="flex items-center justify-between border-t border-ink-foreground/20 px-5 py-3">
          <div>
            <p className="text-lg font-bold">PACK OF 2</p>
            <p className="text-xs tracking-widest">TOTAL: ₹0</p>
          </div>
          <button className="bg-ink-foreground px-8 py-3 text-sm font-bold tracking-widest text-ink">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}