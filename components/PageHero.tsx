import Link from "next/link";

export function PageHero({ eyebrow, title, intro, image, cta }: { eyebrow: string; title: string; intro: string; image?: string; cta?: string }) {
  return (
    <section className="page-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(5,20,38,.9), rgba(5,20,38,.25)), url(${image})` } : undefined}>
      <div className="container narrow"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>{cta && <Link className="button button-light" href="/valoracion">{cta}</Link>}</div>
    </section>
  );
}
