import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/collections/shop-all")({
  head: () => ({
    meta: [
      { title: "Shop All Perfumes | SARKAR" },
      {
        name: "description",
        content:
          "Shop the full SARKAR parfum collection — Throne, Regal, Noble, Orion and the new Vanilla. 100ml unisex parfums in iconic chess-king bottles.",
      },
      { property: "og:title", content: "Shop All Perfumes | SARKAR" },
      {
        property: "og:description",
        content: "Five long-lasting unisex parfums, now including the new SARKAR Vanilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopAll,
});

function ShopAll() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="px-4 py-14">
        <h1 className="mb-10 text-center text-4xl uppercase sm:text-6xl">Shop The Collection</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}