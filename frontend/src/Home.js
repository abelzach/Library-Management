import React , {useState , useEffect} from 'react'
import Header from './Header'
import Axios from "axios";


function Home() {
  
useEffect(() => { 
  Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response);
  })
},[])
return (
      <>
      <Header/>
        <h1>Home</h1>
      </>
  )
}

export default Home;