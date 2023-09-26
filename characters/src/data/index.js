const axios = require("axios");
const characters = require("./characters.json");

module.exports = {
    list: async () => {
        const personajes = await axios.get("http://database:8004/Character");
        return personajes.data;
    },

    create: async () => {
        throw Error("Hay un error al momento de crear el personaje");
    },
};