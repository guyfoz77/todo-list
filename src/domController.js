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
    const todoCard = elementBuilder('div', 'todoCard', '', '', '');
        todoCard.dataset.index = dataValue; //datavalue corresponds to the todo's index in the container array.
    //main elements
    const todoTitle = elementBuilder('input', 'todoTitle', title, 'title');
        todoTitle.addEventListener('blur', (e) => {
            console.log(e.target.parentNode.dataset.index);
        })
    const todoDescription = elementBuilder('input', 'todoDescription', description, 'description');
    const todoDueDate = elementBuilder('input', 'todoDueDate', dueDate, 'dueDate');
        todoDueDate.type = 'date';
    const todoPriority = elementBuilder('select', [priority, 'todoPriority'], `${priority} priority`, 'priority');
        todoPriority.setHTML('<option value="Low">Low</option><option value="Medium">Medium</option><option value="High">High</option>');
    const todoDelete = elementBuilder('button', 'delete', 'Delete', '');
    
    todoDelete.addEventListener('click', (e) => { //deletes the todo from todo array then repopulates todo list.
        deleteTodo(e.target.parentNode.dataset.index);
        todosContainerUpdater(todos);
    })

    todoCard.append(todoTitle, todoDescription, todoDueDate, todoPriority, todoDelete);
    return todoCard;
}

export function todosContainerUpdater(todos) {  //Writes the todo elements to the todo container.
    const todosContainer = document.querySelector('.todosContainer');
    todosContainer.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        todosContainer.appendChild(todoBuilder(todos[i].title, todos[i].description, todos[i].dueDate, todos[i].priority, i));
    }
}

