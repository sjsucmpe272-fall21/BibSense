import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation/Navbar';
import {BrowserRouter} from 'react-router-dom';
import HomeBackground from './components/Home/HomeBackground';
// import Background from './components/Background';

//App Component
class App extends Component {
  render() {
    return (
      //to route to different pages
      <BrowserRouter>
      {/* <div >
        <Navigation/> 
        </div> */}
   
        {/* <div  style={{
          backgroundImage: `url("http://localhost:3000/images/backgroundHome.jpg")` ,
          backgroundRepeat: "no-repeat",
          width: "100",
          height: "150px",
          backgroundSize: "cover",
          position: "relative",
          opacity: "0.9",}}  > */}
             <div >        
      
          <Navigation/> 
      {/* <Background/> */}
    
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;
