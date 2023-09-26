const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model } = req.params;
    const { _id, name } = req.body;
    const modelCreate = await store[model].create({_id, name});
    response(res, 201, modelCreate);
};