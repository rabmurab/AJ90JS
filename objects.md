## Day 26

#### Objects and Their Properties

Objects are one of the core data types and are used to store collections of key-value pairs. They are a fundamental part of the language and are widely used in web development for storing and managing data. They are a key element of creating and working with complex data structure.

An object literal is a comma-separated list of key-value pairs closed in curly braces `{}`. An object can represent a real world object like a person:
```
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "johndoe@example.com"
};
```
Similar to an array, we can access the data in an object with the square bracket notation, `[]`. In addition to this, we can also use the dot notation, `.`.
```
console.log(person["firstName"]);   // John
console.log(person.lastName);   // Doe
```

## Day 27

#### Object Methods

##### Object.hasOwnProperty()

The `Object.hasOwnProperty()` method is used to check if an object has a property with the specified name (including its own properties as well as those inherited from its prototype). It returns a boolean value, indicating whether the object has the specified property.

Here's its syntax:
> obj.hasOwnProperty(prop)

If the property `prop` is in the object in question, i.e., the object has the property, the method returns `true`, else, it returns false.

##### `Set`

A `Set` is a special type collection, that is, set of values (without keys), with a distinct collection of elementst, that is, each element may only occur once.

It has many methods, but the main ones are:
- `new Set()` that takes an `iterable` object and copies values from it into a `set`.

- `set.add()` adds elements to an already created `set` and returns the entire `set`.

- `set.delete()` removes a specified element within the parentheses from a `set`. If the element does't exist, this method returns `false`

- `set.has()` returns `true` if an element passed to it is in the `set`, otherwise it returns `false`.

- `set.clear()` removes all elements in a `set`.

- `set.size` returns the number of elements in a `set`.

```
let set = new Set();

let john = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};

set.add(john)
set.add(pete)
set.add(mary)
set.add(john)
set.add(mary)

console.log(set.size);  // 3

for (let person of set) {
    console.log(person.name);   // John Pete Mary
}
```

##### `Map`

`Map` is a collection of keyed data items, just like an `object` literal, the difference being that `Map` allows keys of any type.

`Map` has the following properties:

- `new Map()` creates a new map.

- `map.set(key, value)` stores the `value` by the `key`

- `map.get(key)` returns the `value` by the `key`, `undefined` if `key` doesn't exist in `map`

- `map.has(key)` returns `true` if the `key` exists, `false` otherwise.

- `map.delete(key)` removes the element by the `key`.

- `map.clear()` removes all elements from the `map`

- `map.size` returns the current element count.

```
let map = new Map();

map.set('1', 'str');    // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log(map.get(1));    // 'num1'
console.log(map.get('1'));  // 'str1'
console.log(map.size);      // 3
```