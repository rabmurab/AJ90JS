## Day 28

### Object Oriented Programming

OOP is one of the major approaches to the sofware development process. Objects and classes organize code to describe things and what they can do.

In JavaScript, objects are instances of classes or prototypes. An object is a composite data type that groups together variables (properties) and functions (methods) that are related. Objects are often used to represent real-world entities, concepts, or abstractions.

JavaScript is a versatile language that supports both classica; OOP patterns (using classes) and prototypal OOP (using prototypes). Developers can choose the approach that best fits the requirements of their applications.

OOP principles are crucial for designing maintainable and scalable software in JavaScript.

## Day 29

### ES6 Classes

Before 2015, when ES6 was introduced, JS used `constructors` to do OOP.

Since the introduction of `classes` however, it provides a more cleaner way to follow OOP patterns.

JS still follows a prototype-based inheritance model (more on that in the next section). Classes syntactic sugar over the prototype-based inheritance model which we use to implement OOP concepts.

Thus the introduction of classes in 2015, made it easier for developers to build software around OOP concepts. It also brought similarities to other OOP-based languages like Java and C++.

Here's how to create a `class` in JS
```
class Person {
    constructor(firstName, lastname) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

Now that we've created our `class`, we can create objects by using the `new` keyword:
```
const person1 = new Person("Aliyu", "Imran")
const person2 = new Person("Abubakar", "Yusuf")
```

From what we've seen so far, `classes` are like templates for creating objects.