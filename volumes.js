const { RatioUnit } = require("./unit");

const TEASPOON = new RatioUnit();
const TABLESPOON = new RatioUnit(3, TEASPOON);
const OUNCE = new RatioUnit(2, TABLESPOON);
const CUP = new RatioUnit(8, OUNCE);
const PINT = new RatioUnit(2, CUP);
const QUART = new RatioUnit(2, PINT);
const GALLON = new RatioUnit(4, QUART);

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON}
