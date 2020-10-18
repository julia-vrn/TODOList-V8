let items = [];
let workitems = [];

module.exports = class Task {
    constructor(task){
        this.description = task;
    }

    saveTask() {
        items.push(this);
    }

    saveWorkTask() {
        workitems.push(this);
    }

    static fetchTasks() {
        return items;
    }

    static fetchWorkItems() {
        return workitems;
    }
}