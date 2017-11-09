"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
	name: {
		type: String,
		required: "Kindly enter the name of the task"
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	completed: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model("Tasks", TaskSchema);