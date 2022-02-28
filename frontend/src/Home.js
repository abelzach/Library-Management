import React , {useState , useEffect} from 'react'
import Header from './Header'
import Axios from "axios";
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {
  Grid,
} from "@material-ui/core/";

function refreshPage() {
  window.location.reload(false);
}
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
    refreshPage()
  }

  return (
    
      <>
      
      
      <div className="hbody">
      <div className="container">
    
      <h1><div className='h1style'>Books Available</div></h1>
      
      <Grid
            container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
            
            // direction="row"
            justifyContent="space-around"
            // alignItems="flex-start"
            
          >
        {books.map((val) => {
      
      return (
  
        <center>
        <Grid val xs key={val.id}>
        <div className="shadow" key = {val.id}> 
        <div className="card" >
            <div className='card_body'>
                <div className='Card_title'>{val.Title}</div>
                <div className='Card_SubtitleA'>Author : {val.Author}</div>
                
                <div className='Card_Subtitle'>Category: {val.Category}</div>
                
                <div className='Card_Subtitled'>Description : {val.Description}</div>
                
                  <button
                    className="b1"
                  type="submit"
                  variant="primary"
                  onClick = {() => {

                    let path = './issue'; 
                    navigate(path , { state: { btitle : val.Title, bid : val.Id} });
                    }
                  }
                  >
                  <h4>Issue Book</h4>     
                            
                  </button>
                  <h4>
                  <button className='b2' onClick={()=> {deleteBook(val.Id)}}>Delete book</button></h4>
            </div>
            </div>
            
            </div>
            </Grid>
            
    </center>
      )
      
    })}
      </Grid>
      </div>
      </div>
      <Header/>
      </>
  )
}

export default Home;