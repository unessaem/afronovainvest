import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import { ArrowRight, Phone, Mail } from './Icons'
import { logo } from '../data/images'
import site from '../data/site'

export default function Header() {
  const { t, lang, setLang, languages } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  const links = [
    { to: '/', key: 'home', end: true },
    { to: '/about', key: 'about' },
    { to: '/services', key: 'services' },
    { to: '/products', key: 'products' },
    { to: '/quality', key: 'quality' },
    { to: '/contact', key: 'contact' }
  ]

  return (
    <>
    <div className="topbar">
      <div className="container topbar__inner">
        <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
          <Phone width={15} height={15} /> {site.phone}
        </a>
        <a href={`mailto:${site.email}`}>
          <Mail width={15} height={15} /> {site.email}
        </a>
        <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer noopener">
          WhatsApp
        </a>
      </div>
    </div>
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label="AFRONOVA INVEST">
          <img src={logo} alt="AFRONOVA INVEST" />
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`} id="main-nav">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary btn--sm">
            {t('nav.inquiry')} <ArrowRight />
          </Link>
        </nav>

        <div className="langs" role="group" aria-label="Language">
          {languages.map((l) => (
            <button key={l.code} type="button" aria-pressed={lang === l.code}
              onClick={() => setLang(l.code)} title={l.name}>
              {l.label}
            </button>
          ))}
        </div>

        <button className="burger" type="button" aria-label="Menu" aria-expanded={open}
          aria-controls="main-nav" onClick={() => setOpen((v) => !v)}>
          <span />
        </button>
      </div>
    </header>
    </>
  )
}
