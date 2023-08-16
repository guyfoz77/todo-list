import { Project } from "./projectManager";
import { pageLoader } from "./pageLoader";



if (window.localStorage.projects == null) {
    Project.addNewProject('test project', 0);
    Project.addNewTodo('Test todo', 0);
    Project.addNewTodo('another test todo', 0);
    Project.addNewProject('second test project', 1);
    Project.addNewTodo('second test todo', 1);
    Project.addNewTodo('Yet another thing to do', 1);
}

// window.localStorage.removeItem('projects');
// console.log(window.localStorage.projects);



pageLoader();
