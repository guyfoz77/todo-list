import { projects, populateBrowserStorage } from "./projectStorage";

export class Project {
    constructor(name, projectIndex, todos = []) {
        this.name = name;
        this.projectIndex = projectIndex;
        this.todos = todos;
    }

    static addNewTodo(title, projectIndex, dueDate = '') {
        const todo = {
            title: title,
            projectIndex: projectIndex,
            // todoIndex: todoIndex,
            completed: false,
            dueDate: dueDate
        }
        projects[projectIndex].todos.push(todo);
        populateBrowserStorage(projects);
    }

    static projectDeleter(projectIndex) {
        projects.splice(projectIndex, 1);
        populateBrowserStorage(projects);
    }

    static addNewProject(name, projectIndex) {
        projects.push(new Project(name, projectIndex));
        populateBrowserStorage(projects);
    }

    markTodoCompleteToggle(todoIndex) {
        this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
        populateBrowserStorage(projects);
    }

    todoDateEditor(todoIndex, newDate) {
        this.todos[todoIndex].dueDate = newDate;
        populateBrowserStorage(projects);
    }

    todoDeleter(todoIndex) {
        this.todos.splice(todoIndex, 1);
        populateBrowserStorage(projects);
    }
}

// function projectBuilder(name, projectIndex) { //factory function to build new project object.
//     let todos = [];
//     function todoDateEditor(todoIndex, newDate) {
//         this.todos[todoIndex].dueDate = newDate;
//     }
//     function todoDeleter(todoID){
//         this.todos.splice(todoID, 1);
//     }
//     return {
//         name: name,
//         projectIndex: projectIndex,
//         todos: todos,
//         todoDateEditor: todoDateEditor,
//         todoDeleter: todoDeleter
//     }
// }
// function todoBuilder(title, projectIndex, todoIndex, dueDate = 'No due date.') { //projectIndex refers to the position of the parent project in the array of projects.
//     return {
//         title: title,
//         projectIndex: projectIndex,
//         todoIndex: todoIndex,
//         completed: false,
//         dueDate: dueDate
//     }
// }
// export function projectDeleter(projectIndex) {
//     Project.projects.splice(projectIndex, 1);
// }

// export function addNewProject(name, projectIndex) {
//     projects.push(new Project(name, projectIndex));
// }
// export function addNewTodo(title, projectIndex, todoIndex, dueDate = 'No due date.') {
//     Project.projects[projectIndex].todos.push(todoBuilder(title, projectIndex, todoIndex, dueDate));
// }