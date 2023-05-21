import React from 'react'
export default function Register() {
  return (
    <div>
      <form className="container">
      <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
      <h5 className="text mt-2">Personal Information</h5>
      <p>Please Enter The Followling Information To Create Your Account </p>
        <div className="row mb-4">
            <div className="form-group col-md-6">
            <label for="inputFirstName">First Name *</label>
            <input type="text" className="form-control" id="inputFirstName" />
            </div>
            <div className="form-group col-md-6">
            <label for="inputLastName">Last Name *</label>
            <input type="text" className="form-control" id="inputLastName" />
            </div>
        </div>
        <div className="form-group mb-4">
            <label for="inputEmail4">Email Address *</label>
            <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <h5>Login Information</h5>
        <div className="row mb-2 mt-3" >
            <div className="form-group col-md-6">
            <label for="inputPassword4">Password *</label>
            <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="form-group col-md-6 mb-4">
            <label for="inputConfirmPassword4">Confirm Password *</label>
            <input type="password" className="form-control" id="inputConfirmPassword4"/>
            </div>
        </div>
        <button type="submit" className="btn btn-danger mb-4">Register</button>
        </form>
    </div>
  )
}