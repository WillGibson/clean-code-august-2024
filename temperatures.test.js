const { CELCIUS, FAHRENHEIT } = require("./temperatures");

describe("Temperatures...", () =>{
    test("Can be checked for equality", () => {
        expect(CELCIUS.s(0).equals(FAHRENHEIT.s(32))).toBe(true);
        expect(CELCIUS.s(100).equals(FAHRENHEIT.s(212))).toBe(true);
        expect(CELCIUS.s(10).equals(FAHRENHEIT.s(50))).toBe(true);
        expect(CELCIUS.s(-40).equals(FAHRENHEIT.s(-40))).toBe(true);

        expect(FAHRENHEIT.s(32).equals(CELCIUS.s(0))).toBe(true);
        expect(FAHRENHEIT.s(212).equals(CELCIUS.s(100))).toBe(true);
        expect(FAHRENHEIT.s(50).equals(CELCIUS.s(10))).toBe(true);
        expect(FAHRENHEIT.s(-40).equals(CELCIUS.s(-40))).toBe(true);
    });

    test("Should not be able to add temperatures", () => {
        expect(() => CELCIUS.s(0).add(CELCIUS.s(0))).toThrow(Error("CELCIUS.s(...).add is not a function"));
    })
});