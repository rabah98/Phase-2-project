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
            Pages:
            <NavLink to= "/"  exact style={linkStyles} activeStyle={{background: "lightblue"}}>
              Home
            </NavLink>
            <NavLink to= "/profile"  exact style={linkStyles} activeStyle={{background: "lightblue"}}>
              People
            </NavLink>
            <NavLink to= "/form" exact style={linkStyles} activeStyle={{background: "lightblue"}}>
              Sign Up
            </NavLink>
        </div>
    )
}

export default NavBar

