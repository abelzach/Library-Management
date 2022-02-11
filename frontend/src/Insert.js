import React , {useState , useEffect} from 'react'
import Header from './Header'
import axios from 'axios'

function Insert() {

  // const[setid , settitle , setauthor , setcategory , setdescription] = useState('');
  // const[id , title , author , category , description] = useState('');

  const[id , setid] = useState('');
  const[title , settitle] = useState('');
  const[author , setauthor] = useState('');
  const[category , setcategory] = useState('');
  const[description , setdescription] = useState('');

  // const submitReview = () => {
  //   axios.post('http://localhost:3001/');
  // }


  return (
      <>
      <Header/>
      <form>
        <h1>Insert a Book</h1>
        <div className="field">
          <label>Id</label>
          <input type="text" name="id" placeholder="Id" 
          onChange = {e => { setid(e.target.value); }} 
          />
        </div>
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" placeholder="Title"
          onChange = {e => { settitle(e.target.value); }} 
          />
        </div>
        <div className="field">
          <label>Author</label>
          <input type="text" name="author" placeholder="Author" 
          onChange = {e => { setauthor(e.target.value); }} 
          
          />
        </div>
        <div className="field">
          <label>Category</label>
          <input type="text" name="year" placeholder="Category" 
          onChange = {e => { setcategory(e.target.value); }} 
          
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input type="text" name="description" placeholder="Description" 
          onChange = {e => { setdescription(e.target.value); }} 
          
          />
        </div>
        <button onClick = {submitReview}>
          Submit
        </button>
      </form>
      </>
  )
}

export default Insert;