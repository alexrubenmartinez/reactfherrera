const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [, , p1] = personajes;

console.log(p1);

const retornaArreglo = () => {
  return ["ABC", 123];
};
const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre)
setNombre();
