const date = require( "../dateGenerator.js");
let items = ["wash the dog", "water the plants"];
let workitems = [];

exports.getMainPage = (req, res) => {
    let day = date();
    console.log(items);
    res.render('index.ejs', {date: day, toDoItems: items});
};

exports.postNewItem = (req, res) => {
    if(req.body.list === "Work To Do") {
        workitems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        items.push(req.body.newItem);
        res.redirect('/');
    }     
};


exports.getWorkPage =  (req, res) => {
    res.render("index.ejs", {date: "Work To Do", toDoItems: workitems});
};