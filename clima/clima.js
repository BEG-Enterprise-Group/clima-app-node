const axios = require('axios');


const obtenerClima = async(latitud, longitud) => {
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric`,
        headers: { 'x-api-key': '050515422a53e4f3d9b6071a7449ac7e' }
    });
    const respuesta = await (instance.get());
    const data = respuesta.data;
    const temperatura = data.main.temp;
    const sensacion = data.main.feels_like;
    const temperaturaMinima = data.main.temp_min;
    const temperaturaMaxima = data.main.temp_max;

    return {
        temperatura,
        sensacion,
        temperaturaMaxima,
        temperaturaMinima
    }
}

module.exports = {
    obtenerClima
}