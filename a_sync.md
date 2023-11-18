## Day 46

### Asynchronous vs. Synchronous Programming

In simple terms, synchronous programming (sync) is a sequence of programming blocks executed from top to bottom in order while acsynchronous programming (async) is a sequence of code blocks executed independently in no particular order.

![a_sync image](https://www.mendix.com/wp-content/uploads/Blog-ThumbnailSync-vs-Async.png)

Asynchronous and synchrousnous are two programming models, each with its own advantage. Let's dive into each one of them.

#### Asynchronous Programming

Asynchronous programming is a multi-threaded model that's applied to network and communations. It is a non-blocking architecture which means it doesn't block further execution while one or more operations are in progress. With this, multiple related operations can run concurrently without waiting for other tasks to complete.

#### Synchronous Programming

Synchronous programming is a single thread model. It is a blocking architecture and its best used for programming reactive systems.

Synchronous programing follows a strict set of sequences, performing operations one at a time, in perfect order. The completion of a task triggers the beginning of the next, and so on.

An example of synchronous programming is making an online payment, where you would want to first check the credential of user before proceeding with anything else.

In javascript, the default behaviour is that of a synchronous programming. However, it offers the ability to harness the flexibility of asynchronous programming.

Understanding these two concepts of programming is very critical for building APIs, creating event-based architectures and deciding how to handle long-running tasks.


## Day 47

### Event Handlers

Event handlers are a form of asynchronous programming in the sense that you provide a function that will be called not right away, but whenever an event happens.

### Callbacks

An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the second function will be called at an appropriate time. Callbacks usd to be the main way asynchronous functions were implemented in JS.

Callback-based code can get hard to understand when the callback itself has to call functions that acept a callback. This is a common situation if you need to perform some operation that breaks down a series of asynchronous functions.

Consider the below:
```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

We could implement the code above using callbacks like this:

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```

Because we have to call callbacks inside callbacks, we get a deeplynested `doOperation()` function, which is much harder to read and debug. This is sometimes referred to as callback hell.

## Day 48

To avoid callback hell, most modern asynchronous API don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the `promise`.

### `Promises`

Promises are the foundation of asynchronous programming in modern JS. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

With a promise-based API, the asynchronous function starts the operation and returns a `promise` object. We can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.

A `promise` is in one of these states:

- pending: initial state, neither fulfilled nor rejected
- fulfilled: operation completed successfully
- rejected: operation failed

The eventual state of a pending promise can either be `fulfilled` with a value or `rejected` with a reason (error). When either of these options occur, the associated handlers queued up by a promise's `then` method are called. If the promise has already been fulfiled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

A fulfilled or rejected promise is said to be `settled`, not `pending`

![promise mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)


## Day 49

### `async` and `await`

The `async` keyword gives us a simpler way to work with asynchronous promise-based code. Adding `async` at the start of a function makes it async function.

```js
async function myFunction() {
  // This function is an async function
}
```

Inside an async function, we can use the `await` keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise treated as a return value, or the rejected value is thrown.

This enables us to write code that uses asynchronous functions but looks like synchronous code.

In conclusion, the `async` and `await` keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create expliit promise chains, and allowing us to write code that looks just like synchronous code.

