import { projects } from "./projectManager";
import { elementBuilder, projectCardBuilder, todoCardBuilder, clearElement } from "./domController";

const projectListContainer = document.querySelector('.projectList');
const todoContainer = document.querySelector('.todoContainer');

function projectListBuilder() {
    clearElement(projectListContainer);
    for (let i = 0; i < projects.length; i++) {
        projectListContainer.append(projectCardBuilder(projects[i].name, i));
    }
}

//todoCardBuilder(title, id, dueDate = 'No due date')
export function todoListBuilder(activeProjectIndex) {
    clearElement(todoContainer);
    for (let i = 0; i < projects[activeProjectIndex].todos.length; i++) {
        let newTodoCard = todoCardBuilder(projects[activeProjectIndex].todos[i].title, i, projects[activeProjectIndex].todos.dueDate);
        todoContainer.append(newTodoCard);
    }
}

export function pageLoader() {
    projectListBuilder();
}