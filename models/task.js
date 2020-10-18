const fs = require('fs');
const path = require('path');
//const p =  __dirname+'/data' + '/tasks.json';
const p1 = path.join(path.dirname(process.mainModule.filename), 'data', 'tasks.json');
const p2 = path.join(path.dirname(process.mainModule.filename), 'data', 'workTasks.json');
//let items = [];
let workitems = [];

module.exports = class Task {
    constructor(task){
        this.description = task;
    }

    saveTask() {
        //items.push(this);
       
        fs.readFile(p1, (error, fileContent) => {
            let tasks = [];
            
            if(!error) {
                tasks = JSON.parse(fileContent);
            }
            tasks.push(this);
            fs.writeFile(p1, JSON.stringify(tasks), (error) => {
                console.log(error);
            });
        });

    }

    saveWorkTask() {
        //workitems.push(this);
        fs.readFile(p2, (error, fileContent) => {
            let tasks = [];
            
            if(!error) {
                tasks = JSON.parse(fileContent);
            }
            tasks.push(this);
            fs.writeFile(p2, JSON.stringify(tasks), (error) => {
                console.log(error);
            });
        });
        
    }

    static fetchTasks(cb) {
        fs.readFile(p1, (err, fileContent) => {
            if(err){
                cb([]);
            }

            cb(JSON.parse(fileContent));
        });
    };

    static fetchWorkItems(cb) {
        fs.readFile(p2, (err, fileContent) => {
            if(err){
                cb([]);
            }

            cb(JSON.parse(fileContent));
        });
       //return workitems;
    };
}