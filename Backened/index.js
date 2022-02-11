const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root', 
    password:'password', 
    database : 'library',
});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM book;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log("All good")
    });
});

app.post("/api/insert", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const author = req.body.author;
    const category = req.body.category;
    const desc = req.body.description;

    const sqlInsert = "INSERT INTO book (Id ,Title ,Author ,Category ,Description) VALUES (?,?,?,?,?);";
    db.query(sqlInsert, [id, title, author, category, desc], (err, result) => {
        res.send(result);
    });
});

app.get("/", (req, res) => { 
        console.log('No probs');
        res.send("welcome :)");
})

app.listen(3001 , () => {
    console.log("Running on port 3001");
})