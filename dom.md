## Day 31

### Document Object Model

When a web page is loaded, the browser creates a `Document Object Model`, or simply `DOM`, of the page.

The `HTML DOM` is constucted as a tree of objects. With the object model, JavaScript gets the power it needs to create dynamic HTML.

JS can create, change, delete and react to all HTML and CSS elements and events in a page.

The `HTML DOM` can be accessed  with JS (and with other programming languages).

In the `DOM`, all `HTML` elements are defined as objects.

The programming interface is the properties and methods of each object.

A `property` is a value that you can get or set (like changing the element the content of an `HTML` element).

A `method` is an action you can do (like add or deleting an `HTML` element).
```
<html>
    <body>
        <p id="demo"></p>

        <script>
            document.getElementById("demo").innerHTML = "Hello World!";
        </script>
    </body>
</html>
```

In this example, `getElementById` is a `method`, while `innerHTML` is a `property`.

The most common way to access an `HTML` element is to use the `id` of the element.

In the example above the `getElementById` method used `id="demo"` to find the element.

The `innerHTML` is the easiest way to get the content of an element and is useful for getting or replacing the content of `HTML` elements.

#### Finding HTML Elements

We can find `HTML` elements mainly using one of three methods:
- `document.getElementById(id)` finds an element by element id
- `document.getElementsByTagName(name)` finds elements by tag name
- `documnent.getElementsByClassName(name)` finds elements by class name

## Day 32
#### Changing HTML Elements

|Property|Description|
|--------|-----------|
|element.innerHTML =  new html content|Change the inner HTML of an element|
|element.attribute = new value|Change the attribute value of an HTML element|
|element.style.property = new style|Change the style of an HTML element|

|Method|Description|
|------|-----------|
|element.setAttribute(attribute, value)|Change the attribute value of an HTML element|

#### Adding and Deleting Elements

|Method|Description|
|------|-----------|
|document.createElement(element)|Create an HTML element|
document.removeChild(element)|Remove an HTML element|
document.appendChild(element)|Add an HTML element|
document.replaceChild(new, old)|Replace an HTML element|
document.write(text)|Write into the HTML output stream|