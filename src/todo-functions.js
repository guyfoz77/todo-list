let todos = [new Todo('Get kitchen cleaner', '', 'tomorrow', 'high')];

class Todo {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export {todos};