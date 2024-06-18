const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar3("Alex"));

const getUser = () => ({
  uid: "SDEFGS156",
  username: "Alex_m",
});

console.log(getUser());


function getUsuarioActivo(nombre){
    return{
        uid: "324SRGE4R",
        username: nombre,
    }
}

const getUsuarioActivo1 = (nombre)=>({
    uid: "324SRGE4R",
    username: nombre,
})

const usuarioActivo = getUsuarioActivo('Alex');
const usuarioActivo1 = getUsuarioActivo1('Ruben');

console.log(usuarioActivo);
console.log(usuarioActivo1);
