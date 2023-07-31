function elementBuilder(element, classList, textContent) {  //element builder copied and modified from previous project.
    const xelement = document.createElement(element);
    if (classList != '') {
        if (typeof classList == 'object') {
            classList.forEach(classLabel => {
                xelement.classList.add(classLabel);
            });
        } else xelement.classList.add(classList);
    }
    if (textContent != '') xelement.textContent = textContent;
    return xelement;
}

function todoBuilder(title, description, dueDate, priority) {
    const todoCard = elementBuilder('div', 'todoCard', '');
    const todoTitle = elementBuilder('h3', '', title);
    const todoDescription = elementBuilder('p', '', description);
    const todoDueDate = elementBuilder('p', 'dueDate', dueDate);
    const todoPriority = elementBuilder('p', priority, `${priority} priority`);
    todoCard.append(todoTitle, todoDescription, todoDueDate, todoPriority);
    return todoCard;
}

export function todosContainerUpdater(todos) {
    console.log('hello');
    const todosContainer = document.querySelector('.todosContainer');
    todosContainer.innerHTML = '';
    console.log(todos);
    todos.forEach(todo => {
        console.log('hello');
        todosContainer.appendChild(todoBuilder(todo.title, todo.description, todo.dueDate, todo.priority));
    });
}

