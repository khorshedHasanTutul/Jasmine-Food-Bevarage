import React, { useContext, useEffect, useState } from "react";
import { getDivision } from "../../Services/AddressService";
import addressContext from "../../Store/address-context";

const Divisionvalidation = ({clicked}) => {
    const addressCtx=useContext(addressContext)
    const[divisions,setDivisions]=useState([]);
    const[divisionIsTouched,setDivisionIsTouched]=useState(false)
    const[divisionValid,setDivisionIsValid]=useState(false)
    // const divisionChangeHandler=({target})=>{
    //     setDivision(target.value)
    // }
    const divisionIsTouchedHandler=()=>{
        setDivisionIsTouched(true)
    }
    const getDivisionHandler=()=>{
        setDivisions(getDivision)
    }
    const selectDivisionHandler=(item)=>{
        addressCtx.storeDivision(item)
    }

    useEffect(()=>{
      if(clicked){
        if((divisionIsTouched && divisions.length===0)|| (!divisionIsTouched && divisions.length===0)){
            setDivisionIsValid(true)
        }
        else
        setDivisionIsValid(false)
      }

    },[divisions.length,divisionIsTouched,clicked])

  return (
    <div class="custom-input">
      <label for="district">Select Division</label>
      <select 
      id="district"
    //   onChange={divisionChangeHandler}
      onBlur={divisionIsTouchedHandler}
      onClick={getDivisionHandler}
      >
          {
              divisions.map(item=>(
                <option value={item.id} onClick={selectDivisionHandler.bind(null,item)}>{item.name}</option>
              ))
          }
        {/* <option value="">Dhake</option>
        <option value="">Rangpur</option>
        <option value="">Dinajpur</option> */}
      </select>
      {
          (divisionValid)&& <div class="alert alert-error">Division is required.</div>
      }
      {
          (divisionIsTouched && divisions.length===0 && !divisionValid)&& <div class="alert alert-error">Division is required.</div>
      }
    </div>
  );
};

export default Divisionvalidation;
