import { useI18n } from '../i18n/LanguageContext'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import ProcessSteps from '../components/ProcessSteps'
import { Sprout, Globe, Users, Award } from '../components/Icons'
import { photoImg } from '../data/images'

export default function About() {
  const { t } = useI18n()

  const blocks = [
    { key: 'approach', Icon: Sprout },
    { key: 'expertise', Icon: Users },
    { key: 'partnership', Icon: Award }
  ]

  return (
    <>
      <PageHero eyebrow={t('who.eyebrow')} title={t('about.hero')} subtitle={t('about.heroSub')} />

      <section className="section">
        <div className="container split">
          <div>
            <h2>{t('about.overview')}</h2>
            <p>{t('about.overviewText')}</p>
            <p>{t('who.p3')}</p>
          </div>
          <div className="split__media">
            <img src={photoImg('packing.jpg')} alt="" />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container grid grid-2">
          <article className="card">
            <div className="icon-badge icon-badge--green"><Sprout width={22} height={22} /></div>
            <h3>{t('about.missionTitle')}</h3>
            <p>{t('about.missionText')}</p>
          </article>
          <article className="card">
            <div className="icon-badge"><Globe width={22} height={22} /></div>
            <h3>{t('about.visionTitle')}</h3>
            <p>{t('about.visionText')}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {blocks.map(({ key, Icon }) => (
              <article className="card" key={key}>
                <div className="icon-badge"><Icon width={22} height={22} /></div>
                <h3>{t(`about.${key}Title`)}</h3>
                <p>{t(`about.${key}Text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* NETWORK */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">{t('network.eyebrow')}</div>
            <h2>{t('network.title')}</h2>
            <p className="lead">{t('network.message')}</p>
          </div>
          <div className="grid grid-2">
            <article className="card">
              <h3>{t('network.moroccoTitle')}</h3>
              <ul className="checklist">
                {t('network.morocco').map((m) => <li key={m}><Sprout width={18} height={18} />{m}</li>)}
              </ul>
            </article>
            <article className="card">
              <h3>{t('network.marketsTitle')}</h3>
              <ul className="checklist">
                {t('network.markets').map((m) => <li key={m}><Globe width={18} height={18} />{m}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
