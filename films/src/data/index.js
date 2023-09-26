const axios = require("axios");
const films = require("./films.json");

module.exports = {
    list: async () => {
        const peliculas = await axios.get("http://database:8004/Film");
        return peliculas.data;
    },

    create: async () => {
        throw Error("Hay un error en la BDD al momento de crear la pelicula");
    },
};