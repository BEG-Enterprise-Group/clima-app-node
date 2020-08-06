const argv = require('./config/yargs').argv;
const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const obtenerInformacion = async dir => {
    // lugar.obtenerDireccion(dir)
    // .then(resp => {
    //     const { lugar, lat, lon, cod } = resp;
    //     clima.obtenerClima(lat, lon)
    //         .then(resp => {
    //             const { temperatura, sensacion, temperaturaMaxima, temperaturaMinima } = resp;
    //             console.log(`La ciudad de ${colors.blue(lugar)} tiene la siguiente informacion climatica:`);
    //             console.log(`Latitud: ${colors.green(lat)} y longitud: ${colors.green(lon)}`);
    //             console.log(`Temperatura Actual: ${colors.green(temperatura)}ºC`);
    //             console.log(`Sensacion Termica: ${colors.green(sensacion)}ºC`);
    //             console.log(`Temperatura Máxima para el día de hoy: ${colors.green(temperaturaMaxima)}ºC`);
    //             console.log(`Temperatura Mínima para el día de hoy: ${colors.green(temperaturaMinima)}ºC`);
    //             console.log('Mensaje de Respuesta: ', cod);
    //         })
    //         .catch(err => {
    //             console.log('Error: ', err.response.data.cod),
    //                 console.log('Mensaje de Error: ', err.response.data.message),
    //                 console.log(`No se pudo determinar los datos de ${dir}`)
    //         });
    // })
    // .catch(err => {
    //     console.log('Error: ', err.response.data.cod),
    //         console.log('Mensaje de Error: ', err.response.data.message),
    //         console.log(`No se pudo determinar los datos de ${dir}`)
    // });
    try {
        const coordenadas = await lugar.obtenerDireccion(dir);
        const temperatura = await clima.obtenerClima(coordenadas.lat, coordenadas.lon);
        return `El clima de ${colors.blue(coordenadas.lugar)} es de ${colors.green(temperatura.temperatura)}ºC`;
    } catch (e) {
        console.log(`No se pudo determinar el clima de ${colors.blue(dir)}`);
    };

};


obtenerInformacion(argv.direccion)
    .then(console.log)
    .catch(console.log);