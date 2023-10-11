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