import React from 'react'
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
        
    if(firstname === "" || lastname === "" || password === "" || email === "" || confirmPassword === "") {
        return toast("Please fill all information..", {
            type: "warning",
        });
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        return toast("Invalid Email adderess", {
            type: "warning",
        });
    }
    else if(password !== confirmPassword) {
        return toast("Password and Confirm Password are not equal.", {
            type: "warning",
        });
    }
    else {
        toast("Registration Completed", {
            position: "top-center",
            type: "success"
        })
        setTimeout(()=>{
            navigate("/login");
        }, 5000);
        
    }
}

  return (
    <div>
      <form className="container">
      <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
      <h5 className="text mt-2">Personal Information</h5>
      <p>Please Enter The Followling Information To Create Your Account </p>
        <div className="row mb-4">
            <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name *</label>
            <input type="text" className="form-control" id="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name *</label>
            <input type="text" className="form-control" id="lastname" onChange={(e) => setLastname(e.target.value)} value={lastname}  />
            </div>
        </div>
        <div className="form-group mb-4">
            <label htmlFor="email">Email Address *</label>
            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email}  />
        </div>
        <h5>Login Information</h5>
        <div className="row mb-2 mt-3" >
            <div className="form-group col-md-6">
            <label htmlFor="password">Password *</label>
            <input type="password" className="form-control"  id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <div className="form-group col-md-6 mb-4">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input type="password" className="form-control" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
        </div>
        <button type="submit" className="btn btn-danger mb-4" onClick={handleRegister}>Register</button>
        <ToastContainer 
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
        </form>
    </div>
  )
}