import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)

// Prerendered pages arrive with markup to hydrate; the SPA fallback shell arrives empty.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
