import React from 'react'
import PrimeraApp from '../PrimeraApp'
import { render } from '@testing-library/react'

describe('Pruebas en <PrimeraApp/>', () => {
  test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
    const saludo = 'Hola, soy Goku'
    const { getByText } = render(<PrimeraApp saludo={saludo} />)

    expect(getByText(saludo)).toBeInTheDocument()
  })
})
