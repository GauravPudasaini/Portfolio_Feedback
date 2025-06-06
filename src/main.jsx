import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Use the correct worker URL (either from CDN or local)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)