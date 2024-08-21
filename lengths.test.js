const {INCH, FOOT, YARD, FURLONG, MILE} = require("./lengths");

describe ('Volumes....', () => {
    test('Board conversions', () => {
        expect(INCH.s(12).equals(FOOT.s(1))).toBe(true);
        expect(FOOT.s(3).equals(YARD.s(1))).toBe(true);
        expect(YARD.s(220).equals(FURLONG.s(1))).toBe(true);
        expect(FURLONG.s(8).equals(MILE.s(1))).toBe(true);
    });
});