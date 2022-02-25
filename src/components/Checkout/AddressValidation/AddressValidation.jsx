import React, { useEffect, useState } from "react";

const AddressValidation = ({clicked}) => {
    const[address,setAddress]=useState('');
    const[addressIsTouched,setAddressIsTouched]=useState(false)
    const[addressValid,setAddressIsValid]=useState(false)
    const addressChangeHandler=({target})=>{
        setAddress(target.value)
    }
    const addressIsTouchedHandler=()=>{
        setAddressIsTouched(true)
    }
    useEffect(()=>{
      if(clicked){
        if((addressIsTouched && address.length===0)|| (!addressIsTouched && address.length===0)){
            setAddressIsValid(true)
        }
        else
        setAddressIsValid(false)
      }
        
    },[address.length,addressIsTouched,clicked])
  return (
    <div class="address-textarea">
      <label for="message">Address</label>
      <textarea 
      class="effect2" 
      name="" 
      id="message" 
      required
      onChange={addressChangeHandler}
      onBlur={addressIsTouchedHandler}
      >
          {address}
      </textarea>
      {
          (addressValid)&& <div class="alert alert-error">Address is required.</div>
      }
      {
          (addressIsTouched && address.length===0 && !addressValid)&& <div class="alert alert-error">Address is required.</div>
      }
    </div>
  );
};

export default AddressValidation;
