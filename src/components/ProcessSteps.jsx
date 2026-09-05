import { useI18n } from '../i18n/LanguageContext'
import { Users, Shield, Flask, Box, Doc, Ship, Truck } from './Icons'

const ICONS = [Users, Shield, Flask, Box, Doc, Ship, Truck]

export default function ProcessSteps() {
  const { t } = useI18n()
  const steps = t('process.steps')

  return (
    <section className="section process">
      <div className="container">
        <div className="row-between">
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow">{t('process.eyebrow')}</div>
            <h2>{t('process.title')}</h2>
            <p className="mb-0">{t('process.message')}</p>
          </div>
        </div>

        <ol className="steps">
          {steps.map((label, i) => {
            const Icon = ICONS[i] || Users
            return (
              <li className="step" key={label}>
                <div className="step__dot"><Icon width={22} height={22} /></div>
                <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="step__label">{label}</div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
