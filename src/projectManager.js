export let projects = [
    {
        name: 'Test Project',
        todos: [
            {
                title: 'Test todo',
                dueDate: null
            }
        ]
    }
]

export function addNewProject(name) {
    projects.push({
        name: name,
        todos: []
    })
}