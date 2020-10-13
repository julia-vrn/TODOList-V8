const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

let items = ["wash the dog", "water the plants"];
let workitems = [];

app.get('/', (req, res) => {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    console.log(items);
    let day = today.toLocaleDateString("en-US", options);   
    res.render('index.ejs', {date: day, toDoItems: items});
});

app.post('/', (req, res) => {
    if(req.body.list === "Work To Do") {
        workitems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        items.push(req.body.newItem);
        res.redirect('/');
    }

    console.log(req.body.newItem);
   
});

app.get("/work", (req, res) => {
    res.render("index.ejs", {date: "Work To Do", toDoItems: workitems});
});

/*app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workitems.push(item);
    res.redirect("/work");
});*/

app.listen(5000, () => {
    console.log('Server is running on Port 5000');
})