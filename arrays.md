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

## Day 22

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


## Day 23

We've seen how to remove elements from the beginning and end of an array. What if we want to remove an element from the middle? Or we want to remove more than one element at a time?

We'll take a look at two more methods.

##### `slice()` Method

The `slice()` method takes copies, or more correctly, extracts a given number of elements from an array. It takes 2 argument which are both indeices of the array. The first argument is the index at which the extraction begins, and the second argument is where it stops.

However, if we don't provide the second argument, JS assumes it to be the array's length.
```
const arr = ["Benin", "Cameroon", "Ghana", "Niger", "Nigeria"]
const slicedArr = arr.slice(2, 4);
const last = arr.slice(3)

console.log(arr);   // ["Benin", "Cameroon", "Ghana", "Niger", "Nigeria"]
console.log(slicedArr); // ["Ghana", "Niger"]
console.log(last);  // ["Niger", "Nigeria"]
```

A few things to note here. The `slice()` method:
- does not mutate the original array.
- include the index of the first argument, but not the second.
- can be called with one or two arguments.

##### `splice` Method

`splice()` allows us to remove any number of cosecutive elements from anywhere in array. It can take up to 3 parameters, but it can also take 2 or even 1.

The first 2 parameters are integers which represent indexes of items in an array, the beginning and the number of elements to be removed respectively.

If the method is called with one argument only 1 argument, it removes from the index of the argument to the end of the array.

If called with 2 arguments, it starts from the index of the first argument, and removes the second number of elements from the array.

If called with more than 2 arguments, it does exactly what the above does, then adds the rest of the arguments to the array.

This will all make sense if we consider the code below:
```
const friends = ["Fatima", "Nafisa", "Aliyu", "Mustapha"];
friends.splice(1); // ["Fatima"]
friends.splice(1, 2); // ["Fatima", "Mustapha"]
friends.splice(1, 2, "Imran", "Asma'u"); // ["Fatima", "Imran", "Asma'u", "Mustapha"]
```

Note that `splice()` mutates an array, so the examples above are different instances of the method call.


## Day 24

#### Array Methods II

##### `map()` Method

The `map()` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed, the second is the index of that element, and the third is the array upon which the `map()` method was called.
```
const students = [
    {name: 'Abigail', age: 16},
    {name: 'Samson', age: 19},
    {name: 'Tobias', age: 17},
];

const names = students.map(student => student.name);
console.log(names); // ['Abigail', 'Samson', 'Tobias']
```

##### `filter` Method

This method calls a function on each element of an array and returns a new array containing only the elements for which that function returns a truthy value (a value which returns `true` if passed to the `Boolean()` constructor).

The callback accepts three arguments. The first argument is the current element being processed, the second is the index of that element and the third is the array upon which the `filter()` method was called.
```
const studentsUnder18 = students.filter(student => student.age < 18);
console.log(studentsUnder18);   // [{name: 'Abigail', age: 16}, {name: 'Tobias', age: 17},]
```

##### `reduce` Method

This is themost general of all array operations in JavaScript. It can be used to solve almost any array processing problem using this method.

The `reduce()` method allows for more general forms of array processing, and it's possible to show that both `map()` and `filter()` methods can be derived as special applications of `reduce()`.

This method iterates over each item in an array and returns a single value. This is achieved via a callback function thatg is called on each iteration.

The callback function accepts four arguments. the first argument is known as the accumulator, which gets assignred the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element, and the fourth is thne array upon which `reduce()` is called.

In addition to the callback function, `reduce()` has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.
```
const sumOfAges = students.reduce((sum, student) => sum + student.age, 0);
console.log(sumOfAges); // 64
```

## Day 25

Other array methods that are very common are:

1. `concat()` method: Combines two or more arrays and returns a new array without mutating the original arrays.
2. `join()` method: Converts the elements of an array into a string, separated with a specified separator.
3. `indexOf()` method: Returns the first index at which a specified element is found in an array. It returns -1 if not found.
4. `forEach` method: Executes a provided function once for each element of an array.
5. `every()` method: Checks if all elemets of an array meets a certain condition.
6. `some()` method: Checks if at least one element in an array meets a certain condition.
7. `includes()` method: Determines whether an array contains a specified element, returning a `boolean` as appropriate.
8. `sort()` method: Takes an array and sorts its elements according to a certain criteria.
9. `find()` method: Returns the first element in an array that satisfies a certain condition.

#### Iterating Over an Array

All the methods mentioned above, probably with the exception of `concat()`, iterate over arrays and perform specific, almost predefined tasks.

To itearate over an array, literally, we can use any of the [`loops`](/control_flow.md#loops) we covered in previous sections.

However, there are variations of `for` loops specifically for iterating over an array (and other iterable objects). These are:
- `for...of` loop
- `for...in` loop

A `for...of` loop iterates over each element in an array without the need to know the length of the array and without keeping track of the number of iterations, hence, there's no value to be incremented.
```
const animals = ["antelope", "baboon", "cheetah"];

for (let animal of animals) {
    console.log(animal);
}

/*
    antelope
    baboon
    cheetah
*/
```
We can declare the variable `animal` with any of the keywords accepted in JavaScript.

A `for...in` loop on the other hand, iterates over each index of an array, also without keeping track of the number of times of iteration. It simply returns every index of the array.
```
for (let index of animals) {
    console.log(index);
}

/*
    0
    1
    2
*/
```
It is worth noting here that a `for...in` loop is more useful in an `object`.