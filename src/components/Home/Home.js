import React, { Component } from "react";
import HomeBackground from "./HomeBackground";
import {Navigate} from 'react-router-dom';
import BibDisplay from "../BibDisplay/BibDisplay";


class Home extends Component {
  
constructor(props) {
  super(props);

  this.state = {
    searchValue: "",
    runners: [],
    name: "",
    bib_number: 0,
    imgFileName: "",
    img_name: [],
    img_links: [],
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSearch = this.handleSearch.bind(this);
}



handleChange(event) {
  this.setState({ searchValue: event.target.value });
  fetch("http://localhost:3001")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then((data) => {
        // console.log(data[4].bib_number); //3219
        // console.log(data.map(x => x.bib_number)); //[5074, 3542, 5074, 3381, 3219, 3317]
      
        this.setState({ runners: data });
      });
    })
    .catch((err) => {
      console.log(err);
    });
   
}



handleSearch(event) {
  event.preventDefault();
  console.log(this.state.searchValue);
  // console.log(typeof(this.state.searchValue));
  console.log(this.state.runners);
  // console.log(typeof(this.state.runners[0].bib_number));

  // this.state.runners.map(x, index) => ()
  let x = false;
  for (let i = 0; i < this.state.runners.length; i++) {
    // console.log(this.state.runners[i].bib_number);
    // console.log(this.state.searchValue);

    if (this.state.runners[i].event_name == this.state.searchValue) {
      console.log("working");
      x = true;
    } else console.log("flag is false");
  }

  


  console.log(x);

 x == true ? (
   window.location.assign('/bib')
      ) : alert("not working")
}

render() {
  const { runners, searchValue, img_name, name } = this.state;

  return (
    <>

      
      <div className="container-fluid">
          
          <div >
        <h3> Enter Event</h3>

        <form className="form" >
          {/* <label> Bib number </label> */}
          <input
            type="text"
            placeholder="Search event name"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        
        
        </form>
        <button value="Submit" className="button" onClick={this.handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          Search
        </button>
        </div>

  </div>
  
  
       
  </>
   
  );
}
}
export default Home;



