import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/components/App'
import '@/styles/index.css'

const root = document.getElementById('app')
const container = createRoot(root)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)
