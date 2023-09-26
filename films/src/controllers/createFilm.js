const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newfilm = await Film.create()
    response(res, 201, newfilm);
};