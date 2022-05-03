import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse'

import './styles/main.css'

import createData from './services/createData'
import getBanner from './services/getBanner'

getBanner('112057')
createData()
