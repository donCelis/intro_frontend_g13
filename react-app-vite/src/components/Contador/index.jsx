import { useState } from 'react'
import './contador.css'

export const Contador = ({ valorInicial = 0, texto = '' }) => {
  // lógica del componente

  /*
    Hooks
    -Todos los hooks inician con el prefijo use
    -Son funciones, por ende reciben props

    Reglas de los hooks
    -Todos los hooks se ejecutan dentro de un componente
    -No se pueden ejecutar dentro ciclos o condicionales (scope)
  */

  // useState -> para estados del componente
  // [variable / estado, función modificadora]
  const [numero, modNumero] = useState(valorInicial)

  const suma = (numeroPrueba = 1) => {
    modNumero(numero + numeroPrueba)
  }

  // vista
  return (
    <section>
      <p>{texto}</p>
      <p>{numero}</p>
      <button onClick={() => suma()}>+</button>
    </section>
  )
}
