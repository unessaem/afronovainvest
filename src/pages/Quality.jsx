import { useI18n } from '../i18n/LanguageContext'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import ProcessSteps from '../components/ProcessSteps'
import { Check, Flask, Shield, Doc } from '../components/Icons'
import { photoImg } from '../data/images'

export default function Quality() {
  const { t } = useI18n()

  return (
    <>
      <PageHero eyebrow={t('quality.eyebrow')} title={t('quality.title')} />

      <section className="section">
        <div className="container split">
          <div>
            <p className="lead">{t('quality.p1')}</p>
            <ul className="checklist mt-32">
              {t('quality.points').map((p) => (
                <li key={p}><Check width={19} height={19} />{p}</li>
              ))}
            </ul>
            <p style={{ marginTop: 28 }}>{t('quality.p2')}</p>
          </div>
          <div className="split__media">
            <img src={photoImg('greenbeans-market.jpg')} alt="" />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container grid grid-3">
          <article className="card">
            <div className="icon-badge icon-badge--green"><Flask width={22} height={22} /></div>
            <h3>{t('services.s2.title')}</h3>
            <p>{t('services.s2.short')}</p>
          </article>
          <article className="card">
            <div className="icon-badge"><Shield width={22} height={22} /></div>
            <h3>{t('hero.pills.reliability')}</h3>
            <p>{t('why.message')}</p>
          </article>
          <article className="card">
            <div className="icon-badge"><Doc width={22} height={22} /></div>
            <h3>{t('services.s3.title')}</h3>
            <p>{t('services.s3.short')}</p>
          </article>
        </div>
      </section>

      <ProcessSteps />
      <CtaBanner />
    </>
  )
}
