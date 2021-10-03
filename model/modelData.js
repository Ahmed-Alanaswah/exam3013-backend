"use strict";

class ModelData {
	constructor(data) {
		this.name = data.name;
		this.gender = data.gender;
		this.img = data.img;

		this.description = data.psiPowers[0].description;
	}
}

module.exports = ModelData;
