import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { inr, products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Parfum"} | SARKAR` },
      { name: "description", content: loaderData?.story ?? "SARKAR luxury parfum." },
      { property: "og:title", content: `${loaderData?.name ?? "Parfum"} | SARKAR` },
      { property: "og:description", content: loaderData?.story ?? "SARKAR luxury parfum." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-2">
          <img
            src={product.img}
            alt={product.name}
            width={900}
            height={1100}
            className="w-full bg-secondary object-contain"
          />
          <div className="lg:pt-10">
            <h1 className="text-4xl uppercase sm:text-5xl">{product.name}</h1>
            <p className="mt-3 text-sm tracking-widest text-muted-foreground">{product.notes}</p>
            <p className="mt-6 text-2xl font-semibold">{inr(product.price)}</p>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{product.story}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="bg-secondary px-3 py-1 text-[10px] tracking-widest">
                  {t}
                </span>
              ))}
            </div>
            <button className="mt-8 w-full bg-primary px-8 py-4 text-sm font-bold tracking-widest text-primary-foreground sm:w-auto">
              ADD TO CART
            </button>
            <Link
              to="/pages/build-your-own-bundle"
              className="mt-4 block text-sm underline underline-offset-4"
            >
              Or build your own bundle and save up to ₹1800
            </Link>
          </div>
        </div>

        <section className="px-4 pb-16">
          <h2 className="mb-8 text-center text-3xl uppercase sm:text-4xl">You May Also Like</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}