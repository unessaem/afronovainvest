import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import CtaBanner from '../components/CtaBanner'
import products from '../data/products'
import categories from '../data/categories'
import { Ship, Box } from '../components/Icons'

export default function Products() {
  const { t, tf } = useI18n()
  const [params, setParams] = useSearchParams()
  const active = params.get('c') || 'all'

  const list = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  const select = (key) => {
    if (key === 'all') setParams({})
    else setParams({ c: key })
  }

  return (
    <>
      <PageHero eyebrow={t('cat.eyebrow')} title={t('products.hero')} subtitle={t('products.heroSub')} />

      <section className="section">
        <div className="container">
          <div className="filters">
            <button type="button" aria-pressed={active === 'all'} onClick={() => select('all')}>
              {t('products.filterAll')}
            </button>
            {categories.map((c) => (
              <button key={c.key} type="button" aria-pressed={active === c.key} onClick={() => select(c.key)}>
                {tf(c.name)}
              </button>
            ))}
          </div>

          <p style={{ color: 'var(--ink-500)', fontSize: '.9rem', marginTop: '-14px' }}>
            <b style={{ color: 'var(--ink-900)' }}>{list.length}</b> {t('products.count')}
            <span style={{ margin: '0 10px', color: 'var(--ink-300)' }}>·</span>
            <Ship width={15} height={15} style={{ display: 'inline', verticalAlign: '-2px' }} /> {t('products.transport')}
            <span style={{ margin: '0 10px', color: 'var(--ink-300)' }}>·</span>
            <Box width={15} height={15} style={{ display: 'inline', verticalAlign: '-2px' }} /> {t('products.pallets')}
          </p>

          <div className="product-grid mt-32">
            {list.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>

          <div className="note">{t('products.note')}</div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
