## Day 46

### Asynchronous vs. Synchronous Programmind

In simple terms, synchronous programming (sync) is a sequence of programming blocks executed from top to bottom in order while acsynchronous programming (async) is a sequence of code blocks executed independently in no particular order.

[a_sync image](https://www.mendix.com/wp-content/uploads/Blog-ThumbnailSync-vs-Async.png)

Asynchronous and synchrousnous are two programming models, each with its own advantage. Let's dive into each one of them.

#### Asynchronous Programming

Asynchronous programming is a multi-threaded model that's applied to network and communations. It is a non-blocking architecture which means it doesn't block further execution while one or more operations are in progress. With this, multiple related operations can run concurrently without waiting for other tasks to complete.

#### Synchronous Programming

Synchronous programming is a single thread model. It is a blocking architecture and its best used for programming reactive systems.

Synchronous programing follows a strict set of sequences, performing operations one at a time, in perfect order. The completion of a task triggers the beginning of the next, and so on.

An example of synchronous programming is making an online payment, where you would want to first check the credential of user before proceeding with anything else.

In javascript, the default behaviour is that of a synchronous programming. However, it offers the ability to harness the flexibility of asynchronous programming.

|Async|Sync|
|-----|----|
|Multi-thread,
programs can run in parallel|Single thread,
only one program will run at a time|
|Non-blocking,
can send multiple requests to server|Blocking,
can only sedn one request at a time|
|Increase throughput because
multiple operations can run
at the same time|Slower and more methodical

Understanding these two concepts of programming is very critical for building APIs, creating event-based architectures and deciding how to handle long-running tasks.

Consider the following code:

```js
    const name = "
```