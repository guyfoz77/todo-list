import { projects, addNewProject, addNewTodo } from "./projectManager";
import { clearElement } from "./domController";
import { pageLoader, todoListBuilder } from "./pageLoader";

const newProjectButton = document.querySelector('.newProjectButton');
const projectInput = document.querySelector('.newProjectInput');
const projectList = document.querySelector('.projectList');

let activeProjectIndex = 0;

newProjectButton.addEventListener('click', e => { //will need to rework this to add to storage array rather than directly to DOM
    e.preventDefault();
    if (projectInput.value == '' || null) return;
    clearElement(projectList);
    addNewProject(projectInput.value);
    pageLoader();
    projectInput.value = '';
    console.log(projects);
})

addNewProject('test project', 0);
addNewTodo('Test todo', 0, 0);
addNewTodo('another test todo', 0, 1);
addNewProject('second test project', 1);
addNewTodo('second test todo', 1, 0);
addNewTodo('Yet another thing to do', 1, 1);
console.log(projects);


todoListBuilder(0);
pageLoader();
