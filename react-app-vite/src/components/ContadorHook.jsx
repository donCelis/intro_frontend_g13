import { useContador } from '@/hooks/useContador'

export const ContadorHook = () => {
  const { contador, sumar, restar } = useContador(0)

  const estilos = { margin: '1rem', fontSize: '2rem' }

  return (
    <section>
      <p>Contador con el uso de un custom Hook</p>
      <p style={estilos}>{contador}</p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </section>
  )
}
