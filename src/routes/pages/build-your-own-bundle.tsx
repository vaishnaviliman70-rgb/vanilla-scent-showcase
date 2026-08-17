import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { inr, products } from "@/lib/products";
import bundleHero from "@/assets/bundle-hero.jpg";

export const Route = createFileRoute("/pages/build-your-own-bundle")({
  head: () => ({
    meta: [
      { title: "Build Your Own Perfume Bundle | SARKAR" },
      {
        name: "description",
        content:
          "Mix and match SARKAR parfums — buy 2 save ₹599, buy 3 save ₹998, buy 4 save ₹1800. Now including the new Vanilla 100ml.",
      },
      { property: "og:title", content: "Build Your Own Perfume Bundle | SARKAR" },
      {
        property: "og:description",
        content: "Five scents. All yours to choose. Save up to ₹1800 on SARKAR bundles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BundlePage,
});

const SAVINGS: Record<number, number> = { 2: 599, 3: 998, 4: 1800 };

function BundlePage() {
  const [pack, setPack] = useState(2);
  const [picked, setPicked] = useState<string[]>([]);

  const total = useMemo(() => {
    const sum = picked.reduce(
      (acc, slug) => acc + (products.find((p) => p.slug === slug)?.price ?? 0),
      0,
    );
    return picked.length === pack ? Math.max(sum - (SAVINGS[pack] ?? 0), 0) : sum;
  }, [picked, pack]);

  const add = (slug: string) =>
    setPicked((prev) => (prev.length >= pack ? prev : [...prev, slug]));

  return (
    <div className="min-h-screen bg-background pb-28">
      <SiteHeader />
      <main>
        <section className="relative">
          <img
            src={bundleHero}
            alt="SARKAR bundle of five parfums"
            width={1920}
            height={1088}
            className="h-[70vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center bg-ink/45 px-6 sm:px-16">
            <div className="text-ink-foreground">
              <h1 className="text-4xl uppercase sm:text-6xl">
                Build Your Own
                <br />
                Bundle
              </h1>
              <dl className="mt-12 w-full max-w-md">
                {Object.entries(SAVINGS).map(([n, s]) => (
                  <div
                    key={n}
                    className="flex justify-between border-b border-ink-foreground/30 py-4"
                  >
                    <dt className="text-lg tracking-wide">BUY {n}</dt>
                    <dd className="text-lg font-bold">SAVE ₹{s}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <p className="mb-10 text-center text-2xl sm:text-3xl">Five scents. All yours to choose.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((p) => {
              const count = picked.filter((s) => s === p.slug).length;
              return (
                <article key={p.slug} className="border border-border p-6 text-center">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="mx-auto h-64 w-full bg-secondary object-contain"
                  />
                  <h2 className="mt-6 text-lg uppercase">{p.name}</h2>
                  <p className="mt-2 text-xs tracking-widest text-muted-foreground">{p.notes}</p>
                  <button
                    onClick={() => add(p.slug)}
                    disabled={picked.length >= pack}
                    className="mt-5 w-full bg-primary px-4 py-3 text-sm font-bold tracking-widest text-primary-foreground disabled:opacity-40"
                  >
                    ADD TO BUNDLE{count > 0 ? ` (${count})` : ""}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-50 bg-ink text-ink-foreground">
        <p className="py-2 text-center text-sm font-bold tracking-widest">BUILD YOUR OWN BUNDLE</p>
        <div className="flex items-center justify-between border-t border-ink-foreground/20 px-5 py-3">
          <div>
            <select
              aria-label="Pack size"
              value={pack}
              onChange={(e) => {
                setPack(Number(e.target.value));
                setPicked([]);
              }}
              className="bg-transparent text-lg font-bold outline-none"
            >
              {[2, 3, 4].map((n) => (
                <option key={n} value={n} className="text-foreground">
                  PACK OF {n}
                </option>
              ))}
            </select>
            <p className="text-xs tracking-widest">TOTAL: {inr(total)}</p>
          </div>
          <button
            disabled={picked.length !== pack}
            className="bg-ink-foreground px-8 py-3 text-sm font-bold tracking-widest text-ink disabled:opacity-40"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}