describe("Соответствие значений", () => {//название группы тестов
    it("Проверка переменной х на значение 20", () => {//название теста
        let x = 20;
        expect(x).toBe(20);
        x = 10;
        expect(x).toBe(10);
    });
});

describe("ополнительные функции", () => {
    it("Сравнение объектов", () => {
        let testGo = () => {
            let user1 = {
                name: "Иван",
                age: 25,
                go: testGo
            }
            let user2 = {
                name: "Иван",
                age: 25,
                go: testGo
            }
            expect(user1).toEqual(user2);
        }
    });

    it("regExp", () => {
        let test = "Test aBCd jasmine";
        expect(test).toMatch(/abcd/i);
    });

    it("Массивы", () => {
        let arr = ["white", "black"];
        expect(arr).toContain("white");
    })
})