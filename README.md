# Library-Management

A library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates.

---

## Functions Available

1. Librarian can insert the book details and delete the books availabe.
2. The books can be issued using customer's id and name and can be returned.

## Technologies Used
1. React.js for frontend
2. Node.js for Backend
3. MySql for Database


## How to set up
1. Download the source Code.
2. Open Mysql Workbench and create 2 tables book and issue.<br/><br/>
    2.1. Create Table book with the following columns.<br/>
      Columns:  <br/>
      Id int PK <br/>
      Title varchar(100) <br/>
      Author varchar(100) <br/>
      Category varchar(100) <br/>
      Description varchar(100) <br/>
      avail varchar(25)<br/><br/>
    2.2. Create Table issue with the following columns.<br/>
      Columns:<br/>
      custId int PK <br/>
      custName varchar(45) <br/>
      bookName varchar(45) <br/>
      id int <br/>
      Date varchar(45) <br/>
      retDate varchar(45) <br/>

3. Open the frontend folder and execute the command "npm install" to add the node modules needed.
4. Open the frontend folder and execute the command "npm start" to run the frontend.
5. Open the Backend folder and execute the command "npm run dev" to run the backend.
