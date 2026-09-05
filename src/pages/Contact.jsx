import { useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import PageHero from '../components/PageHero'
import site from '../data/site'
import categories from '../data/categories'
import { Mail, Phone, Pin, Clock, LinkedIn } from '../components/Icons'

/**
 * The form has no backend: it composes a pre-filled email (mailto:).
 * To collect submissions server-side instead, point `onSubmit` at your
 * endpoint (Formspree, Web3Forms, an API route…) and remove the mailto call.
 */
export default function Contact() {
  const { t, tf } = useI18n()
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const [draft, setDraft] = useState({ mailto: '', whatsapp: '', text: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const get = (k) => (f.get(k) || '').toString().trim()

    const text = [
      `Name: ${get('name')}`,
      `Company: ${get('company')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      `Country: ${get('country')}`,
      `Product: ${get('product')}`,
      '',
      get('message')
    ].join('\n')

    const subject = `Sourcing inquiry — ${get('company') || get('name')}`
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`
    const whatsapp = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`${subject}\n\n${text}`)}`

    setDraft({ mailto, whatsapp, text })
    setSent(true)
    setCopied(false)

    // Opening the mail client through a real anchor click is far more reliable
    // than assigning window.location (works inside sandboxed iframes too).
    const a = document.createElement('a')
    a.href = mailto
    a.rel = 'noreferrer noopener'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${site.email}\n\n${draft.text}`)
      setCopied(true)
    } catch (err) {
      setCopied(false)
    }
  }

  return (
    <>
      <PageHero eyebrow={t('nav.contact')} title={t('contact.hero')} subtitle={t('contact.heroSub')} />

      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div>
            <h2>{t('contact.formTitle')}</h2>
            <form className="form mt-32" onSubmit={onSubmit}>
              {sent && (
                <div className="alert">
                  <p style={{ margin: 0 }}>{t('contact.sent')}</p>
                  <p style={{ margin: '10px 0 0', fontWeight: 600 }}>{t('contact.fallback')}</p>
                  <div className="alert__actions">
                    <a className="btn btn--primary btn--sm" href={draft.mailto}>
                      <Mail width={15} height={15} /> {t('contact.openMail')}
                    </a>
                    <a className="btn btn--green btn--sm" href={draft.whatsapp} target="_blank" rel="noreferrer noopener">
                      {t('contact.orWhatsapp')}
                    </a>
                    <button className="btn btn--ghost btn--sm" type="button" onClick={copy}>
                      {copied ? t('contact.copied') : t('contact.copy')}
                    </button>
                  </div>
                  <p style={{ margin: '12px 0 0', fontSize: '.85rem' }}>
                    {t('contact.orDirect')}{' '}
                    <a href={`mailto:${site.email}`} style={{ fontWeight: 700, textDecoration: 'underline' }}>
                      {site.email}
                    </a>
                  </p>
                </div>
              )}

              <div className="field">
                <label htmlFor="name">{t('contact.name')}</label>
                <input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="company">{t('contact.company')}</label>
                <input id="company" name="company" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="email">{t('contact.email')}</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="phone">{t('contact.phone')}</label>
                <input id="phone" name="phone" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="country">{t('contact.country')}</label>
                <input id="country" name="country" autoComplete="country-name" />
              </div>
              <div className="field">
                <label htmlFor="product">{t('contact.product')}</label>
                <select id="product" name="product" defaultValue="">
                  <option value="" disabled>—</option>
                  {categories.map((c) => (
                    <option key={c.key} value={tf(c.name)}>{tf(c.name)}</option>
                  ))}
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea id="message" name="message" required />
              </div>
              <div className="field--full">
                <button className="btn btn--primary" type="submit">
                  {t('contact.send')} <Mail width={17} height={17} />
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2>{t('contact.infoTitle')}</h2>
            <ul className="contact-info mt-32">
              <li>
                <Mail />
                <div>
                  <b><a href={`mailto:${site.email}`}>{site.email}</a></b>
                  <span>{t('contact.formTitle')}</span>
                </div>
              </li>
              <li>
                <Phone />
                <div>
                  <b><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></b>
                  <span>WhatsApp: <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer noopener">{site.whatsapp}</a></span>
                </div>
              </li>
              <li>
                <Pin />
                <div>
                  <b>{site.addressLines[0]}</b>
                  <span>{site.addressLines.slice(1).join(', ')}</span>
                </div>
              </li>
              <li>
                <Clock />
                <div>
                  <b>{t('contact.hours')}</b>
                </div>
              </li>
              <li>
                <LinkedIn />
                <div>
                  <b><a href={site.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a></b>
                  <span>{site.name}</span>
                </div>
              </li>
            </ul>

            <h3 style={{ marginTop: 36 }}>{t('contact.mapTitle')}</h3>
            <div className="map">
              <iframe
                title="Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
