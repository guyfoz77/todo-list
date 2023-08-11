const todoContainer = document.querySelector('.todoContainer');

export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function elementBuilder(element, classList, textContent, dataName) {  //element builder copied and modified from previous project.
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

export function projectCardBuilder(name, id) {
    let projectCard = elementBuilder('div', 'projectCard', name, id);
    return projectCard;
}

export function todoCardBuilder(title, id, dueDate = 'No due date') { //id will be the position of the todo in the storage array.
    let todoCard = elementBuilder('div', 'todoCard', '', id);
    let complete = elementBuilder('div', 'completeButton', '', '');
        complete.addEventListener('click', () => {
            todoCard.classList.add('complete');
        })
    let todoTitle = elementBuilder('h2', '', title, '');
    let todoDueDate = elementBuilder('h3', '', dueDate, '');
        todoDueDate.addEventListener('click', (e) => {
            //code here to load a date picker which can allow the user to edit the date on the todo.
        })
    todoCard.append(complete, todoTitle, todoDueDate);
    return todoCard;
}
