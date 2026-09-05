import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <section className="section">
      <div className="container center" style={{ padding: '80px 0' }}>
        <h1>404</h1>
        <p className="lead center">{t('common.notFound')}</p>
        <Link to="/" className="btn btn--primary mt-32">{t('common.backHome')}</Link>
      </div>
    </section>
  )
}
