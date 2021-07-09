const pow = require("../pow");

describe("Тестирование модуля в степень", () => {
    it("2 ^ 3", () => {
        expect(pow(2, 3)).toBe(8);
    });
    it("3 ^ 3", () => {
        expect(pow(3, 3)).toBe(27);
    });
    it("5 ^ 0", () => {
        expect(pow(5, 0)).toBe(1);
    });
})