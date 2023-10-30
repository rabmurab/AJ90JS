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


## Day 30

#### Constructors and Prototypes

Constructors are functions used to create an object. It can also be used within a class to create the template for making other similar objects.

Prototypes are objects that contain properties and methods that are inherited by objects created from a constructor.

Let's take a deep dive into each.

##### Constructors

A constructor is a special function that is used to create and initialize objects. Constructors are typically used to create multiple objects with similar properties and methods.

Here's how to define and use a constructor:
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}
```

To create an object from a constructor function, we use the `new` keyword:
```
const bob = new Person('Bob', 30)
const charlie = new Person('Charlie', 25)
```

The `constructor` function can include properties and methods that will be shared by all objects created using it. However, we typically add methods to prototype to avoid redundancy.

##### Prototypes

The prototype is an object that every constructor function has by default. It is used to store methods and properties that are shared by all objects created from the same constructor.

Here's how to work with prototypes:
```
// Add a method to prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
};

// Use a method from prototype
bob.greet(); // Hello my name is Bob and I am 30 years old
charlie.greet(); // Hello my name is Charlie and I am 25 years old
```

In JS, if a method or property is not found on an object, the runtime will look for it in the object's prototype. If no found there, the search continues up the prototype chain until it reaches the root, `Object.prototype`.

Prototype plays a sinificant role in implementing inheritance in JS. By creating a prototype chain, you can have objects inherit methods and properties from other objects, mimicking traditional class-based inheritance.

```
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log(`The ${this.name} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log('Woof! Woof!');
};

const myDog = new Dog('Buddy');
myDog.makeSound(); // Outputs: The Buddy makes a sound.
myDog.bark();      // Outputs: Woof! Woof!

```