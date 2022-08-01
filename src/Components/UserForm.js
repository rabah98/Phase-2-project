import React from "react";

function UserForm (){
    return(
        <div className="container">
      <form className="add-user-form">
        <h3>New Employee User</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter first and last name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Profile picure... "
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your company email..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Enter your location..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Enter your age..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create"
          className="submit"
        />
      </form>
    </div>
    )
}

export default UserForm


//THIS HAS ROUTE (NEWUSER)