import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    }
    const user = getUser()
    expect(user).toEqual(userTest)
  })

  test('getUsuarioActivo debe retornar un objeto con el nombre dado como parámetro', () => {
    const nombre = 'Alex'
    const usuarioTest = {
      uid: 'ABC567',
      username: nombre,
    }
    const usuario = getUsuarioActivo(nombre)
    expect(usuario).toEqual(usuarioTest)
  })
})
