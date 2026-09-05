import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import { ArrowRight, Mail } from './Icons'
import { photoImg } from '../data/images'

export default function CtaBanner() {
  const { t } = useI18n()
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta">
          <img src={photoImg('beans-field.jpg')} alt="" aria-hidden="true" />
          <div>
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.text')}</p>
          </div>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--green">
              {t('hero.cta2')} <Mail width={17} height={17} />
            </Link>
            <Link to="/products" className="btn btn--onDark">
              {t('cat.all')} <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
