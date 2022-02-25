import React, { useState, useEffect } from "react";
import Header from "./Header";
import Axios from "axios";
import "./Issue.css";
import { useLocation } from "react-router-dom";


function refreshPage() {
  window.location.reload(false);
}
function Issue() {

  const {state} = useLocation();
  const { btitle} = state;
  const { bid } = state;
  console.log(btitle);
  console.log(bid);

  var today = new Date();
  var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  var rdate = today.getFullYear() + '/' + (today.getMonth() + 2) + '/' + today.getDate();
  const [cid, setcid] = useState("");
  const [cname, setcname] = useState("");
  const [title, settitle] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/issue", {
      id: cid,
      cname: cname,
      bname: btitle,
      bid: bid,
      date: date,
      retdate: rdate
    }).then(() => {
      alert("successfull insert");
    });
    refreshPage()
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
                name="cid"
                id="cid"
                className="form__input"
                placeholder=" "
                autocomplete="off"
              />
              <label for="cid" className="form__label">
                Customer ID
              </label>
            </div>

          <div className="form-group">
            <div>
              <input
                type="text"
                name="cname"
                id="cname"
                className="form__input"
                placeholder=" "
                autocomplete="off"
              />
              <label for="cname" className="form__label">
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
export default Issue;
