/**
 * Image resolver.
 * Images live in src/assets/ so that Vite fingerprints and optimises them.
 * Use productImg('orange.jpg') / photoImg('citrus.jpg') instead of raw paths.
 */
const productFiles = import.meta.glob('../assets/products/*.jpg', {
  eager: true, query: '?url', import: 'default'
})
const photoFiles = import.meta.glob('../assets/photos/*.jpg', {
  eager: true, query: '?url', import: 'default'
})

export const productImg = (file) => productFiles[`../assets/products/${file}`] || ''
export const photoImg = (file) => photoFiles[`../assets/photos/${file}`] || ''

export { default as logo } from '../assets/logo.png'
export { default as logoWhite } from '../assets/logo-white.png'
