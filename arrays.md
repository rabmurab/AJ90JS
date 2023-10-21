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
