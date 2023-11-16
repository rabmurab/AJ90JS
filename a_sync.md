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

Because we have to call callbacks inside callbacks, we get a deeplynested `js doOperation()` function, which is much harder to read and debug. This is sometimes referred to as callback hell.