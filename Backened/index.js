const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host : 'localhost',
    user : 'root', 
    password:'password', 
    database : 'library',
});

app.get("/" , (req , res) => {
    
    const sqlInsert = "INSERT INTO book(Id , Title , Autor , Category , Description) VALUES('4' , 'Harry Potter and the Philospher Stone' , 'J.K Rowling' , 'Fiction' , 'Thriller Novel' );";
    db.query(sqlInsert, (err , result)=> {
        if(err)
        throw err;
        else
        console.log('No probs');

        res.send("welcome :)");
    
    } )
        // res.send("welcome :)");
})

app.listen(3001 , () => {
    console.log("Running on port 3001");
})

