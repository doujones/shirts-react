import React from "react";
import { useForm, ErrorMessage } from 'react-hook-form'
import './Register.css'


const Register = () => {
  const {register, errors, handleSubmit, getValues, formState, reset} = useForm({
    validateCriteriaMode: "all",
    mode: "onChange"
  });

  return (
    <div className="form-box">
    <h1>Register</h1>
    <form className="form">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input className="form-control" 
        name="username"
        type="username"
        ref={register({
          required: "Username is required",
          maxLength: {
            value: 20,
            message: "Username should be between 5 and 20 characters",
          },
          minLength: {
            value: 5,
            message: "Username should be between 5 and 20 characters",
          }
        })}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input className="form-control" 
        name="email"
        type="email"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Password</label>
        <input className="form-control" 
        name="password"
        type="password"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Confirm Password</label>
        <input className="form-control"
        name="ConfirmPassword"
        />
      </div>
    </form>
    </div>
  );
}

export default Register;

