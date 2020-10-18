const date = require( "../dateGenerator.js");
const Task = require('../models/task');
//let items = ["wash the dog", "water the plants"];
//let workitems = [];

exports.getMainPage = (req, res) => {
    const items = Task.fetchTasks();
    let day = date();
    console.log(items);
    res.render('index.ejs', {date: day, toDoItems: items});
};

exports.postNewItem = (req, res) => {
    if(req.body.list === "Work To Do") {
        const workItem = new Task(req.body.newItem);
        workItem.saveWorkTask();
        //workitems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        const item = new Task(req.body.newItem);
        item.saveTask();
        res.redirect('/');
    }     
};


exports.getWorkPage =  (req, res) => {
    const workItems = Task.fetchWorkItems();
    res.render("index.ejs", {date: "Work To Do", toDoItems: workItems});
};