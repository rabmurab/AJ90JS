## Day 51

### Console

Generally, a console is simply a tool that is mainly used to log information with a web page. It enables a user to interact with a web page by executing JavaScript expressions in the contents of the page.

In JS, a console can refer to an object which provides access to the browser's debugging console. It can be accessed from any global object. 

The console object can be accessed using the following command:

|Windows|Mac|
|-------|---|
|Ctrl + Shift + I|Command + Option + K|


#### Console Methods

The console object has several methods, but for this piece, we will be focusing on a few frequently used ones.

- `console.log()`: Arguably the most used console method, it is used for general output of logging information. This method accepts [string substitution](#sting-subtitutions) and additional arguments.

- `console.error()`: Outputs an error message and is a more accepted alternative to the depracated `console.exception()`. This method accepts [string substitution](#sting-subtitutions) and additional arguments.

- `console.clear()`: Simply clears the console.

- `console.debug()`: Outputs a message to the console with the log level `debug`.

- `console.info()`: Informative logging information. This method accepts [string substitution](#sting-subtitutions) and additional arguments.

- `console.warn()`: Outputs a warning message. This method accepts [string substitution](#sting-subtitutions) and additional arguments.

Other console methods are:
- `console.assert()`
- `console.count()`
- `console.countReset()`
- `console.dir()`
- `console.dirxml()`
- `console.group()`
- `console.groupCollapsed()`
- `console.groupEnd()`
- `console.info()`
- `console.profile()`
- `console.profileEnd()`
- `console.table()`
- `console.time()`
- `console.timeLog()`
- `console.timeStamp()`
- `console.trace()`

#### Outputting text to the console

There are two ways to use each of the output methods; we can pass a list of objects whose sring representations get concatenated into one string, then output to the console, or you an pass a string containing zero or more subtitution strings followed by a list of objects to replace them.

The simplest way to use the logging methods is to output a single object:

```js
const person = {name: "Bob", age: 40};
console.log(person);
```

This outputs the `person` object to the console just as it is.

We can also output multiple ojects by listing them when calling the logging method, like this:

```js
const car = "Hyndai";
const person = {name: "Bob", age: 40};

console.log(person.name, "bought a brand new ", car, "on his", person.age, "th birthday.")
```

The output will be:
`"Bob bought a brand new Hyndai on his 40th birthday"`

#### Sting Subtitutions

When passing a string to one of the `console` object's methods that accepts a string, we may use these substitution strings or format placeholders:

- `%o or %O`
    Outputs a JavaScript object. Clicking the object name opens more information about it in the inspector.

- `%d or %i`
    Outputs an integer. Number formatting is supported, for example console.log("Foo %.2d", 1.1) will output the number as two significant figures with a leading 0: Foo 01.
- `%s`
    Outputs a string.

- `%f`
    Outputs a floating-point value. Formatting is supported, for example console.log("Foo %.2f", 1.1) will output the number to 2 decimal places: Foo 1.10

Each of these uses the next argument after the format string as the value of the placeholder.

```js
const people = [
    {name: "Alice", age: 27},
    {name: "Bob", age: 40},
    {name: "Charlie", age: 35},
    {name: "Dave", age: 23}
]

for (let i = 0; i < people.length; i++) {
    console.log("Hello, my name is %s, I am %d years old.", people[i].name, people[i].age)
}
```

#### Styling Console Output

We can apply style to our console output by using the `%c` directive.

```js
console.log(
    "This is %cMy stylish message",
    "color: red; font-style: italic; backgroundColor: blue; padding: 2px"
);
```

![stylish message](/images/stylish.jpeg)

There are many properties usable along with the `%c` syntax.
Checkout [this documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/console#outputting_text_to_the_console)

#### Using Groups in Console

We can use nested groups to help organize our output by visually combining related material. To create a new nested block, we call `console.group()`. The `console.groupCollapsed()` method is similar but creates the new block collapsed, requiring the use of a disclosure button to open it.

To exit the current group, we call `console.groupEnd()`.
Consider this code:

```js
console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");
```

This gives the following output:

![console group](https://developer.mozilla.org/en-US/docs/Web/API/console/console_groups_demo.png)

#### Timers

We can start a timer to calculate the duration of a specific operation. To start one, we call the `console.time()` method, giving it a name as the only parameter. To stop the timer, and to get the elapsed time in milliseconds, we call the `console.timeEnd()` method, again passing the timer's name as the parameter. Up to 10,000 timers can run simultaneously on a given page.

Consider the code below:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

This code will log the time needed by the user to dismiss the alert box, log the time to the console, wait for the user to dismiss the second alert, and then log the ending time to the console:

![console time](https://developer.mozilla.org/en-US/docs/Web/API/console/console-timelog.png)

#### Stack Traces

The console object also supports outputting a stack trace; this will show the path taken to reach the point at which we call `console.trace()`. Given code like this:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

The output in the console looks like:

![console stack traces](https://developer.mozilla.org/en-US/docs/Web/API/console/api-trace2.png)

```
Note: Certain online IDEs and editors may implement the console API differently than the browsers. As a result, certain functionality of the console API, such as the timer methods, may not be outputted in the console of online IDEs or editors. Always open your browser's DevTools console to see the logs as shown in this documentation.
```