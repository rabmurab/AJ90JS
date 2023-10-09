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

The backslash isn't just used for escaping quotes. It is used for escaping special characters in a string. Escape sequences aloow us to use characters we may otherwise not use in a string. These characters include:
|Code|  Output       |
|----|---------------|
|\\  |  backlash     |
|\n  |  newline      |
|\t  |  tab          |
|\r  |carriage return|
|\b  |  backspace    |
|\f  |  form feed    |

Multiple strings can be joined together in an operation called "concatenation". Concatenation means joining different strings together using the `+` operation. We have not learned about operators so we will revivit this at a later time.

The length of a string can be figured out by javascript using the `.length` function. This returns the number of characters present in a string.
```
let name = "Fatima";
name.length // 6;
```

##### Template Literals

Template literals are a special type of string that makes creating complex strings easier. They allow you to create multiple strings and use string interpolation features to create strings.