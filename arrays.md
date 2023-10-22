## Day 21

### Arrays

#### Introduction

Sometimes, we have a collection of variables of the same type, or even of different types, we want to and use them with respect to one another. We can declare them individually like:
```
const fruit_1 = "apple";
const fruit_2 = "banana";
const fruit_3 = "cherry";
.
.
const fruit_n = "zucchini";
```
...but we can all agree that this is tedious and very boring.

JS (and most programming language) provide us with a better way of storing multiple variable of the same type with one variable declaration.

An `array` is a "data structure" (more on this later) that allow us to store and manage collection of data. Elements in an array can be of the same or different type. Arrays can pretty much hold any `type` including functions and other arrays.

Arrays are an excellent way to store list of items, iterate over them and manage them. Each element in an array is considered a `sub-array` of the original array and the array itself is the largest possible sub-array of the array.

To declare an array, we gve it a name like any variable, using one of the keywords for declaring a variable. We then start the array itself with an opening square bracket, end it with a closing square bracket, and put a comma between each element of the array.
```
const fruits = ["apple", "banana", "cherry",..., "zucchini"];
```

#### Accessing Elements in an Array

Arrays have the advantage of being ordered, so accessing elements in them is very easy. We just use the index of the element we want to access, starting from zero.

TO access an element, we call the name of the array variable with a square bracket appended to it, and the index of the element we want between the brackets

```
console.log(fruits[0]);
// "apple"
```

#### Modifying Array Data

Unlike strings, arrays are mutable and can be changed freely, even if declared with `const`.

To modify an array, we simply call the name of the array, with an index in a square bracket, then we give it a value. If the index of the array exists, this will change the original value in that index to the new declared value. Else, the new value simply gets appended to the end of the array. Let's see what that looks like:
```
const evenArr = [2, 3, 6, 8];
evenArr[1] = 4;
console.log(evenArr); // [2, 4, 6, 8]

evenArr[4] = 10;
console.log(evenArr); // [2, 4, 6, 8, 10]
```

From the example above, we can see that array sizes (in JS) are not fixed. Elements can be dynamically added or removed as needed.

#### Array Methods I

In the example above, we added a number, 10, to the end of `evenArr` by assigning the value to the first index of the array that doen't exist (4 in this case). It was possible because we know the last index of `evenArr`. What if we have a really large array and we simply do not know the index?

Here we have to options. We either find the length of the array using `.length` method and append the value we want to add, or we simply ignore the length of the array and simply push elements to the end.

##### `.length` Method

To know the length of an array, we call the name of the array and append `.length` to the end of it. This will return the number of elements in the array.
```
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // 3
```

This way, when we want to append to the end of `fruits` array, we call the last index + 1 and assign it the value we want to append.
```
fruits[fruits.length] = "zucchini";
console.log(fruits); // ["apple", "banana", "cherry", "zucchini"]
```
This seems like an efficient way to add elements to our array without modifying any existing element.

But what if we want to add multiple elements? Do we keep finding the length and appending at that index?

As you might have guessed, there's a better way to d this.

##### `push()` Method

The `push()` method of an array simply appends an element (or elements) to the end of an array without us knowing, or having to find out, the length of the array
```
const states = ["Abia", "Adamawa", "Akwa Ibom"];
states.push("Anambra");
console.log(states); // ["Abia", "Adamawa", "Akwa Ibom", "Anambra"]
```

This is a more efficient way of appending elements to the end of an array. Here's another exmaple:
```
states.push("Bauchi", "Bayelsa", "Benue", "Borno");
console.log(states); // ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno"]
```

Here's another question. What if we don't want to append to the end of an array? What if we want to add to the beginning of an array?

##### `unshift()` Method

To insert an element to the front of an array, we call the name of the array with the `unshift()` method.

It works exactly like the `push()`, the difference being the position of insertion into the array.

```
const colors = ["green", "blue"];
colors.unshift("red");
console.log(colors) // ["red", "green", "blue"]
```

Consider the table below:

|                   |Begining           |End            |
|-------------------|-------------------|---------------|
|Insert             |`unshift()`        |`push()`       |
|Remove             |`shift()`          |`pop()`        |