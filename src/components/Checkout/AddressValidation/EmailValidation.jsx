import React, { useState } from "react";

const EmailValidation = () => {
    const[email,setEmail]=useState('')
    
    const emailChangeHandler=({target})=>{
        setEmail(target.value)
    }

  return (
    <div class="custom-input">
      <label for="email">Email</label>
      <input 
      type="text" 
      name="" 
      id="email" 
      required="" 
      value={email}
      onChange={emailChangeHandler}
      />
      {/* <div class="alert alert-error">Email is required.</div> */}
    </div>
  );
};

export default EmailValidation;
