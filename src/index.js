import { projects, addNewProject } from "./projectManager";
import { projectCardBuilder, clearElement } from "./domController";

const newProjectButton = document.querySelector('.newProjectButton');
const projectInput = document.querySelector('.newProjectInput');
const projectList = document.querySelector('.projectList');

newProjectButton.addEventListener('click', e => {
    e.preventDefault();
    if (projectInput.value == '' || null) return;
    clearElement(projectList);
    addNewProject(projectInput.value);
    projects.forEach(project => {
        projectList.append(projectCardBuilder(project.name))
    });
    projectInput.value = '';
})