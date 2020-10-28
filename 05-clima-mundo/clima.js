const axios = require('axios')

const API_KEY = '74835d738b5362c91b3b5ab9a489aecb'
const getClima = async (lat, lon)=>{
   const resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
   return resp.data;
}

module.exports = { getClima }