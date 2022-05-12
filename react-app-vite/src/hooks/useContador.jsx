import { useState } from 'react'

export const useContador = (numero = 0) => {
  const [contador, modContador] = useState(numero)

  const sumar = () => modContador(contador + 1)
  const restar = () => modContador(contador - 1)

  return { contador, sumar, restar }
}
