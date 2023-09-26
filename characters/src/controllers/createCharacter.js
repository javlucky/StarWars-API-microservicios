const results = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newCharacter = await results.create()
    response(res, 201, newCharacter);
};