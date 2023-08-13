export let projects = [];

function projectBuilder(name, projectIndex) { //factory function to build new project object.
    let todos = [];
    function todoDateEditor(todoIndex, newDate) {
        this.todos[todoIndex].dueDate = newDate;
    }
    return {
        name: name,
        projectIndex: projectIndex,
        todos: todos,
        todoDateEditor: todoDateEditor
    }
}
function todoBuilder(title, projectIndex, todoIndex, dueDate = 'No due date.') { //projectIndex refers to the position of the parent project in the array of projects.
    return {
        title: title,
        projectIndex: projectIndex,
        todoIndex: todoIndex,
        dueDate: dueDate
    }
}
export function projectDeleter(projectIndex) {
    projects.splice(projectIndex, 1);
}
export function todoDeleter(projectIndex, todoIndex) {
    projects[projectIndex].todos.splice(todoIndex, 1);
}
// export function todoDateEditor

export function addNewProject(name, projectIndex) {
    projects.push(projectBuilder(name, projectIndex));
}
export function addNewTodo(title, projectIndex, todoIndex, dueDate = 'No due date.') {
    projects[projectIndex].todos.push(todoBuilder(title, projectIndex, todoIndex, dueDate));
}