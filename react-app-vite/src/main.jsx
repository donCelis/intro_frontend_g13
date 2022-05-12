// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from '@/components/App'
import '@/styles/index.css'
import { LifeCicle } from '@/components/LifeCicle'

const root = document.getElementById('app')
const container = createRoot(root)

container.render(
  <>
    <LifeCicle />
  </>
)
