### Variables and Declarations

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