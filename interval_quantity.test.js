const {IntervalQuantity} = require("./interval_quantity");
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./volumes");
const {INCH, FOOT} = require("./lengths");

describe ('Measurements....', () => {
    test('can be compared for equality', () => {
        expect(new IntervalQuantity(1, TEASPOON).equals(new IntervalQuantity(1, TEASPOON))).toBe(true);
        expect(new IntervalQuantity(1, TEASPOON).equals(new IntervalQuantity(2, TEASPOON))).toBe(false);
        expect(new IntervalQuantity(2, TEASPOON).equals(new IntervalQuantity(1, TEASPOON))).toBe(false);
        expect(new IntervalQuantity(1, TEASPOON).equals(new IntervalQuantity(1, TABLESPOON))).toBe(false);
        expect(new IntervalQuantity(3, TEASPOON).equals(new IntervalQuantity(1, TABLESPOON))).toBe(true);
        expect(new IntervalQuantity(2, TABLESPOON).equals(new IntervalQuantity(6, TEASPOON))).toBe(true);

        expect(new IntervalQuantity(2, OUNCE).equals(new IntervalQuantity(1, FOOT))).toBe(false);
    });
});