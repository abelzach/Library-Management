import React from 'react'
import Header from './Header'

function Insert() {
  return (
      <>
      <Header/>
      <form>
        <h1>Insert a Book</h1>
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div className="field">
          <label>Author</label>
          <input type="text" name="author" placeholder="Author" />
        </div>
        <div className="field">
          <label>Publish Year</label>
          <input type="text" name="year" placeholder="Year" />
        </div>
        <div className="field">
          <label>Description</label>
          <input type="text" name="description" placeholder="Description" />
        </div>
        <button classname="btn" type="submit">
          Submit
        </button>
      </form>
      </>
  )
}

export default Insert;