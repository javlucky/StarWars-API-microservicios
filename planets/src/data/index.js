const axios = require("axios");
const planets = require("./planets.json");

module.exports = {
    list: async () => {
        const planetas = await axios.get("http://database:8004/Planet");
        return planetas.data;
    },

    create: async () => {
        throw Error("Hay un error en la BDD al momento de crear el planeta");
    },
};