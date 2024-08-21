const { IntervalUnit } = require("./unit");

const CELCIUS = new IntervalUnit();
const FAHRENHEIT = new IntervalUnit(5.0/9.0, CELCIUS, 32)

module.exports = {CELCIUS, FAHRENHEIT}