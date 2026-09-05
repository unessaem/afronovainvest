export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="pagehero">
      <div className="container">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
