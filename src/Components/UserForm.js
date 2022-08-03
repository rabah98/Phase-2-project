import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';


function UserForm ({submitFunction}){
  const [inputName, setInputName] = useState('')
  const [inputImage, setInputImage] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputLocation, setInputLocation] = useState('')
  const [inputAge, setInputAge] = useState('')
  console.log(inputName, inputAge, inputEmail, inputImage, inputLocation)
  function handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      email: inputEmail,
      location: inputLocation,
      age: inputAge,
      name: inputName,
      image: inputImage
    }
    fetch('http://localhost:3001/users', {
      method: "POST",
      headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then((data) => console.log(data))

    submitFunction(newUser)
    e.target.reset()
  }



    return(
        <div className="container">
      <Form  onSubmit={handleSubmit}>
        <h3>New Employee User</h3>
        {/* <input
          type="text"
          name="name"
          placeholder="Enter first and last name..."
          className="input-text"
          onChange={(e) => setInputName(e.target.value)}
        /> */}
        <Form.Group className="input-text" controlId="userName" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first and last name" onChange={(e) => setInputName(e.target.value)}/>
        </Form.Group>
        <br />
        {/* <input
          type="text"
          name="image"
          placeholder="Profile picure... "
          className="input-text"
          onChange={(e) => setInputImage(e.target.value)}
        /> */}
        <Form.Group className="input-text" controlId="userPicture"  >
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control type="text" placeholder="Profile picture...." onChange={(e) => setInputImage(e.target.value)} />
        </Form.Group>
        <br />
        {/* <input
          type="text"
          name="email"
          placeholder="Enter your company email..."
          className="input-text"
          onChange={(e) => setInputEmail(e.target.value)}
        /> */}
        <Form.Group className="input-text" controlId="userEmail" >
          <Form.Label>Company Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your company email" onChange={(e) => setInputEmail(e.target.value)} />
        </Form.Group>
        <br />
        {/* <input
          type="text"
          name="location"
          placeholder="Enter your location..."
          className="input-text"
          onChange={(e) => setInputLocation(e.target.value)}
        /> */}
        <Form.Group className="input-text" controlId="userLocation" >
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter your location..." onChange={(e) => setInputLocation(e.target.value)} />
        </Form.Group>
        <br />
        {/* <input
          type="text"
          name="age"
          placeholder="Enter your age..."
          className="input-text"
          onChange={(e) => setInputAge(e.target.value)}
        /> */}
         <Form.Group className="input-text" controlId="userAge"  >
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter your age..."  onChange={(e) => setInputAge(e.target.value)}/>
        </Form.Group>
        <br />
        <input
          type="submit"
          name="submit"
          value="Create"
          className="submit"
        />
      </Form>
    </div>
    )
}

export default UserForm

{/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group> */}
//THIS HAS ROUTE (NEWUSER)