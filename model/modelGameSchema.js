"use strict ";

const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
	name: String,
	slug: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
	},
	gendere: String,
	img: String,

	description: String,
});

const gameModel = mongoose.model("gamer", gameSchema);

module.exports = { gameModel };
