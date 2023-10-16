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

#### Callbacks and Higher Order Functions