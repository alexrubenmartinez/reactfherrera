const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "Soldado",
};

const { nombre: nombre2, edad, clave } = persona;

console.log(nombre2);
console.log(edad);
console.log(clave);

const useContext = ({ nombre, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlon:{
        lat:15.51651,
        lon:-15.152,
    }
  };
};

const avenger = useContext(persona);
const {nombreClave,anios,latlon:{lat,lon}} = useContext(persona);
console.log(nombreClave,anios,);
console.log(lat,lon);

