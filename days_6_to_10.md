## Day 6

### Variables and  Their Declarations

Variables in programming is (like) a labelled container for storing some value. The name given to variables are used to reference them later in the code.

Variable names have to follow some certain rules. These rules are:
- Variable names are case-sensitive so `myCar` and `mycar` are two different variables.
- Variables can be named anything order than some reserved keywords (e.g., `if`, `for`, `function`, e.t.c).
- Variable names cannot begin with a number but can contain them. They can consist of letters, underscores.
- The conventional naming case is called camelCase (small letters for the first word and capitalize each subsequent word).

The act of creating a variable and defining its name is referred to as "variable declaration". In javascript, we declare variables using one of three keywords. They are: `var`, `let` and `const`.

The syntax for declaring variables is to first use a keyword followed by the variable name:
```
var myCar;

let model;

const mileage;
```

However, `var` is generally considered outdated because of problems with hoisting. `let` and `const` are generally preferred in mordern times.

After declaring a variable, we need to give it some value to store otherwise they have no point. The process of giving a value to a variable for the first time is called "initialization".

We initialize variables with one of javascript types (which we will discuss in subsequent posts).
```
let word; // declaration

word = "Apple"; // initialization
```

After initializing a variable we declared with either `var` or `let`, we can update or change its value. This is called "reassignment".

```
let number;

number = 15;

number = 10;
```

We can declare and initialize variables on the same line:
```
let name = "Muhammad";
```

Variables are not only how we store data, but also how we manipulate them. We will talk about manipulating data in length next time.

## Day 7

### `var`, `let` and `const`

As we have seen previously, there are three keywords for declaring a variable in javascript. These are:
> `var`, `let`, and `const`

##### The `var` Keyword

This was the keyword traditionally used to declare variables. This is no longer the case since the introduction of the other two keywords.

Variables declared with the `var` keyword can have unexpected behaviours. They will be accessible globally (throughout the entire program) which is not a good thing for reasons we will talk about in the future. For now, just know that we don't always want our variables to accessible everywhere in our program.

One other thing with this keyword is the possibility to mistakenly redeclare a variable entirely, which can result in unexpected behaviours.
```
var year = 2020; // Initialization
var year = 2023; // Redeclaration;
```

##### The `let` Keyword

The `let` keyword was introduced in ECMAScript 6 or ES6 and is widely used for variable declaration. Variables declared with this are limited to the block of code, or in otherwords, have block scope. This meas the can only be accessed in certain parts of our code (we will explain further when we talk about functions).

Hence, it is safer to use because we cannot redeclare the same variable after the first time. However, reassignment is possible.

The following code will throw an error:
```
let myCar = "Audi"; // Declaration and Initialization
let myCar = "BMW"; // Redeclaration not allowed
```

This is a valid code:
```
let myCar = "Audi"; // Declaration and Initialization
myCar = "BMW"; // Reassignment is allowed
```

##### The `const` Keyword

This is the last of the keywords used to declare a variable in javascipt. One unique thing about `const` is that it must be initialized immediately. So, `const user;` will throw an error, but `const user = "name;` is allowed. It is the only way in fact. Variables declared with `const`, like `let`, also have a block scope. 

Furthermore, variables declared with `const` can not be changed, so only declare variables you know are not going to change throughout the block with it.

The following code will throw an error:
```
const name = "Abdul"; // Declaration and Initialization
name = "Abba"; // This is not allowed in js
```

## Day 8

### Data Types and their uses

In prgramming, data types is an important concept. In order to operate on variables, it is important to know their type.

Javascript is a dynamically-typed language, which means that they can hold values of any javascript type without specifying the type explicitly. Js has different several built-in data types. But for the purpose of this note, we are restricting ourselves to primitive data types. These are:
- Number: used to store numeric values, both integers and floats
- String: used for text and characters
- Boolean: has only two values, true and false
- Bigint: used for large numeric values that are very large
- Undefined: represent an uninitialized variable
- Null: variables set intentionally to shoe absence of any value

Examples:
```
// Numbers:
let age = 30;
let height = 190;

// Strings:
let name = "Abdul";
let month = "September";

// Booleans
let married = false;
let engaged = true;

// Bigint:
let cells = 37200000000000; // cells in the human body
let bits = 10000000000000; // bits in some hard disks

// Undefined:
let skills;
let hope;

// Null:
let income = null;
let worth = null;
```

