import React, { useState } from "react";
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

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var rdate = today.getFullYear() + '-' + (today.getMonth() + 2) + '-' + today.getDate();
  console.log(date)
  const [cid, setcid] = useState("");
  const [cname, setcname] = useState("");
  const [title, settitle] = useState("");
  const [bbid, setbid] = useState("");
  const [ddate, setdate] = useState("");
   const [retdate, setretdate] = useState("");
   
  // setdate(date);
  // setretdate(rdate);
  //setbid(bid);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/issue1", {
      id: cid,
      cname: cname,
      bname: btitle,
      bid: bid,
      date: ddate,
      retdate: retdate
    }).then(() => {
      alert("successfull insert");
      window.location.reload();
      window.location.href = '/return'
    });
    
    // console.log(cid)
    // console.log(cname)
    // console.log(btitle)
    // console.log(bid)
    //console.log(date)
  };

  return (
    <>
      <div className="issuecard">
        <form>
          <h1>Issue Book</h1>
          <div className="form-groupi">
            <div>
              <input
                type="text"
                name="cid"
                id="cid"
                className="form__inputi"
                placeholder=" "
                autocomplete="off"
                onChange={(e) => {
                  setcid(e.target.value);
                }}
              />
              <label for="cid" className="form__labeli">
                Customer ID
              </label>
            </div>

          <div className="form-groupi">
            <div>
              <input
                type="text"
                name="cname"
                id="cname"
                className="form__inputi"
                placeholder=" "
                  autocomplete="off"
                  onChange={(e) => {
                    setcname(e.target.value);
                  }}
              />
              <label for="cname" className="form__labeli">
                Customer Name
              </label>
            </div>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                className="form__inputi"
                placeholder=" "
                autocomplete="off"
                value = {btitle}
                onChange={(e) => {
                  settitle(btitle);
                }}
                />
                <label for="title" className="form__labeli">
                Book Name
              </label>
                <input
                name="bbid"
                id="bbid"
                className="form__inputi"
                placeholder=" "
                autocomplete="off"
                value = {bid}
                onChange={(e) => {
                  setbid(bid);
                }}
                />
                <label for="bbid" className="form__labeli">
                Book id
                </label>
                <br/>
                <input
                  type="date"
                name="ddate"
                id="ddate"
                className="form__inputi"
                placeholder=" "
                autocomplete="off"
                //value = {date}
                onChange={(e) => {
                  setdate(e.target.value);
                }}
                />
                <label for="ddate" className="form__labeli">
                Date of issueing
              </label>
                <input
                type="date"
                name="retdate"
                id="retdate"
                className="form__inputi"
                placeholder=" "
                autocomplete="off"
                
                //value = {rdate}
                onChange={(e) => {
                  setretdate(e.target.value);
                }}
                />
                <label for="retdate" className="form__labeli">
                Date of return
              </label>
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