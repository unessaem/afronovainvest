import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import categories from '../data/categories'
import products from '../data/products'
import site from '../data/site'
import { photoImg } from '../data/images'
import ProcessSteps from '../components/ProcessSteps'
import CtaBanner from '../components/CtaBanner'
import { Shield, Eye, Award, Globe, Sprout, Flask, Ship, Check, ArrowRight } from '../components/Icons'

export default function Home() {
  const { t, tf } = useI18n()

  const serviceCards = [
    { key: 's1', Icon: Sprout },
    { key: 's2', Icon: Flask },
    { key: 's3', Icon: Ship }
  ]

  const stats = site.stats.map((s) =>
    s.key === 'categories' ? { ...s, value: `${products.length}+` } : s
  )

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <div className="eyebrow">{t('hero.eyebrow')}</div>
            <h1>
              <span>{t('hero.title1')}</span>
              <span>{t('hero.title2')}</span>
            </h1>
            <p>{t('hero.subtitle')}</p>
            <div className="hero__cta">
              <Link to="/services" className="btn btn--primary">
                {t('hero.cta1')} <ArrowRight />
              </Link>
              <Link to="/contact" className="btn btn--ghost">{t('hero.cta2')}</Link>
            </div>
            <div className="hero__pills">
              <span className="hero__pill"><Shield width={18} height={18} />{t('hero.pills.reliability')}</span>
              <span className="hero__pill"><Eye width={18} height={18} />{t('hero.pills.transparency')}</span>
              <span className="hero__pill"><Award width={18} height={18} />{t('hero.pills.quality')}</span>
              <span className="hero__pill"><Globe width={18} height={18} />{t('hero.pills.global')}</span>
            </div>
          </div>
          <div className="hero__media">
            <figure><img src={photoImg('peppers.jpg')} alt="Moroccan fresh produce" /></figure>
            <figure><img src={photoImg('citrus.jpg')} alt="" /></figure>
            <figure><img src={photoImg('pomegranate-market.jpg')} alt="" /></figure>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ WHO WE ARE */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">{t('who.eyebrow')}</div>
            <h2>{t('who.title')}</h2>
            <p>{t('who.p1')}</p>
            <p>{t('who.p2')}</p>
            <p>{t('who.p3')}</p>
            <Link to="/about" className="btn btn--primary btn--sm mt-32">
              {t('who.more')} <ArrowRight />
            </Link>
          </div>
          <div className="pillars">
            <div className="pillar">
              <img src={photoImg('growers.jpg')} alt="" />
              <span>{t('who.card1')}</span>
            </div>
            <div className="pillar">
              <img src={photoImg('packing.jpg')} alt="" />
              <span>{t('who.card2')}</span>
            </div>
            <div className="pillar">
              <img src={photoImg('cucumbers.jpg')} alt="" />
              <span>{t('who.card3')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- SERVICES */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">{t('services.eyebrow')}</div>
            <h2>{t('services.title')}</h2>
            <p className="lead">{t('services.intro')}</p>
          </div>
          <div className="grid grid-3">
            {serviceCards.map(({ key, Icon }) => (
              <article className="card" key={key}>
                <div className="icon-badge"><Icon width={22} height={22} /></div>
                <h3>{t(`services.${key}.title`)}</h3>
                <p>{t(`services.${key}.short`)}</p>
              </article>
            ))}
          </div>
          <div className="center mt-32">
            <Link to="/services" className="link-arrow">
              {t('services.seeAll')} <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="row-between section-head" style={{ maxWidth: 'none' }}>
            <div>
              <div className="eyebrow">{t('cat.eyebrow')}</div>
              <h2 className="mb-0">{t('cat.title')}</h2>
            </div>
            <Link to="/products" className="link-arrow">{t('cat.all')} <ArrowRight /></Link>
          </div>
          <p className="lead" style={{ marginTop: '-24px', marginBottom: 32 }}>{t('cat.intro')}</p>

          <div className="grid grid-3">
            {categories.map((c) => (
              <Link className="cat-card" key={c.key} to={`/products?c=${c.key}`}>
                <div className="cat-card__img">
                  <img src={photoImg(c.photo)} alt={tf(c.name)} loading="lazy" />
                </div>
                <div className="cat-card__body">
                  <h3>{tf(c.name)}</h3>
                  <p>{tf(c.desc)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- PROCESS */}
      <ProcessSteps />

      {/* ------------------------------------------------------------- WHY */}
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src={photoImg('sweet-potatoes.jpg')} alt="" />
          </div>
          <div>
            <div className="eyebrow">{t('why.eyebrow')}</div>
            <h2>{t('why.title')}</h2>
            <ul className="checklist">
              {t('why.items').map((item) => (
                <li key={item}><Check width={19} height={19} />{item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 24, fontStyle: 'italic', color: 'var(--ink-500)' }}>{t('why.message')}</p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- STATS */}
      <section className="section section--tight section--blue">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div key={s.key}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{t(`common.stats.${s.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
