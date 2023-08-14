import { Project } from "./projectManager";
import { projects } from "./projectStorage";
import { pageLoader } from "./pageLoader";

export let activeProjectIndex = 0;
const projectListContainer = document.querySelector('.projectList');
const newProjectButton = document.querySelector('.newProjectButton');
    const projectInput = document.querySelector('.newProjectInput');
const projectList = document.querySelector('.projectList');
const todoContainer = document.querySelector('.todoList');
const newTodoButton = document.querySelector('.newTodoButton');
    const newTodoInput = document.querySelector('.newTodoInput');
    const newTodoDate = document.querySelector('.newTodoDate');

newProjectButton.addEventListener('click', e => { //will need to rework this to add to storage array rather than directly to DOM
    e.preventDefault();
    if (projectInput.value == '' || null) return;
    clearElement(projectList);
    Project.addNewProject(projectInput.value);
    pageLoader();
    projectInput.value = '';
})
newTodoButton.addEventListener('click', e => {
    e.preventDefault();
    Project.addNewTodo(newTodoInput.value, activeProjectIndex, newTodoDate.value);
    pageLoader();
    newTodoInput.value = '';
    newTodoDate.value = '';
})


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

function projectCardBuilder(name) {
    let projectCard = elementBuilder('div', 'projectCard', name, '');
    projectCard.addEventListener('click', e => {
        activeProjectSwitcher(e.target.dataset.projectID);
    })
    return projectCard;
}

export function projectListBuilder() {
    clearElement(projectListContainer);
    for (let i = 0; i < projects.length; i++) {
        let newProjectCard = projectCardBuilder(projects[i].name);
        newProjectCard.dataset.projectID = i;
        projectListContainer.append(newProjectCard);
    }
}

function activeProjectSwitcher(newProjectIndex) {
    activeProjectIndex = newProjectIndex;
    todoListBuilder(activeProjectIndex);
}

export function todoListBuilder(activeProjectIndex) {
    clearElement(todoContainer);
    for (let i = 0; i < projects[activeProjectIndex].todos.length; i++) {
        let newTodoCard = todoCardBuilder(projects[activeProjectIndex].todos[i].title, projects[activeProjectIndex].todos[i].dueDate);
        newTodoCard.dataset.projectID = activeProjectIndex;
        newTodoCard.dataset.todoID = i;
        todoContainer.append(newTodoCard);
    }
}

export function todoCardBuilder(title, dueDate) { 
    let todoCard = elementBuilder('div', 'todoCard', '', '');
    let complete = elementBuilder('div', 'completeButton', '', '');
        complete.addEventListener('click', (e) => {
            const todoID = e.target.parentNode.dataset.todoID;
            todoCard.classList.toggle('complete');
            if (complete.textContent == '') complete.textContent = 'x'; else complete.textContent = '';
            Project.markTodoCompleteToggle(todoID);
        })
    let todoTitle = elementBuilder('h2', '', title, '');
    let todoDateHolder = elementBuilder('div', 'dateHolder', '', '');
    let todoDueDate = elementBuilder('h3', '', '', '');
        if (dueDate == '') todoDueDate.textContent = 'No due date'; else todoDueDate.textContent = `Due ${dueDate}`;
    todoDateHolder.append(todoDueDate);
    let todoDueDatePicker = elementBuilder('input', '', '', '');
        todoDueDatePicker.setAttribute("type", "date");
        if (dueDate == '') todoDueDatePicker.value = ''; else todoDueDatePicker.value = dueDate;
            todoDueDatePicker.addEventListener('blur', (e) => {
                const projectID = e.target.parentNode.parentNode.dataset.projectID;
                const todoID = e.target.parentNode.parentNode.dataset.todoID;
                let newDueDate = todoDueDatePicker.value;
                projects[projectID].todoDateEditor(todoID, newDueDate);
                if (newDueDate != '') {
                    todoDueDate.textContent = '';
                    todoDueDate.textContent = `Due ${newDueDate}`
                };
                todoDateHolder.removeChild(todoDateHolder.firstChild);
                todoDateHolder.append(todoDueDate);
            })
        todoDueDate.addEventListener('click', () => {
            todoDateHolder.removeChild(todoDateHolder.firstChild);
            todoDateHolder.append(todoDueDatePicker);
            todoDueDatePicker.focus();
        })
        

    todoCard.append(complete, todoTitle, todoDateHolder);
    return todoCard;
}
