import { Link } from "@tanstack/react-router";
import { Menu, ShoppingCart, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [fragOpen, setFragOpen] = useState(false);

  return (
    <>
      <div className="bg-ink py-2 text-center text-[11px] font-semibold tracking-[0.18em] text-ink-foreground">
        CLAIM TWO 7ML FREEBIES WITH EVERY ORDER
      </div>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background px-5 py-4">
        <button aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu className="h-7 w-7" strokeWidth={2.5} />
        </button>
        <Link to="/" className="text-2xl font-medium tracking-[0.35em] sm:text-3xl">
          SARKAR
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/collections/shop-all"
            className="hidden bg-primary px-5 py-2 text-sm font-bold text-primary-foreground sm:inline-block"
          >
            Buy Now
          </Link>
          <ShoppingCart className="h-7 w-7" strokeWidth={1.8} />
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <nav className="flex h-full w-full max-w-md flex-col bg-background">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-7 w-7" strokeWidth={2.5} />
              </button>
              <span className="text-xl tracking-[0.35em]">SARKAR</span>
              <span className="w-7" />
            </div>
            <div className="flex-1 overflow-y-auto">
              <Link
                to="/collections/shop-all"
                onClick={() => setOpen(false)}
                className="block bg-secondary px-6 py-5 text-lg font-semibold tracking-wide"
              >
                SHOP ALL
              </Link>
              <button
                onClick={() => setFragOpen((v) => !v)}
                className="flex w-full items-center justify-between px-6 py-5 text-lg font-semibold tracking-wide"
              >
                FRAGRANCES <ChevronDown className="h-5 w-5" />
              </button>
              {fragOpen && (
                <div className="pb-2">
                  {["throne", "regal", "noble", "orion", "vanilla"].map((s) => (
                    <Link
                      key={s}
                      to="/products/$slug"
                      params={{ slug: s }}
                      onClick={() => setOpen(false)}
                      className="block px-10 py-3 text-sm uppercase tracking-widest text-muted-foreground"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                to="/pages/build-your-own-bundle"
                onClick={() => setOpen(false)}
                className="block px-6 py-5 text-lg font-semibold tracking-wide"
              >
                BUILD YOUR OWN BUNDLE
              </Link>
              <Link
                to="/pages/know-sarkar"
                onClick={() => setOpen(false)}
                className="block px-6 py-5 text-lg font-semibold tracking-wide"
              >
                KNOW SARKAR
              </Link>
            </div>
            <div className="border-t border-border p-6">
              <div className="grid grid-cols-2 gap-4">
                <span className="border border-border py-4 text-center text-sm tracking-widest">
                  TRACK ORDER
                </span>
                <span className="border border-border py-4 text-center text-sm tracking-widest">
                  LOGIN
                </span>
              </div>
            </div>
          </nav>
          <button
            aria-label="Close menu overlay"
            className="h-full flex-1 bg-ink/60"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}