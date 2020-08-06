const axios = require('axios');

const obtenerDireccion = async(direccion) => {
    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}`,
        //AVERIGUAR DE DONDE SALE ESE HEADER DE X-API-KEY
        headers: { 'x-api-key': '050515422a53e4f3d9b6071a7449ac7e' }
    });
    const respuesta = await instance.get();
    // if (respuesta.data.lenght === 0) {
    //     throw new Error(`No hay resultados para ${encodeUrl}`);
    // }
    const data = respuesta.data; //EL DATA DE RESPUESTA.DATA ES PORQUE ASI SE LLAMA LA DATA QUE SE PIDE
    const lugar = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const cod = data.cod;

    return {
        lugar,
        lat,
        lon,
        cod
    }


}

module.exports = {
    obtenerDireccion
}