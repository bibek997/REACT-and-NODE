const add = (a, b) =>  {
    return a + b;
    };

    // const add = (a, b) => a + b;
    // console.log(add(2, 3)); 


    const subtract = (a, b) =>  {
        return a - b;
    };

    const multiply = (a, b) =>  {
        return a * b;
    };

    const divide = (a, b) =>  {
        return a / b;
    };

    // const addResult = add(1,2);
    // console.log(addResult);
    // const subtractResult = subtract(2,1);
    // console.log(subtractResult);
    // const multiplyResult = multiply(1,2);
    // console.log(multiplyResult);
    // const divideResult = divide(2,1);
    // console.log(divideResult);

    module.exports = {add,
        subtract,
        multiply,
        divide
    };