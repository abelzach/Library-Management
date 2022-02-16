import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Axios from "axios";
import "./Insert.css";
import { useLocation } from "react-router-dom";

function Insert() {

  const {state} = useLocation();
  const { btitle } = state;

  console.log(btitle);
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

  // const validate = (values) => {
  //     const errors = {};
  //     if (!values.title) {
  //         errors.title = "Title is required";
  //     }
  //     if (!values.author) {
  //         errors.author = "Author is required";
  //     }
  //     if (!values.description) {
  //         errors.description = "Description is required";
  //     }
  //     if (!values.id) {
  //         errors.id = "Id is required";
  //     }
  //     if (!values.category) {
  //         errors.category = "Category is required";
  //     }
  //     return errors;
  // };

  return (
    <>
      <div className="card">
        <form>
          <h1>Insert a Book</h1>
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
              <label for="title" className="form__label">
                Book Issued
              </label>
            </div>

              <br />
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
