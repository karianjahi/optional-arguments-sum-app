/*
A function that accepts up to two arguments, and sum them, but if there is only one argument returns a function that waits for the second number to sum.
User Stories:

1. Create a function `addTogether`.

2. If the function receives two arguments, the function returns the sum of the two arguments.

3. If only one argument is provided, addTogether returns a function.

    - When the returned function is called with a single argument, it returns the sum.
                    `const sumTwoAnd = addTogether(2);
                    sumTwoAnd(3); // 5`
4. If either argument isn't a valid number, return undefined.
*/

const addTogether = (...args) => {
    let sum = 0;
    let array = [...args]
    if (array.length === 1) {
        let item = array[0];
        if (typeof(item) === "string") return undefined;
        function sumTwoNumbers(x) {
            if (typeof(x) !== "number") return undefined;
            return x + item;
        }
        return sumTwoNumbers;
    } else {
        for (let arg of args) {
            if (typeof(arg) !== "number") return undefined;
            sum+=arg;
        }
        return sum;
    }

}

// Tests
let result = addTogether(2, 3); // should return 5
result = addTogether(23.4, 30); // should return 53.4
result = addTogether("2", 3) // should return undefined
result = addTogether(5, undefined) //should return undefined.
result = addTogether(5)([3]) // should return a function
result = addTogether(2, 3); // should return 5
result = addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // should return undefined
console.log(result); 