const { RatioUnit } = require("./unit");

const INCH = new RatioUnit();
const FOOT = new RatioUnit(12, INCH);
const YARD = new RatioUnit(3, FOOT);
const FURLONG = new RatioUnit(220, YARD);
const MILE = new RatioUnit(8, FURLONG);

module.exports = {INCH, FOOT, YARD, FURLONG, MILE}
