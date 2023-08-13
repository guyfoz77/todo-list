import { projects } from "./projectManager";
import { elementBuilder, projectCardBuilder, todoCardBuilder, clearElement } from "./domController";

const projectListContainer = document.querySelector('.projectList');
const todoContainer = document.querySelector('.todoContainer');

function projectListBuilder() {
    clearElement(projectListContainer);
    for (let i = 0; i < projects.length; i++) {
        let newProjectCard = projectCardBuilder(projects[i].name);
        newProjectCard.dataset.projectID = i;
        projectListContainer.append(newProjectCard);
    }
}

//todoCardBuilder(title, id, dueDate = 'No due date')
export function todoListBuilder(activeProjectIndex) {
    clearElement(todoContainer);
    for (let i = 0; i < projects[activeProjectIndex].todos.length; i++) {
        let newTodoCard = todoCardBuilder(projects[activeProjectIndex].todos[i].title, projects[activeProjectIndex].todos.dueDate);
        newTodoCard.dataset.projectID = activeProjectIndex;
        newTodoCard.dataset.todoID = i;
        todoContainer.append(newTodoCard);
    }
}

export function pageLoader() {
    projectListBuilder();
}