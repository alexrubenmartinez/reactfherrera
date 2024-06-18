import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import { heroes } from '../../data/heroes'

describe('Pruebas en funciones de heroes', () => {
  test('debe de retornar un heroe por id', () => {
    const id = 1
    const heroe = getHeroeById(id)
    const heroeData = heroes.find((heroe) => heroe.id === id)
    expect(heroe).toEqual(heroeData)
  })

  test('debe retornar undefined si heroe no existe', () => {
    const id = 20
    const heroe = getHeroeById(id)
    expect(heroe).toBe(undefined)
  })
})

describe('Pruebas en heroes by owner', () => {
  test('debe de retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC'
    const heroesDC = getHeroesByOwner(owner)
    const heroeData = heroes.filter((h) => h.owner === owner)
    expect(heroesDC).toEqual(heroeData)
  })

  test('debe retornar un arreglo con los héroes de marvel', () => {
    const owner = 'Marvel'
    const heroesDC = getHeroesByOwner(owner)
    expect(heroesDC.length).toBe(2)
  })
})
