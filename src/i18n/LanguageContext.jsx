import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import dict, { languages } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'afronova-lang'

function detectInitial() {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && languages.some((l) => l.code === saved)) return saved
  } catch (e) {
    /* storage unavailable */
  }
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase()
  return languages.some((l) => l.code === nav) ? nav : 'en'
}

/** Resolve a dotted path in the dictionary and return the value for `lang`. */
function resolve(path, lang) {
  const value = path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), dict)
  if (value == null) return path
  if (typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] ?? value.en ?? path
  }
  return value
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch (e) {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      languages,
      /** t('hero.title1') → localized string (or array) */
      t: (path) => resolve(path, lang),
      /** tf({en,fr,es}) → localized string from an inline field */
      tf: (field) => (field ? field[lang] ?? field.en : '')
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used inside <LanguageProvider>')
  return ctx
}

export default LanguageContext
