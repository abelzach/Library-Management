import React, { useState, useEffect } from "react";
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
      id: id,
      title: title,
      author: author,
      category: category,
      description: description,
    }).then(response => { 

      if (response.data.errno === 1062)
        window.alert("Book with same ID already exist");
      else
        window.alert(response.data.sqlMessage);
      window.location.reload();
      window.location.href = "/";
    })
      .catch(error => {
        window.location.reload();
        window.location.href = "/";
    });
      // .catch((err) => {
      //   console.log(err);
      //   window.alert(err);
      
      // });
  };

  return (
    <div className="bbody">
      <div className="ccard">
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
                onChange={(e) => {
                  setid(e.target.value);
                }}
              />
              <label for="id" className="form__label">
                ID
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
    </div>
  );
}
export default Insert;
