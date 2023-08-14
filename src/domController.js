import { Projects } from "./projectManager";
import { projects } from "./projectStorage";

let activeProjectIndex = 0;
const projectListContainer = document.querySelector('.projectList');
const newProjectButton = document.querySelector('.newProjectButton');
const projectInput = document.querySelector('.newProjectInput');
const projectList = document.querySelector('.projectList');
const todoContainer = document.querySelector('.todoContainer');

export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

newProjectButton.addEventListener('click', e => { //will need to rework this to add to storage array rather than directly to DOM
    e.preventDefault();
    if (projectInput.value == '' || null) return;
    clearElement(projectList);
    Project.addNewProject(projectInput.value);
    pageLoader();
    projectInput.value = '';
})

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
        console.log('click');
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
        let newTodoCard = todoCardBuilder(projects[activeProjectIndex].todos[i].title, projects[activeProjectIndex].todos.dueDate);
        newTodoCard.dataset.projectID = activeProjectIndex;
        newTodoCard.dataset.todoID = i;
        todoContainer.append(newTodoCard);
    }
}

export function todoCardBuilder(title, dueDate = 'No due date') { 
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
            todoDueDatePicker.addEventListener('blur', (e) => {
                const projectID = e.target.parentNode.parentNode.dataset.projectID;
                const todoID = e.target.parentNode.parentNode.dataset.todoID;
                let newDueDate = todoDueDatePicker.value;
                Projects.projects[projectID].todoDateEditor(todoID, newDueDate);
                if (newDueDate != '') todoDueDate.textContent = `Due ${newDueDate}`;
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
