import "./App.css";
import Home from "./Home.js";
import Insert from "./insert"
import Pending from "./Pending";
import Issue from './Issue'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Routes>
                 <Route exact path='/' element={< Home/>}></Route>
                 <Route exact path='/insert' element={< Insert/>}></Route>
                 <Route exact path='/issue' element={< Issue/>}></Route>
                 <Route exact path='/return' element={<Pending/>}></Route>
          </Routes>
      
    </Router>
  );
}

export default App;
