import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/pages/know-sarkar")({
  head: () => ({
    meta: [
      { title: "Know SARKAR | The Story Behind The Crown" },
      {
        name: "description",
        content:
          "SARKAR builds long-lasting Indian parfums in iconic chess-king bottles. Learn the story behind Throne, Regal, Noble, Orion and Vanilla.",
      },
      { property: "og:title", content: "Know SARKAR" },
      {
        property: "og:description",
        content: "The story behind SARKAR's chess-king parfum bottles and its five signature scents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KnowSarkar,
});

function KnowSarkar() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <img
          src={hero}
          alt="SARKAR parfum bottles"
          width={1920}
          height={1088}
          className="h-[45vh] w-full object-cover"
        />
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-4xl uppercase sm:text-6xl">Know Sarkar</h1>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            SARKAR was built on one idea: presence should be felt before it is announced. Every
            bottle is shaped like a king — the piece that decides the game without ever rushing the
            board.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Our parfums are blended at high concentration and filled in India, made to hold through
            long days, longer nights and everything you walk into. Five scents, one crown: Throne,
            Regal, Noble, Orion and the newest addition, Vanilla.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              ["PARFUM STRENGTH", "High-concentration oils for 10+ hours of wear."],
              ["CRUELTY FREE", "Never tested on animals. Vegan-friendly blends."],
              ["MADE IN INDIA", "Blended, filled and shipped from our own facility."],
            ].map(([t, d]) => (
              <div key={t}>
                <h2 className="text-sm tracking-widest">{t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}