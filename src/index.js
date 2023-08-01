import { todos, addTodo, getTodoProperties } from "./todo-functions";
import { todosContainerUpdater } from "./domController";

const input = document.querySelector('input[type=button]');
input.addEventListener('click', () => {
    const form = document.querySelector('.newTodo');
    const todoProperties = getTodoProperties();
    addTodo(todoProperties.todoTitle, todoProperties.todoDescription, todoProperties.todoDue, todoProperties.todoPriority);
    console.log(todos);
    todosContainerUpdater(todos);
    form.reset();
})