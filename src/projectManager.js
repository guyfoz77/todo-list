export let projects = []

export function addNewProject(name) {
    projects.push({
        name: name,
        todos: []
    })
}