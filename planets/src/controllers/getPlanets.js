const planetas = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const planets = await planetas.list();
    response(res, 200, planets);
};