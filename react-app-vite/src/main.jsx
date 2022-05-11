import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/components/App'
import '@/styles/index.css'

const app = document.getElementById('app')
const container = createRoot(app)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)
