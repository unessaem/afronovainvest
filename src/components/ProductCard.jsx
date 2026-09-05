import { useI18n } from '../i18n/LanguageContext'
import { productImg } from '../data/images'

export default function ProductCard({ product }) {
  const { t, tf } = useI18n()
  return (
    <article className="product">
      <div className="product__img">
        <img src={productImg(product.image)} alt={tf(product.name)} loading="lazy" />
      </div>
      <div className="product__body">
        <h3 className="product__name">{tf(product.name)}</h3>
        <div className="product__family">{tf(product.family)}</div>
        <dl className="product__pack">
          <dt>{t('products.packaging')}</dt>
          <dd>
            <ul>
              {product.packaging.map((p, i) => (
                <li key={i}>
                  <span>{tf(p.type)}</span>
                  <b>{p.weight}</b>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </div>
    </article>
  )
}