## Day 9

#### Strings with Template Literals

##### Strings

A string is a series of zero or more characters enclosed within a single or double quotes. It is one of the primitive data in js and is sometimes referred to as "string literal".
```
let name = "Ajay" // `Ajay` is a string literal stored in a variable called `name`
```

When defining a string, it must start and end with a single or double qoute. This becomes problematic when you need a literal quote within your string. When you include a quote within a string, you are at the risk of ending your string prematurely.
```
let str = 'Ajay's challenge';
let anotherStr = "We use "" when quoting someone"; 
```
Both examples above will throw error.
In the first example, the string terminates at `Ajay` and javascript will ignore the rest and throw an error because it doesn't understand what `s challenge` is.
Also, in the second string, the string ends at `We use `. ` when quoting someone` will throw an error.

###### Escaping Sequence in Strings

So how do we do this properly?
Well, there's a couple of ways to include an apostrophe and a quote within a string.

One way is to alternate between single and double quote, since a string must end with the type of quote it began with. This means declaring a string with double quotes if you intend to use an apostrophe in the string and declaring it with single quotes if you intend to use quotes in it.

To correct the code above:
```
let str = "Ajay's challenge";
let anotherStr = 'We use "" when quoting someone';
```

Another way to go about this is by palcing a backslash `\` in front of the inner quote.
```
let str = 'Ajay\'s challenge';
let anotherStr = We use \"\" when quoting someone";
``` 

The backslash isn't just used for escaping quotes. It is used for escaping special characters in a string. Escape sequences allow us to use characters we may otherwise not use in a string. These characters include:
|Code|  Output       |
|----|---------------|
|\\  |  backlash     |
|\n  |  newline      |
|\t  |  tab          |
|\r  |carriage return|
|\b  |  backspace    |
|\f  |  form feed    |

Example: backslash
```
let wrongStr = "Escape sequence by using \ in JS" // The backslash won't appear in the console
let correctStr = "Escape sequence by using \\ in JS" // One backlash will appear as the first one escapes the second
```

Exanple: newline
```
let wrongStr = "My name is Abba 
                I am a frontend developer" // The console won't recognise the new line and the string would be printed on the same line
let correctStr = "My name is Abba\nI am a frontend developer" // The `\n` would enter a newline in the console.
```

Multiple strings can be joined together in an operation called "concatenation". Concatenation means joining different strings together using the `+` operation. We have not learned about operators so we will revivit this at a later time.

###### Length of a String
The length of a string can be figured out by javascript using the `.length` function. This returns the number of characters present in a string.
```
let name = "Fatima";
name.length // 6;
```

## Day 10
##### Template Literals

Template literals are a special type of string that makes creating complex strings easier. They allow you to create multi-line strings and use string interpolation features with embedded expressions to create strings.

Template literals are delimited with backticks. The are sometimes called template strings because of their use in string interpolation (to create strings by doing substitution of placeholders).

#### Operators and Operator Precedence

In javascript, operators are used to perform almost every task.
There are many operators including:
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- String Operators
- Logical Operators
- Bitwise Operators
- Ternary Operators
and so on.

For the purpose of this section, we will be looking into only the first five on the list.

###### Arithmetic Operators

These are the normal operators we are taught in primary school maths. They are used only with number data type.

|Operator|Description|
|--------|-----------|
|+       |Addition   |
|-       |Subtraction|
|*       |Multiplication|
|/       |Division   |
|%       |Modulus    |
|**      |Exponentiation|
|++      |Increment  |
|--      |Decrement  |

Examples:
```
let x = 10;
let y = 5;

