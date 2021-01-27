const moneyMultiplierOrNot = require("./index").moneyMultiplierOrNot;

test ("the function should square input first, then divide by 2 and return result", () =>
{
    //arrange
    let num1 = 30;
    const num2 = 2;


    //act
    const result = moneyMultiplierOrNot(num1, num2);

    //assert
    expect(result).toBe(450);

});