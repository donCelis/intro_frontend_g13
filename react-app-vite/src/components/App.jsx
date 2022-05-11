import '@/styles/App.css'
import { Header } from '@/container/Header'
import { Contador } from './Contador'
import { Main } from '@/container/Main'

// memo -> los componentes en react deben iniciar en mayus
export const App = () => {
  // lógica del componente
  const userName = 'Alexander'

  // vista del componente (jsx)
  return (
    <>
      <Header>
        <Main />
      </Header>
      <div className='App'>
        <p>Bievenido al master in code, {userName}</p>
        <Contador texto='Contador' valorInicial={10} />
      </div>
    </>
  )
}
