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

export function pageLoader() {
    projectListBuilder();
}