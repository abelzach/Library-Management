import React , {useState , useEffect} from 'react'
import Header from './Header'
import Axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {
  Grid,
} from "@material-ui/core/";

function Home() {
  
  let navigate = useNavigate(); 
  // const routeChange;

  const [books,setbook] = useState([])
useEffect(() => { 
  Axios.get("http://localhost:3001/api/get").then((response) => {
    console.log(response);
    setbook(response.data);
  })
}, []);
  
  const deleteBook = (Id) => {
    console.log(Id);
    Axios.delete(`http://localhost:3001/api/delete/${Id}`);
  }


  return (
   
      <>
      <Header/>
    <br/><br/><br/><br/>
      <h1>Books available</h1>
      <Grid
            container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            
          >
        {books.map((val) => {
      
      return (
  
        <center>
        <Grid val xs key={val.id}>
        <div class="shadow-lg p-3 mb-5 bg-white rounded" key = {val.id}> 
        <Card className="card1" style={{ height: '15rem' }}>
            <Card.Body>
                <Card.Title>{val.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author : {val.Author}</Card.Subtitle>
                <br />
                <Card.Subtitle className="mb-2 text-muted">Category: {val.Category}</Card.Subtitle>
                <br/>
                <Card.Subtitle className="mb-2 text-muted">Description : {val.Description}</Card.Subtitle>
                  <br />
                  
                  <br />
                  <button
                    className="center"
                  type="submit"
                  variant="primary"
                  onClick = {() => {

                    let path = './issue'; 
                    navigate(path , { state: { btitle : val.Title, bid : val.Id} });
                    }
                  }
                  >
                  <h4 style={{color: 'black'}}>Issue Book</h4>     
                            
                  </button>
                  <button onClick={()=> {deleteBook(val.Id)}}>Delete book</button>
            </Card.Body>
            </Card>
            <br />
            <br/>
            </div>
            </Grid>
    </center>
    )
      
    })}
      </Grid>
      <br/><br/><br/><br/>
      </>
  )
}

export default Home;