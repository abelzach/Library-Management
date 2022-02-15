import React , {useState , useEffect} from 'react'
import Header from './Header'
import Axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Home.css";
function Home() {
  
  const [books,setbook] = useState([])
useEffect(() => { 
  Axios.get("http://localhost:3001/api/get").then((response) => {
    console.log(response);
    setbook(response.data);
  })
},[])
return (
      <>
      <Header/>
    <br/><br/><br/><br/>
    <h1>Books available</h1>
    {books.map((val) => {
      return (
        <center>
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <Card style={{ height: '15rem' }}>
            <Card.Body>
                <Card.Title>{val.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author : {val.Author}</Card.Subtitle>
                <br />
                <Card.Subtitle className="mb-2 text-muted">Category: {val.Category}</Card.Subtitle>
                <br/>
                <Card.Subtitle className="mb-2 text-muted">Description : {val.Description}</Card.Subtitle>
                <br />
                <Button
                    className="center"
                  type="submit"
                  variant="primary">
                                <h4 style={{color: 'black'}}>Issue Book</h4>                    
                </Button>
            </Card.Body>
            </Card>
            <br />
            <br/>
    </div>
    </center>
    )
      
    })}
      </>
  )
}

export default Home;