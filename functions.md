## Day 16

### Functions

FUnctions are a fundamental concept in JavaCsript. They allow us to encapsulate a block of code and reuse it when ever needed by simply calling its name.

Functions are used for various purposes, including reusability, organization, and creating modular and maintainable code.

To create a function in JavaScript, we first declare the `function` keyword, followed by a name for the function, parameter(s) (if any), and the body of the function.

After creating a function, we can use it in any part of our code by invoking its name. When we do this, the body of the function, a code block, gets executed.

Here's how we declare a function:
```
function functionName() {
    // functionBody that does something whenever the name of the function is called.
}
```
#### Function Parameters and Arguments

Functions can either have no parameters or have one or more. Parameters are variables that are to be input to a function when it is called. If a function has a parameter(s), which is a placeholder for the input of the function, it must be invoked with an argument(s) in place of the parameter(s).
```
function greeting(name) {
    console.log(`Hello, ${name}!`);
}
```
The above function name `greeting`, has one parameter, `name`, and it prints out `Hello` and a name that will be passed as an argument to the function.
> greeting("David");

The console in this case will print `Hello, David!`.

Additionally, function could return something to the program or simply have a side effect. The `greeting` function above has no return value, but a side effect of printing something to the console.

#### Return Values From a Function

When we pass values into a function with arguments, we can use the `return` statement to send a value back out of the function.
```
function add(num1, num2) {
    return num1 + num2;
}
```

The above function when called, must be done so with 2 arguments, and it will return the sum of the arguments if they are `numbers`, or concatenate the 2 arguments if they are `strings`.

Example:
```
add(2, 3); // 5
add("Hello ", "David!"); // Hello David! (Notice the whitespace after "Hello")
```
#### Function Expression

Functions can also be defined using function expressions, which can be assigned to variables. The occur when a function is placed where an expression would normally be, on the right hand side of an assignment operator, then is treated as an expression.
```
const greeting = function(name) {
    console.log(`Hello, ${name}!`)
}
```
#### IIFE and Anonymous Functions

An Immediately Invoked Function Expression, or simply IIFE, as the name implies, is a function that is called immediately after it is defined.

To declare an IIFE, we first create a function declaration `functionName`, and wrap a parentheses around the function once it's defined. This creates a function expression.

After that, we add a second pair of parentheses at the end to immediately invoke it. Here's the syntax:
```
(function functionName() {
    // function body
})();
```

Additionally, we may also declare an IIFE without a function name, making it anonymous. This is a much wider used approach since the function will not be called again anywhere else in our program.

#### Arrow Functions

In 2015, there was a major revision to JavaScript which introduced a new way of defining functions. Functions defined this way are called `arrow functions`.

`Arrow functions` provide a more concise way of defining functions, especially simple one-liner functions.
```
const add = (a, b) => a + b;
```

You will notice that in the above function, we didn't return the sum of `a` and `b`and we simply added he two parameters. This is because of the `arrow function` syntax. This syntax returns expression by default, provided they are one-liners.

We can also get rid of the parentheses is our `arrow function` has only one argument.
```
const square = a => a * a;
```

`arrow functions` come with their own limitations which will not be discussed in this section.

#### Callbacks and Higher Order Functions

In JavaScript, functions are treated as first-class objects, meaning you can do just about anything with them as you can do other elements like `numbers` and `strings`. We have already seen [earlier](#function-expression) that they can be assigned to a variable

In addition to this, functions can be returned from other functions, or even passed as arguments into another function, which is then invoked inside the outer function to complete some kind of action.

A function passed into another function as argument is called a `callback` function.

Conversely, a function that accepts another function as arguments is called a `higher-order` function.

```
// Example of a callback function
function callBack() {
    code somthing;
};

// Example of a higher-order function
function higherOrder(callBack) {
    code something;
};
```

## Day 18

I solved some challenges on Codewars:
```
function zeros (n) {
  // your code here
  let count = 0;

    // Keep dividing n by 5 and counting the quotient until it's less than 5
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}
```
This function calculates the number of trailing zeros in a factorial of a given number.

## Day 19

Again, solved some problems on Codewars:
```
function moveZeros(arr) {
  let zeroArr = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(...arr.splice(i, 1));
    }
  }

  result = arr.concat(zeroArr);
  return result;
}
```
I started solving with the above code and once I got it working, I refactored into:
```
function moveZeros(arr) {
  const nonZeroArr = arr.filter((item) => item !== 0);
  const zeroArr = arr.filter((item) => item === 0);
  return nonZeroArr.concat(zeroArr);
}
```

## Day 20

A simple function that calculates items in an a object.
```
function calculateCost(items) {
  let total = 0;

  for (const item of items) {
    total += item.price * item.quantity;
  }

  return total;
}
```