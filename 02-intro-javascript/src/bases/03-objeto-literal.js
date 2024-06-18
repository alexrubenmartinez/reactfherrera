const persona = {
    nombre:'Alex',
    apellido: 'Martinez',
    edad:23,
    direccion:{
        ciudad:'NY',
        zip: 1515,
        lat: 14.21,
        lng: 25.155,
    }
};

//console.table({persona});
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);