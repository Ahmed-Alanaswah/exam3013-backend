"use strict";

const { model } = require("mongoose");
const { gameModel } = require("../model/modelGameSchema");

const createFavGAme = async (req, res) => {
	const { name, gendere, img, description } = req.body;
	const slug = name.toLowerCase().split(" ").join("-");
	gameModel.find({ slug: slug }, (error, data) => {
		if (data.length > 0) {
			res.send("sorry");
		} else {
			const newGameModel = new gameModel({
				name: name,
				slug: slug,
				gendere: gendere,
				img: img,
				description: description,
			});

			newGameModel.save();
			res.send(newGameModel);
		}
	});
};

const getFavGame = async (req, res) => {
	let data = await gameModel.find({});
	res.send(data);
};

const deleteFavGame = (req, res) => {
	const slug = req.params.slug;

	gameModel.deleteOne({ slug: slug }, async (error, data) => {
		if (error) {
			res.send(error);
		} else {
			let data = await gameModel.find({});
			res.send(data);
		}
	});
};
const updateFavGame = async (req, res) => {
	const slug = req.params.slug;
	const updateData = req.body;
	gameModel.findOne({ slug: slug }, (error, data) => {
		data.name = updateData.name;
		data.description = updateData.description;
		data.save();
	});
	let data = await gameModel.findOne({});
	res.send(data);
};
module.exports = { createFavGAme, getFavGame, deleteFavGame, updateFavGame };
