import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles = {
        display: "inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white"
      }
    
    
    return(
        <div>
            <NavLink to= "/"  exact style={linkStyles} activeStyle={{background: "#ADD8E6"}}>
              Home
            </NavLink>
            <NavLink to= "/profile"  exact style={linkStyles} activeStyle={{background: "#ADD8E6"}}>
              People
            </NavLink>
            <NavLink to= "/form" exact style={linkStyles} activeStyle={{background: "#ADD8E6"}}>
              SignUp
            </NavLink>
        </div>
    )
}

export default NavBar

