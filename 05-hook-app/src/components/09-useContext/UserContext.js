import { createContext } from 'react'

const user={
    id:123,
    name:'Alex'
}


export const UserContext = createContext(user)
