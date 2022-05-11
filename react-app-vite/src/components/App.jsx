import '@/styles/App.css'
import { Contador } from './Contador'

// memo -> los componentes en react deben iniciar en mayus
export const App = () => {
  // lógica del componente
  const userName = 'Alexander'

  // vista del componente (jsx)
  return (
    <div className='App'>
      <p>Bievenido al master in code, {userName}</p>
      <Contador />
    </div>
  )
}
