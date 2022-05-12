import { useState, useEffect } from 'react'

export const LifeCicle = () => {
  const [contador, setContador] = useState(0)

  /* useEffect */
  // si hay un cambio de estado
  /* useEffect(() => {
    console.log('se cargó el componente')

    setTimeout(() => {
      setContent('Master in code 2022')
      console.log('se actualizó el estado')
    }, 4000)
  }) */

  // actualiza los estados la primera vez que cargar el componente
  /* useEffect(() => {
    console.log('Se cargó el componente la primera vez')

    setTimeout(() => {
      setContent('Master in code 2022')
      console.log('se actualizó el estado')
    }, 4000)
  }, []) */

  // se ejecuta cada que cambia una de sus dependencias
  /* const [test, setTest] = useState('')

  useEffect(() => {
    console.log('Se cargó el componente la primera vez')

    setTimeout(() => {
      setTest('Master in code 2022')
      content !== '' && console.log('se actualizó el estado')
    }, 4000)
  }, [test]) */

  const sumaContador = () => {
    setContador(contador + 1)
  }

  useEffect(() => {
    // if (contador === 5) console.log('cambio')

    /* if (contador === 5) {
      console.log('cambio')
    } */

    contador === 5 && console.log('cambio')
  }, [contador])

  const estilos = { margin: '1rem', fontSize: '2rem' }

  return (
    <>
      <p>Ciclo de vida de un componente</p>
      <p style={estilos}>{contador}</p>
      <button onClick={sumaContador} style={estilos}>+</button>
    </>
  )
}
