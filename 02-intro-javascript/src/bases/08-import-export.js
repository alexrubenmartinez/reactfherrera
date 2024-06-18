//import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) =>
  heroes.filter((el) => el.owner === owner);

//console.log(getHeroesByOwner('Marvel'))
//console.log(owners)
