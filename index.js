//write me!

function moneyMultiplierOrNot (num1, num2) {
    const result = Math.pow(num1, num2) / num2;
    console.log("result: ", result);
    return result;
}

module.exports = {
    moneyMultiplierOrNot: moneyMultiplierOrNot,
}
