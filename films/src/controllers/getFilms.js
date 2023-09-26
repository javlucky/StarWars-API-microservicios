const peliculas = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const films = await peliculas.list();
    response(res, 200, films);;
};