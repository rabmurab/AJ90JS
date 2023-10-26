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