x + y = 15;
x - y = 10;
x * y = 50;
x / y = 2;
x % y = 0;
x ** y = 100000;
x++ = 11;
y-- = 4;
```
The last two examples simply imply `x = x + 1` and `y = y + 1` respectively.

#####  Assignment Operators

We have been using assignment operators throughout this note. Denoted by `=`, they are used to assign value to a variable. Everything to the right of the assignment operator will be stored in the variable on the left (after solving all the operators on the right).

Example:
```
let x = 10;
let y = 5;
let z = x + y;
```
In this example, `x` gets `10`, `y` gets `5`, and `z` gets the value after resolving the `+` operator, in this case, 15.

One other useful thing to know about the assignment operator is that it can be used in combination with most of the arithmetic operators. This is done in a case where we want to perform an operation on a variable using the variable itself.

For example:
```
let x = 10;
x = x + 5;
```
The above expression can be written as:
> x += 5;

This shorthand of using the assignment operator can be used with all the arithmetic operators mentioned earlier in [this section](#arithmetic-operators).

```
let x = 10;
let y = 5
x -= y; // 5
x *= y; // y0
x /= y; // 2
x %= y; // 0
x **= y; // 100000;
```

##### Comparison Operators

COmparison operators, as the name imply, are used to compare between two values, each on either side of the operators, after resolving any arithmetic operations (if present) on both sides.

Comparison Operators are as follows:
|Operator|Description|
|--------|-----------|
|==      |equal to   |
|===     |strictly equal to|
|!=      |not eqaul to|
|!==     |strictly not equal to|
|>       |greater than|
|<       |less than  |
|>=      |greater than or equal to|
|<=      |less than or equal to|

After analysing the comparison operator, js returns a boolean for whether the comparison is true or false.

Javascript will normally convert a type to another where possible, just to be able to perform an operation. This means that when we compare a string `"5"` and a number `5`, js converts the number to a string to be able to perform an operation between the two and will return true when compared.

The `===` and `!==` operators will not allow "type coersion", so it will strictly check the value itself and also the type of the value. In this case, `"5" === 5` will return false.

##### String Operators

There are two main operations between strings. They are "concatenation" and comparison. Both of these operations use symbols we've discussed already.

Concatenation means to join two or more strings together.It can also mean to join string and other types, although the other type will be coerced to become a string and then concatenation takes place.
```
let firstName = "David";
let lastName = "Malan"
let greeting = "Hello"

let resultStr = greeting + ' ' + firstName + ' ' + lastName + '.'
// Hello David Malan.
```
Notice that the `+` operator is called cocatenation operator when used on strings and can also be used in combination with the assignment operator. When we concatenate strings this way, we have to manually add the spaces between the variable.

To compare strings, we can use any of the comparison operators above. It is worth noting however, that js will compare the ASCII values of characters when compared.

##### Logical Operators

There are three logical operators in javascript. The "logical and", "logical or", and "logical not" operators, denoted by `&&`, `||`, and `!` respectively.

The purpose of the "logical and" operator is to check whether two (or more) comparisons are true or false, depending on the situation. For example, we can check if the string `"Bellow"` has a vowel and if it has more than 5 characters. Javascript will check and only return true (which it does in this case) if both conditions are met.

The "logical and" operator on the other hand does the same, but will return true if one or both of the conditions are met.

Lastly, the "logical not" operator checks to see if the inverse of the condition is met and returns true.

We can check for multiple conditions on the sameline of code by chaining the logical operators. We will discuss more about this in the "Control Flow" section tomorrow.

##### Operation Precedence

Javascript, like any other programming language, uses the standard method of operator precedence.

Parentheses are used to group things so that nothing interacts with them until they are resolved. Order follows next. Division and multiplication have the same precedence from left to right. Then addition and subtraction come last.

This is known as BODMAS, PEMDAS, PEDMAS and many other acronyms depending on where you live and studied.

I'll add that arithmetic operations are resolved before comparison, those are resolved before logical operation and all that are reolved before assignment of value to a variable.

#### Variable Assignment and Modification

Variable assignment is how we store data in a variable. We have been assigning data to variable.

We can modify the data in a variable by either changing it completely or just updating it.

As discussed earlier, variables are like labelled containers for storing data. That data can be overwritten or just have something added to it (or subtracted).

Both assignment and modification are done using the assignment operator `=`, sometimes in combination with other operators.

```
let x = 10; // Assignment
x = 14; // Reassignment or overwriting
x = x + 2 // Updating x to be 16
```
In the above code, the first line declares and initializes x to 10. The second line changes/modifies x to 14. This is like removing 10 from the container and dropping 14. The third line doesn't remove the value 14 from the container, instead it adds 2 to the value already there, making the total data in x to be 16.