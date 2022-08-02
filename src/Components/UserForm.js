import React from "react";
import { useState } from "react";

function UserForm ({submitFunction}){
  const [inputName, setInputName] = useState('')
  const [inputImage, setInputImage] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputLocation, setInputLocation] = useState('')
  const [inputAge, setInputAge] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      "email": inputEmail,
      "location": inputLocation,
      "age": inputAge,
      "name": inputName,
      "image": inputImage
    }
    fetch('http://localhost:3001/users', {
      method: "POST",
      Headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    submitFunction(newUser)
    e.target.reset()
  }



    return(
        <div className="container">
      <form className="add-user-form" onSubmit={handleSubmit}>
        <h3>New Employee User</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter first and last name..."
          className="input-text"
          onChange={(e) => setInputName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Profile picure... "
          className="input-text"
          onChange={(e) => setInputImage(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your company email..."
          className="input-text"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Enter your location..."
          className="input-text"
          onChange={(e) => setInputLocation(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Enter your age..."
          className="input-text"
          onChange={(e) => setInputAge(e.target.value)}
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