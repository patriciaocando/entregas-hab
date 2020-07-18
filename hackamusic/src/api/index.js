//Importo la informacion del archivo de configuracion
import config from "./config.js";
const axios = require("axios").default;

const apiKey = config.apiKey;
const BASE_URL = "https://ws.audioscrobbler.com";
const URL_GEO = `/2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;
const URL_TOP_TRACKS = `/2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`;
const URL_TOP_TAGS = `/2.0/?method=chart.gettoptags&api_key=${apiKey}&format=json`;

//funcion que llama a los dato sde la api
async function getArtists() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_GEO}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getTopTracks() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TOP_TRACKS}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getTopTags() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TOP_TAGS}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getArtists,
  getTopTracks,
  getTopTags,
};
