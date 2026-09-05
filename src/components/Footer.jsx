import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import site from '../data/site'
import { logoWhite } from '../data/images'
import categories from '../data/categories'
import { Mail, Phone, Pin, LinkedIn } from './Icons'

export default function Footer() {
  const { t, tf } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img className="logo" src={logoWhite} alt="AFRONOVA INVEST" />
            <p>{t('footer.tagline')}</p>
          </div>

          <div>
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/services">{t('nav.services')}</Link></li>
              <li><Link to="/quality">{t('nav.quality')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.productsCol')}</h4>
            <ul>
              {categories.map((c) => (
                <li key={c.key}>
                  <Link to={`/products?c=${c.key}`}>{tf(c.name)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t('footer.contactCol')}</h4>
            <ul className="footer__contact">
              <li><Phone width={16} height={16} /><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
              <li><Mail width={16} height={16} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><Pin width={16} height={16} /><span>{site.addressLines.join(' — ')}</span></li>
              <li>
                <LinkedIn width={16} height={16} />
                <a href={site.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {site.name}. {t('footer.rights')}</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <Link to="/contact">{t('footer.legal')}</Link>
            <Link to="/contact">{t('footer.privacy')}</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
