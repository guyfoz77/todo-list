import { projects } from "./projectManager";

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

export function projectCardBuilder(name) {
    let projectCard = elementBuilder('div', 'projectCard', name, '');
    return projectCard;
}

export function todoCardBuilder(title, , dueDate = 'No due date') { 
    let todoCard = elementBuilder('div', 'todoCard', '', '');
    let complete = elementBuilder('div', 'completeButton', '', '');
        complete.addEventListener('click', () => {
            todoCard.classList.add('complete');
        })
    let todoTitle = elementBuilder('h2', '', title, '');
    let todoDateHolder = elementBuilder('div', 'dateHolder', '', '');
    let todoDueDate = elementBuilder('h3', '', dueDate, '');
    todoDateHolder.append(todoDueDate);
    let todoDueDatePicker = elementBuilder('input', '', '', '');
        todoDueDatePicker.setAttribute("type", "date");
        todoDueDatePicker.value = dueDate
            todoDueDatePicker.addEventListener('blur', () => {
                // projects[].todos[id] //how to identify which project to modify??
            })
        todoDueDate.addEventListener('click', () => {
            todoDateHolder.removeChild(todoDateHolder.firstChild);
            todoDateHolder.append(todoDueDatePicker);
            todoDueDatePicker.focus();
        })
    todoCard.append(complete, todoTitle, todoDateHolder);
    return todoCard;
}
