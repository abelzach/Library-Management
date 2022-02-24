import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Axios from "axios";
import "./Issue.css";
import DatePicker from 'react-date-picker';
import { useLocation } from "react-router-dom";

function Insert() {

  const {state} = useLocation();
  const { btitle} = state;
  const { bid } = state;
  console.log(btitle);
  console.log(bid);

  var today = new Date();
  var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  var rtoday = new Date();
  var rdate = rtoday.getDate() + '/' + (today.getMonth() + 2) + '/' + today.getFullYear();
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      id: 14,
      title: title,
      author: author,
      category: category,
      description: description,
    }).then(() => {
      alert("successfull insert");
    });
  };

  return (
    <>
      <div className="card">
        <form>
          <h1>Issue Book</h1>
          <div className="form-group">
            <div>
              <input
                type="text"
                name="id"
                id="id"
                className="form__input"
                placeholder=" "
                autocomplete="off"
              />
              <label for="id" className="form__label">
                Customer ID
              </label>
            </div>

          <div className="form-group">
            <div>
              <input
                type="text"
                name="id"
                id="id"
                className="form__input"
                placeholder=" "
                autocomplete="off"
              />
              <label for="id" className="form__label">
                Customer Name
              </label>
            </div>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                className="form__input"
                placeholder=" "
                autocomplete="off"
                value = {btitle}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                />
               
                <div > 
                <br /> <br />
                  <h3>Issue Date: {date}</h3>
                  <br/>
                  <h3>Return Date: {rdate}</h3>
                  </div>
            </div>
                
              <br />

            </div>
            <button className="center" onClick={submitReview}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <Header />
    </>
  );
}
export default Insert;
