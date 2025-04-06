"use strict";
const btc = require("./coins/btc.js");
const ltc = require("./coins/ltc.js");
const bchc = require("./coins/bchc.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"BCHC": bchc,

	"coins":["BTC", "LTC", "BCHC"]
};