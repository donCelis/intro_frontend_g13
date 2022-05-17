import React from 'react'
import ReactDOM from 'react-dom/client'
// router
import {
  BrowserRouter
} from 'react-router-dom'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// router
import { Paths } from './Paths'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Paths />
  </BrowserRouter>
)
