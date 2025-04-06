"use strict";
const btc = require("./coins/btc.js");
const ltc = require("./coins/ltc.js");
const bchc = require("./coins/bchc.js");
const trrxitte = require("./coins/trrxitte.js");


module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"BCHC": bchc,
	"TRRXITTE": trrxitte

	"coins":["BTC", "LTC", "BCHC", "TRRXITTE"]
};