import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import App from './App'
import './styles.css'

/**
 * HashRouter is used so the built site works on any static host
 * (cPanel, OVH, GitHub Pages…) without server rewrite rules.
 * On Vercel/Netlify you can switch to BrowserRouter and add a
 * catch-all rewrite to index.html.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>
)
