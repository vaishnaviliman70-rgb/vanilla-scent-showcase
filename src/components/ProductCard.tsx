import { Link } from "@tanstack/react-router";
import { inr, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="border border-border p-4 text-center">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative bg-secondary">
          {product.isNew && (
            <span className="absolute left-3 top-3 bg-primary px-2 py-1 text-[10px] font-bold tracking-widest text-primary-foreground">
              NEW
            </span>
          )}
          <img
            src={product.img}
            alt={product.name}
            width={900}
            height={1100}
            loading="lazy"
            className="mx-auto h-72 w-full object-contain"
          />
        </div>
        <h3 className="mt-6 text-lg uppercase underline-offset-4 hover:underline">{product.name}</h3>
      </Link>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {product.tags.map((t) => (
          <span key={t} className="bg-secondary px-3 py-1 text-[10px] tracking-widest">
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 font-semibold">{inr(product.price)}</p>
      <button className="mt-4 w-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">
        Add To Cart
      </button>
    </article>
  );
}