//  1. Get all needed elements by their ids and store them in variables

let todoList = document.getElementById("todo-list");

let inputTodo = document.getElementById("input-todo");

let addTodo = document.getElementById("add-todo");


//  2. Create a function to add to an event listener

function addTodoFunc(event) {

    //  ** This is an attempt to register the input with the enter key **
    if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {

        // 2. a) Create a variable to create a html element
        let todoItems = document.createElement('ol');

        // 2. b) Add a css class to the created element to style it. This is only fo decoration and has nothing to do with our logic or app
        todoItems.classList.add('added-todo');

        // 2. c) Make the text of the html element to be the value typed in the input field
        todoItems.innerText = inputTodo.value;

        // 2. d) Append this value to the container div created in the html code
        todoList.appendChild(todoItems);

        // 2. e) After appending, set the value of the input field to an empty string (this clears the field)
        inputTodo.value = "";

        // We have now created our To-Do successfully. Let us ad some aditional functionality to the list.

        // Strike through a completed task by clicking on it
        todoItems.addEventListener('click', function() {
            todoItems.style.textDecoration = "line-through";
        })

        // Delete the task when you no longer want to see it by double-clicking on it
        todoItems.addEventListener('dblclick', function() {
            todoList.removeChild(todoItems);
        })
    }
}

// 3. Add an event listener to our button
addTodo.addEventListener('click', addTodoFunc);

// 4. Add an event listener that submits when we press enter.
addTodo.addEventListener('keypress', addTodoFunc);

