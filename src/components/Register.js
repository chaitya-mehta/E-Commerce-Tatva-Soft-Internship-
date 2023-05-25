// import React from 'react'
// import { useState } from "react";
// import {useNavigate} from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// export default function Register() {
//   const navigate = useNavigate();
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleRegister = () => {
        
//     if(firstname === "" || lastname === "" || password === "" || email === "" || confirmPassword === "") {
//         return toast("Please fill all information..", {
//             type: "warning",
//         });
//     }
//     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
//         return toast("Invalid Email adderess", {
//             type: "warning",
//         });
//     }
//     else if(password !== confirmPassword) {
//         return toast("Password and Confirm Password are not equal.", {
//             type: "warning",
//         });
//     }
//     else {
//         toast("Registration Completed", {
//             position: "top-center",
//             type: "success"
//         })
//         setTimeout(()=>{
//             navigate("/login");
//         }, 5000);
        
//     }
// }

//   return (
//     <div>
//       <form className="container">
//       <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
//       <h5 className="text mt-2">Personal Information</h5>
//       <p>Please Enter The Followling Information To Create Your Account </p>
//         <div className="row mb-4">
//             <div className="form-group col-md-6">
//             <label htmlFor="firstname">First Name *</label>
//             <input type="text" className="form-control" id="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
//             </div>
//             <div className="form-group col-md-6">
//             <label htmlFor="lastname">Last Name *</label>
//             <input type="text" className="form-control" id="lastname" onChange={(e) => setLastname(e.target.value)} value={lastname}  />
//             </div>
//         </div>
//         <div className="form-group mb-4">
//             <label htmlFor="email">Email Address *</label>
//             <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email}  />
//         </div>
//         <h5>Login Information</h5>
//         <div className="row mb-2 mt-3" >
//             <div className="form-group col-md-6">
//             <label htmlFor="password">Password *</label>
//             <input type="password" className="form-control"  id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
//             </div>
//             <div className="form-group col-md-6 mb-4">
//             <label htmlFor="confirmPassword">Confirm Password *</label>
//             <input type="password" className="form-control" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
//             </div>
//         </div>
//         <button type="submit" className="btn btn-danger mb-4" onClick={handleRegister}>Register</button>
//         <ToastContainer 
//                     position="top-left"
//                     autoClose={5000}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                     theme="light" />
//         </form>
//     </div>
//   )
// }
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const initialStates = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  confpassword: '',
}
export default function Register() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialStates,
    validationSchema:
      Yup.object().shape({
        fname: Yup.string().min(2).max(25).required('Name is required'),
        lname: Yup.string().min(2).max(25).required('Name is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().min(5, 'use least 5 characters').max(255).required('Password is required'),
        confpassword: Yup.string().required('confirm Password is required'),
      })
    ,
    onSubmit: async (vals) => {
      console.log('vals :>> ', vals);
      const { fname, lname, email, password, confpassword } = vals;


      // const res = await fetch("http://localhost:7200/register", {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ fname, lname, email, password })
      // })
      // const data = await res.json();
      // console.log('data :>> ', data);

    }
  })
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
        <h5 className="text mt-2">Personal Information</h5>
        <p>Please Enter The Followling Information To Create Your Account </p>
        <div className="row mb-5">
          <div className="form-group col-md-6">
            <label for="inputFirstName">First Name *</label>
            <input type="text" className="form-control" id="inputFirstName" name='fname' invalid={errors.fname && touched.fname}
              valid={!errors.fname && touched.fname} value={values.fname} onChange={handleChange} onBlur={handleBlur} />
            {errors.fname && touched.fname ? <p style={{ color: 'red' }}>{errors.fname}</p> : null}
          </div>
          <div className="form-group col-md-6">
            <label for="inputLastName">Last Name *</label>
            <input type="text" className="form-control" id="inputLastName" name='lname' invalid={errors.lname && touched.lname}
              valid={!errors.lname && touched.lname} value={values.lname} onChange={handleChange} onBlur={handleBlur} />
            {errors.lname && touched.lname ? <p style={{ color: 'red' }}>{errors.lname}</p> : null}
          </div>
        </div>
        <div className="form-group mb-4">
          <label for="inputEmail4">Email Address *</label>
          <input type="email" className="form-control" id="inputEmail4" name='email' invalid={errors.email && touched.email}
            valid={!errors.email && touched.email} value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email ? <p style={{ color: 'red' }}>{errors.email}</p> : null}
        </div>
        <h5>Login Information</h5>
        <div className="row mb-2 mt-3" >
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password *</label>
            <input type="password" className="form-control" id="inputPassword4" name='password' invalid={errors.password && touched.password}
              valid={!errors.password && touched.password} value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {errors.password && touched.password ? <p style={{ color: 'red' }}>{errors.password}</p> : null}
          </div>
          <div className="form-group col-md-6 mb-4">
            <label for="inputConfirmPassword4">Confirm Password *</label>
            <input type="password" className="form-control" id="inputConfirmPassword4" name='confpassword'
              invalid={errors.confpassword && touched.confpassword} valid={!errors.confpassword && touched.confpassword} value={values.confpassword} onChange={handleChange} onBlur={handleBlur} />
            {errors.confpassword && touched.confpassword ? <p style={{ color: 'red' }}>{errors.confpassword}</p> : null}
          </div>
        </div>
        <button type="submit" className="btn btn-danger mb-4">Register</button>
      </form>
    </div>
  )
}