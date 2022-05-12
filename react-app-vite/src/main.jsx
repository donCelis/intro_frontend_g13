// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from '@/components/App'
// import { LifeCicle } from '@/components/LifeCicle'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/styles/index.css'
// import { ContadorHook } from './components/ContadorHook'
import { Country } from './components/Country'

const root = document.getElementById('app')
const container = createRoot(root)

container.render(
  <>
    <Country />
  </>
)
