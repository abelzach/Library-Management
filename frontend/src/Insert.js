import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import "./Insert.css";

function Insert() {
  const initialValues = {
    id: "",
    title: "",
    author: "",
    category: "",
    description: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (
      Object.keys(formValues).length === 0 && isSubmit ? (
        <div>Signed in Successfully</div>
      ) : (
        console.log(formValues)
      )
    ) {
      setFormValues({ ...initialValues });
    }
  });

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.author) {
      errors.author = "Author is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.id) {
      errors.id = "Id is required";
    }
    if (!values.category) {
      errors.category = "Category is required";
    }
    return errors;
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <h1>Insert a Book</h1>
        <div className="field">
          <label>ID</label>
          <br />
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={formValues.id}
            onChange={handleChange}
          />
        </div>
        <p>{formValues.id}</p>
        <div className="field">
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <p>{formValues.title}</p>
        <div className="field">
          <label>Author</label>
          <br />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formValues.author}
            onChange={handleChange}
          />
        </div>
        <p>{formValues.author}</p>
        <div className="field">
          <label>Category</label>
          <br />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formValues.category}
            onChange={handleChange}
          />
        </div>
        <p>{formValues.category}</p>
        <div className="field">
          <div className="descr">
            <label>Description</label>
            <br />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formValues.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <p>{formValues.description}</p>
        <br />
        <button classname="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Insert;
