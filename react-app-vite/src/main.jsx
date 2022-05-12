// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from '@/components/App'
// import { LifeCicle } from '@/components/LifeCicle'
import '@/styles/index.css'
import { ContadorHook } from './components/ContadorHook'

const root = document.getElementById('app')
const container = createRoot(root)

container.render(
  <>
    <ContadorHook />
  </>
)
