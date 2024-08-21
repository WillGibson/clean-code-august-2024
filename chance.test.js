const {Chance, FIFTY_FIFTY, CERTAIN, IMPOSSIBLE} = require("./chance");

describe ('Chance objects....', () => {
    test('can be compared for equality', () => {
        expect(FIFTY_FIFTY.equals(FIFTY_FIFTY)).toBe(true);
        expect(new Chance(0.6).equals(new Chance(0.6))).toBe(true);
        expect(new Chance(0.3).equals(new Chance(0.7))).toBe(false);
        expect(new Chance(0.7).equals(new Chance(0.3))).toBe(false);
    });

    test('can be inverted', () => {
        expect(FIFTY_FIFTY.not().equals(FIFTY_FIFTY)).toBe(true);
        expect(CERTAIN.not().equals(IMPOSSIBLE)).toBe(true);
        expect(IMPOSSIBLE.not().equals(CERTAIN)).toBe(true);
        expect(CERTAIN.not().not().equals(CERTAIN)).toBe(true);
        expect(IMPOSSIBLE.not().not().equals(IMPOSSIBLE)).toBe(true);
        expect(new Chance(0.6).not().equals(new Chance(0.4))).toBe(true);
        expect(new Chance(0.4).not().equals(new Chance(0.6))).toBe(true);
        expect(new Chance(0.33).not().equals(new Chance(0.67))).toBe(true);
    })

    test('can be combined with and()', () => {
        expect(CERTAIN.and(CERTAIN).equals(CERTAIN));
        expect(CERTAIN.and(FIFTY_FIFTY).equals(new Chance(0.75)));
    })
});