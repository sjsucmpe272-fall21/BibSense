import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

class Contact extends Component{
    render(){
        return(
            <div >
              
            <h1 style={{fontFamily:"Copperplate", fontSize:"60px", color: "black"}}>Contact page</h1>
            
            <p style={{fontFamily:"Copperplate", fontSize:"20px"}}>
           
        

              <a  className="btn btn-light btn-outline-success "href="https://github.com/sjsucmpe272-fall21/BibSense">Github</a>

            </p>
          
    
            </div>
        )
    }
}
export default Contact;