const sumTwoNumbers = require("./sum");

test("sum two numbers", () => {
    expect(sumTwoNumbers(10, 10)).toBe(20);
})