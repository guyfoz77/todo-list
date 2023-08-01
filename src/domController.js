import { deleteTodo, editTodo } from "./todo-functions";
import { todos } from "./todo-functions";

function elementBuilder(element, classList, textContent, dataName) {  //element builder copied and modified from previous project.
    const xelement = document.createElement(element);
    if (classList != '') {
        if (typeof classList == 'object') {
            classList.forEach(classLabel => {
                xelement.classList.add(classLabel);
            });
        } else xelement.classList.add(classList);
    }
    if (textContent != '') {
        xelement.value = textContent;
        xelement.textContent = textContent;
    }
    if (dataName != '') xelement.dataset.element = dataName;
    return xelement;
}

function todoBuilder(title, description, dueDate, priority, dataValue) {   //builds a todo card
    function onBlurEventListener(e) {
        editTodo(e.target.dataset.element, e.target.parentNode.parentNode.dataset.index, e.target.value);
    }

    const todoCard = elementBuilder('div', 'todoCard', '', '', '');
        todoCard.dataset.index = dataValue; //datavalue corresponds to the todo's index in the container array.
    //main elements
    const todoTitle = elementBuilder('input', 'todoTitle', title, 'title');
        todoTitle.addEventListener('blur', (e) => onBlurEventListener(e));
    const todoDescription = elementBuilder('input', 'todoDescription', description, 'description');
        todoDescription.addEventListener('blur', (e) => onBlurEventListener(e));
    const todoDueDate = elementBuilder('input', 'todoDueDate', dueDate, 'dueDate');
        todoDueDate.type = 'date';
        todoDueDate.addEventListener('blur', (e) => onBlurEventListener(e));
    const todoPriority = elementBuilder('select', [priority, 'todoPriority'], `${priority} priority`, 'priority');
        todoPriority.setHTML('<option value="Low">Low</option><option value="Medium">Medium</option><option value="High">High</option>');
        todoPriority.addEventListener('blur', (e) => onBlurEventListener(e));
    const todoDelete = elementBuilder('button', 'delete', 'Delete', '');

    const todoTopRow = elementBuilder('div', 'todoTop', '', '');
        todoTopRow.append(todoTitle, todoDueDate)
    const todoBottomRight = elementBuilder('div', 'todoBottomRight', '', '');
        todoBottomRight.append(todoPriority, todoDelete);
    const todoBottomRow = elementBuilder('div', 'todoBottom', '', '');
        todoBottomRow.append(todoDescription)

    
    todoDelete.addEventListener('click', (e) => { //deletes the todo from todo array then repopulates todo list.
        deleteTodo(e.target.parentNode.parentNode.dataset.index);
        todosContainerUpdater(todos);
    })

    todoCard.append(todoTopRow, todoBottomRow, todoBottomRight);
    return todoCard;
}

export function todosContainerUpdater(todos) {  //Writes the todo elements to the todo container.
    const todosContainer = document.querySelector('.todosContainer');
    todosContainer.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        todosContainer.appendChild(todoBuilder(todos[i].title, todos[i].description, todos[i].dueDate, todos[i].priority, i));
    }
}

