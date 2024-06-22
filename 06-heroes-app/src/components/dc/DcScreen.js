import React from 'react'
import { HeroList } from '../ui/heroes/HeroList'

export const DcScreen = () => {
  return (
    <>
      <h1>DC Heroes</h1>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </>
  )
}
