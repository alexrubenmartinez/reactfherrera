import { getHeroeById, getHeroesByOwner } from "./bases/08-import-export";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    // resolve(heroe);
    reject(heroe);
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log("heroe", heroe);
  })
  .catch((err) => console.warn(err));
 */

const getHeroeByIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });

  return promesa;
};

getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.warn);
