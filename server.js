"use strict";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { getData } = require("./controller/controller.game");
const {
	createFavGAme,
	getFavGame,
	deleteFavGame,
	updateFavGame,
} = require("./controller/controller.crud");
require("dotenv").config;
mongoose.connect("mongodb://localhost:27017/gamer", {
	useNewUrlParser: true,

	useUnifiedTopology: true,
});
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
	console.log(`server start with port ${PORT}`);
});

app.get("/game", getData);
app.post("/game/favourite", createFavGAme);
app.get("/game/favourite", getFavGame);
app.delete("/game/favourite/:slug", deleteFavGame);
app.put("/game/favourite/:slug", updateFavGame);
