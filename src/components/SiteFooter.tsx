import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <h2 className="mb-14 text-center text-5xl uppercase sm:text-8xl">The One &amp; Only</h2>
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <form
          className="flex h-fit items-center gap-3 border-b border-foreground pb-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            aria-label="Email"
            placeholder="ENTER EMAIL"
            className="w-full bg-transparent text-sm tracking-widest outline-none"
          />
          <button aria-label="Subscribe">
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
        <div>
          <h3 className="border-b border-foreground pb-1 text-sm tracking-widest">FRAGRANCES</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["throne", "regal", "noble", "orion", "vanilla"].map((s) => (
              <li key={s}>
                <Link to="/products/$slug" params={{ slug: s }} className="uppercase">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="border-b border-foreground pb-1 text-sm tracking-widest">COMPANY</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/pages/know-sarkar">Know Sarkar</Link>
            </li>
            <li>
              <Link to="/pages/build-your-own-bundle">Build Your Own Bundle</Link>
            </li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="border-b border-foreground pb-1 text-sm tracking-widest">POLICY</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Shipping</li>
            <li>Returns &amp; Refunds</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h3 className="border-b border-foreground pb-1 text-sm tracking-widest">CONTACT US</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>care@sarkar.store</li>
            <li>+91 00000 00000</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl items-center gap-5">
        <Twitter className="h-5 w-5" />
        <Facebook className="h-5 w-5" />
        <Instagram className="h-5 w-5" />
        <Youtube className="h-5 w-5" />
      </div>
    </footer>
  );
}