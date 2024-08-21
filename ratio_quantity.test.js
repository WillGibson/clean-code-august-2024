const {RatioQuantity} = require("./ratio_quantity");
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./volumes");
const {INCH, FOOT} = require("./lengths");

describe ('Measurements....', () => {
    test('can be compared for equality', () => {
        expect(new RatioQuantity(1, TEASPOON).equals(new RatioQuantity(1, TEASPOON))).toBe(true);
        expect(new RatioQuantity(1, TEASPOON).equals(new RatioQuantity(2, TEASPOON))).toBe(false);
        expect(new RatioQuantity(2, TEASPOON).equals(new RatioQuantity(1, TEASPOON))).toBe(false);
        expect(new RatioQuantity(1, TEASPOON).equals(new RatioQuantity(1, TABLESPOON))).toBe(false);
        expect(new RatioQuantity(3, TEASPOON).equals(new RatioQuantity(1, TABLESPOON))).toBe(true);
        expect(new RatioQuantity(2, TABLESPOON).equals(new RatioQuantity(6, TEASPOON))).toBe(true);

        expect(new RatioQuantity(2, OUNCE).equals(new RatioQuantity(1, FOOT))).toBe(false);
    });

    test('Compatible quantities can be added together', () => {
        expect(new RatioQuantity(1, TEASPOON).add(new RatioQuantity(0, TEASPOON)).equals(new RatioQuantity(1, TEASPOON))).toBe(true);
        expect(new RatioQuantity(1, TEASPOON).add(new RatioQuantity(1, TEASPOON)).equals(new RatioQuantity(2, TEASPOON))).toBe(true);
        expect(new RatioQuantity(2, TEASPOON).add(new RatioQuantity(1, TEASPOON)).equals(new RatioQuantity(1, TABLESPOON))).toBe(true);
        expect(new RatioQuantity(1, OUNCE).add(new RatioQuantity(1, TABLESPOON)).equals(new RatioQuantity(9, TEASPOON))).toBe(true);
    })

    test('Adding incompatible quantities will result in an error', () => {
        const INCOMPATIBLE_UNIT_ERROR = new TypeError("Incompatible Units");
        expect(() => {
            new RatioQuantity(1, TEASPOON).add(new RatioQuantity(0, INCH))
        }).toThrow(INCOMPATIBLE_UNIT_ERROR);
        expect(() => {
            new RatioQuantity(1, INCH).add(new RatioQuantity(0, TEASPOON))
        }).toThrow(INCOMPATIBLE_UNIT_ERROR);
        expect(() => {
            new RatioQuantity(2, FOOT).add(new RatioQuantity(3, TABLESPOON))
        }).toThrow(INCOMPATIBLE_UNIT_ERROR);
        expect(() => {
            new RatioQuantity(4, INCH).add(new RatioQuantity(5, TABLESPOON))
        }).toThrow(INCOMPATIBLE_UNIT_ERROR);
    })
});