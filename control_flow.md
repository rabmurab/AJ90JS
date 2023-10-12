## Day 11

### Control Flow

Control flow is the order in which statements or codes are executed in a script. Executable statements are usually end with a semicolon, separating statements from each other.

JavaScript statements can be grouped together inside of curly braces `{...}`. Such statements together are referred to as a code block and are defined to be executed togrther.

In a program, code runs from the first line to the last line. The computer reads all lines of code handed to it by the program and executes them one by one in the same order as they are written.

However, a line of code in the program might instruct the computer - using logic- to skip some lines (or code blocks) if the lines do not meet a certain condition.

There are several key elements of control flow, byt we will be focusing on conditional statements and loops in this section.

#### Conditional Statements

COnditional statements are used to control the flow of a program by executing specific blocks of code based on certain conditions.

In JS, there are three main  types of conditional statements. They are`if` statements, `switch` statements and "ternary" operator.

##### `if` statements

These are used to execute a block of code if a specified condition evaluates to 'true'. It can be used on its own, if we are only handling one scenario, or in combination with `else` and `else if` clauses to handle alternative scenarios.

One scenario:
```
if (condition) {
    // Code to execute if condition is true
}
```

Two scenarios
```
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

Multiple scenarios:
```
if (condition) {
    // Code to execute if condition is true
} else if (anotherCondition) {
    // Code to execute if anotherCondition is true
} else {
    // Code to execute if no previous condition is true
}
```

##### Switch Statement

`switch` statements are used to select one of many code blocks to be executed based on some value of an expression. It is kind of like the `if...else` statement, but more structured when we compare a single value to several possible values.
```
switch (expression) {
    case value1:
        // Code to execute if 'expression' equals 'value1'
        break;
    case value2:
        // Code to execute if 'expression' equals 'value2'
        break;
    case value3:
        // Code to execute if 'expression' equals 'value3'
        break;
    default:
        // Code to execute if none of the above cases match
        break;
}
```
Notice how we `break` after each case. This is crucial to a switch statement because the following case are executed even after finding a match until a `break` is encountered.

Sometimes we can have multiple inputs with the same output. We can represent them in a `switch` statement like:
```
let result = "";
switch (val) {
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
}
```
Cases for 1, 2, and 3 will all produce the same result.

##### Ternary Operator

This is a shorthand way of writing a simple (sometimes complex) conditional statements. It is often used to assign a value to a variable.

```
const result = condition ? trueValue : falseValue;
```

We can also handle multiple scenarios using ternary operator just like we can do `if...else` and `switch` statement:
```
const result = condition ? firstValue
    : condition ? secondValue
    : falseValue
```
## Day 12

#### Loops

Loops are used to repeatedly execute a block of code as long as a certain condition is true for a specified number of times. There are several types of loops in JavaScript, each serving a specific purpose.

Generally, there are 4 parts to a loop, `initialization`, `condition`, `body`, and `update` (the actual block of code inside the loop).

Before a program enters a loop, a specific condition needs to be met, so we initialize a variable with a certain value to be checked against a certain condition.

After initialization, a condition is specified. The program will compare the said variable and the condition, and runs as long as the progeam evalutes the comparision to be true. The loop ends when the comparison is no longer true.

The body of the loop, i.e. the code block runs for as long as the initialized variable checks true against the condition.

But won't a the variable always be true if true the first time and false if false the first time?

This is why we need to somehow alter the value of the variable to prevent the loop from running infinitely. We specify an update at the end of each loop so that the variable always has a different value when the next iteration of the loop begins. This will make a lot more sense when we discuss the types of loop with examples.

##### Types of Loops

There are basically 2 types of loop in JavaScript, the `while` loop and the `for` loop. Both of these loops have some sort of variations.

For the purpose of this section, we will talk about both loops and a variation of `while` loop called `do...while` loop.

###### `while` Loop

The while loop is used when we don't know or can't figure out how many times we want to run a code block.
```
let counter = 0;            // Initialization
while (counter < 5) {       // Loop syntax and condition
    console.log(counter);   // Body
    counter++               // Update
}
```
In this code, the console will print out the the value of `counter`, incrementing it after every iteration, until `counter < 5` is no longer true. The console will print 0, 1, 2, 3, and 4, because `5` is not less than `5`.

###### `do...while` Loop

There are times in our code that we want to make sure our loop runs at least once before checking the condition. This is exactly what the `do...while` loop does.

Imagine prompting a user for a specific type of input, say a `number`, and we want to reprompt the said user until their input meets our condition. We would want the input first before checking it against our condition that it must be a number. If our program was to check the condition, i.e, begin, before getting the input, the condition will return false and the code inside the block will never run, because then the input is NULL.

This is a perfect example for using a `do...while` loop. We can't possibly do it with a simple `while` loop.
```
do {
    // Get user input
} while (codition)
```

###### `for` Loop

`for` loops are the most used type of loops in JavaScript. This is due to their efficiency and concise syntax. Some variation of this loop makes it very easy to iterate through object and we will talk about them when we get there.

When iterating over a range of values a specific number of times, the `for` loop comes in very handy.

In `for` loops, initializaton, condition, and update are all declared in the same line. Here, using the same example as above:

```
for (let counter = 0; counter < 5; counter++) {
    console.log(counter);
}
```
This will achieve the same result as the `while` loop above.