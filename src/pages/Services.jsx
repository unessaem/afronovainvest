import { useI18n } from '../i18n/LanguageContext'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { Sprout, Flask, Ship, Check } from '../components/Icons'
import { photoImg } from '../data/images'

const PHOTOS = { s1: 'growers.jpg', s2: 'packing.jpg', s3: 'chili-crate.jpg' }
const ICONS = { s1: Sprout, s2: Flask, s3: Ship }

export default function Services() {
  const { t } = useI18n()
  const keys = ['s1', 's2', 's3']

  return (
    <>
      <PageHero eyebrow={t('services.eyebrow')} title={t('services.title')} subtitle={t('services.intro')} />

      {keys.map((key, i) => {
        const Icon = ICONS[key]
        const reversed = i % 2 === 1
        return (
          <section className={`section ${reversed ? 'section--sand' : ''}`} key={key}>
            <div className="container split">
              <div style={{ order: reversed ? 2 : 1 }}>
                <div className="icon-badge icon-badge--green"><Icon width={22} height={22} /></div>
                <h2>{t(`services.${key}.title`)}</h2>
                <p className="lead">{t(`services.${key}.short`)}</p>
                <ul className="checklist mt-32">
                  {t(`services.${key}.points`).map((p) => (
                    <li key={p}><Check width={19} height={19} />{p}</li>
                  ))}
                </ul>
              </div>
              <div className="split__media" style={{ order: reversed ? 1 : 2 }}>
                <img src={photoImg(PHOTOS[key])} alt="" loading="lazy" />
              </div>
            </div>
          </section>
        )
      })}

      <CtaBanner />
    </>
  )
}
