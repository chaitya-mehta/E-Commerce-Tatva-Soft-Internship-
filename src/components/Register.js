import React from 'react'
import { useFormik } from 'formik'
// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import Login from './Login';

const initialStates = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  confpassword: '',
}
export default function Register() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
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
      alert(JSON.stringify(values, null, 2));
      // const { fname, lname, email, password, confpassword } = vals; 
      console.log('vals :>> ', vals);

      // const res = await fetch("http://localhost:7200/register", {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ fname, lname, email, password })
      // })
      // const data = await res.json();
      // console.log('data :>>  ', data);

    },
  });
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
        <button type="submit" className="btn btn-danger mb-4"  >Register</button>
      </form>
    </div>
  )
}