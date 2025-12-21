interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
      </div>
    </section>
  );
}
