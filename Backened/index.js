const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "library",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM book WHERE avail=1;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log("All good");
    });
});

app.delete("/api/delete/:Id", (req, res) => {
    const id = req.params.Id;
    const sqlDelete = "DELETE FROM book WHERE Id = ?";

    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    });
});

app.get("/api/pending", (req, res) => {
    const sqlSelect = "SELECT * FROM issue;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log("All good");
    });
});

app.delete("/api/deletec/:Id/:BId", (req, res) => {
    const id = req.params.Id;
    const bid = req.params.BId;
    const sqlDelete = "DELETE FROM issue WHERE custId = ?";
    const avail = true;
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    });

    var sql = "UPDATE book SET avail = ? WHERE Id = ?";
    db.query(sql, [avail, bid], (err, result) => {
        if (err) console.log(err);
    });


});

app.post("/api/issue1", (req, res) => {
    const id = req.body.id;
    const cname = req.body.cname;
    const bname = req.body.bname;
    const bid = req.body.bid;
    const date = req.body.date;
    const retdate = req.body.retdate;
    const avail = false;
    const sqlIssue =
        "INSERT INTO issue (custId, custName,bookName,id,Date,retDate) VALUES (?,?,?,?,?,?);";
    db.query(sqlIssue, [id, cname, bname, bid, date, retdate], (err, result) => {
        if (err) console.log(err);
        else res.send("Success");
    });

    var sql = "UPDATE book SET avail = ? WHERE Id = ?";
    db.query(sql, [avail, bid], (err, result) => {
        if (err) console.log(err);
    });
});
app.post("/api/insert", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const author = req.body.author;
    const category = req.body.category;
    const desc = req.body.description;
    const avail = 1;
    const sqlInsert =
        "INSERT INTO book (Id ,Title ,Author ,Category ,Description,avail) VALUES (?,?,?,?,?,?);";
    db.query(
        sqlInsert, [id, title, author, category, desc, avail],
        (err, result) => {
            res.send(result);
        }
    );
});

app.get("/", (req, res) => {
    console.log("No probs");
    res.send("welcome :)");
});

app.listen(3001, () => {
    console.log("Running on port 3001");
});