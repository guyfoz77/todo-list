import { projects, addNewProject } from "./projectManager";
import { clearElement } from "./domController";
import { pageLoader, todoListBuilder } from "./pageLoader";

const newProjectButton = document.querySelector('.newProjectButton');
const projectInput = document.querySelector('.newProjectInput');
const projectList = document.querySelector('.projectList');

newProjectButton.addEventListener('click', e => { //will need to rework this to add to storage array rather than directly to DOM
    e.preventDefault();
    if (projectInput.value == '' || null) return;
    clearElement(projectList);
    addNewProject(projectInput.value);
    pageLoader();
    projectInput.value = '';
    console.log(projects);
})

pageLoader();
todoListBuilder(0);