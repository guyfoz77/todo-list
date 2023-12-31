class Todo {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export let todos = [new Todo('title', 'description', '', 'high')];   //storage of the todos

export function getTodoProperties() {  //gets the properties inputed by the user in the DOM
    const todoTitle = document.querySelector('#todoTitle').value;
    const todoDescription = document.querySelector('#description').value;
    const todoDue = document.querySelector('#dueDate').value;
    const todoPriority = document.querySelector('#priority').value;
    return {todoTitle, todoDescription, todoDue, todoPriority};
}

export function addTodo(title, description, dueDate, priority) {  //adds new todo to todos array.
    todos.push(new Todo(title, description, dueDate, priority));
}

export function deleteTodo(index) {
    todos.splice(index, 1);
}

export function editTodo(property, index, newValue) {
    todos[index][property] = newValue; //todos[index].property
}