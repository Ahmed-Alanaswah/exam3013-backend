"use strict ";

const superagent = require("superagent");
const ModelData = require("../model/modelData");
const getData = async (req, res) => {
	superagent
		.get("https://psychonauts-api.herokuapp.com/api/characters?limit=10")
		.then((data) => {
			const responseData = data.body.map((game) => {
				return new ModelData(game);
			});
			res.send(responseData);
		});
};

module.exports = { getData };
