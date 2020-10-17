const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const date = require( "../dateGenerator.js");
const router = express.Router();

let items = ["wash the dog", "water the plants"];
let workitems = [];

router.get('/', (req, res) => {
    let day = date();
    console.log(items);
    res.render('index.ejs', {date: day, toDoItems: items});
});

router.post('/', (req, res) => {
    if(req.body.list === "Work To Do") {
        workitems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        items.push(req.body.newItem);
        res.redirect('/');
    }

    console.log(req.body.newItem);
   
});

router.get("/work", (req, res) => {
    res.render("index.ejs", {date: "Work To Do", toDoItems: workitems});
});

module.exports = router;