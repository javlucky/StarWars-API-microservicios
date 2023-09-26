const personajes = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const characters = await personajes.list();
    response(res, 200, characters);
};