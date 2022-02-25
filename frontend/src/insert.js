import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Axios from "axios";
import "./Insert.css";


function Insert() {
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      id: 20,
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
            {/* <div>
              <input
                type="text"
                name="id"
                id="id"
                className="form__input"
                placeholder=" "
                autocomplete="off"
              />
              <label for="id" className="form__label">
                ID
              </label>
            </div> */}
            <div>
              <input
                type="text"
                name="title"
                id="title"
                className="form__input"
                placeholder=" "
                autocomplete="off"
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
              <label for="title" className="form__label">
                Title
              </label>
            </div>

            <div>
              <br />

              <input
                type="text"
                name="author"
                id="author"
                className="form__input"
                placeholder=" "
                autocomplete="off"
                onChange={(e) => {
                  setauthor(e.target.value);
                }}
              />
              <label for="author" className="form__label">
                Author
              </label>
            </div>

            <div>
              <br />
              <input
                type="text"
                name="category"
                id="category"
                className="form__input"
                placeholder=" "
                autocomplete="off"
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              />
              <label for="category" className="form__label">
                Category
              </label>
            </div>
            <div>
              <div>
                <br />
                <input
                  type="textbox"
                  name="description"
                  id="description"
                  className="form__input"
                  placeholder=" "
                  autocomplete="off"
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                />
                <label for="description" className="form__label">
                  Description
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
