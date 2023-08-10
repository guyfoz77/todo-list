import { projects, addNewProject } from "./projectManager";
import { projectCardBuilder } from "./domController";

const newProjectButton = document.querySelector('.newProjectButton');
const projectInput = document.querySelector('.newProjectInput');
const projectList = document.querySelector('.projectList');

newProjectButton.addEventListener('click', e => {
    e.preventDefault();
    if (projectInput.value == '' || null) return;
    projectList.append(projectCardBuilder(projectInput.value));
    projectInput.value = '';
})