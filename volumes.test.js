const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./volumes");

describe ('Volumes....', () => {
    test('Board conversions', () => {
        expect(TABLESPOON.s(1).equals(TEASPOON.s(3))).toBe(true);
        expect(OUNCE.s(1).equals(TABLESPOON.s(2))).toBe(true);
        expect(CUP.s(1).equals(OUNCE.s(8))).toBe(true);
        expect(PINT.s(1).equals(CUP.s(2))).toBe(true);
        expect(QUART.s(1).equals(PINT.s(2))).toBe(true);
        expect(GALLON.s(1).equals(QUART.s(4))).toBe(true);
    });
});