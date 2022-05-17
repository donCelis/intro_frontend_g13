import {
  useRoutes,
  Navigate
} from 'react-router-dom'

// components
import App from './pages/App'
import { MovieDetails } from './pages/MovieDetails'
import { Page404 } from './pages/page404'
import { NestedRoute } from './components/NestedRoute'

export const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <NestedRoute />,
      children: [
        {
          path: '/',
          element: <Navigate to='/movies' replace />
        },
        {
          path: 'movies',
          element: <App />
        }
      ]
    },
    {
      path: '/movie/:idMovie',
      element: <MovieDetails />
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    },
    {
      path: '/404',
      element: <Page404 />
    }
  ])

  return element
}
