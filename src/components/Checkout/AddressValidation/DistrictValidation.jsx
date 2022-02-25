import React, { useContext, useEffect, useState } from "react";
import { getDistricts } from "../../Services/AddressService";
import addressContext from "../../Store/address-context";

const DistrictValidation = ({clicked}) => {
    const ctx=useContext(addressContext)
    const getDivisionCtx=ctx.getDivision;
    const[districts,setDistricts]=useState([]);
    const[districtIsTouched,setDistrictIsTouched]=useState(false)
    const[districtValid,setDistrictIsValid]=useState(false)
    // const districtChangeHandler=({target})=>{
    //     setDistricts(target.value)
    // }
    const districtIsTouchedHandler=()=>{
        setDistrictIsTouched(true)
    }
    
    const getDistrictHandler=()=>{
        setDistricts(getDistricts(getDivisionCtx.id))
    }
    const selectDistrictHandler=(item)=>{
        ctx.storeDistrict(item)
    }

    useEffect(()=>{
      if(clicked){
        if((districtIsTouched && districts.length===0)|| (!districtIsTouched && districts.length===0)){
            setDistrictIsValid(true)
        }
        else
        setDistrictIsValid(false)
      }
        
    },[districts.length,districtIsTouched,clicked])


  return (
    <div class="custom-input">
      <label for="district">Select District</label>
      <select
        id="district"
        // onChange={districtChangeHandler}
        onBlur={districtIsTouchedHandler}
        onClick={getDistrictHandler}
        >
            {
                districts.map(item=>(
                    <option value={item.id} onClick={selectDistrictHandler.bind(null,item)}>{item.name}</option>
                ))
            }
        {/* <option value="">Dhake</option>
        <option value="">Rangpur</option>
        <option value="">Dinajpur</option> */}
      </select>
      {
          (districtValid)&& <div class="alert alert-error">District is required.</div>
      }
      {
          (districtIsTouched && districts.length===0 && !districtValid)&& <div class="alert alert-error">District is required.</div>
      }
    </div>
  );
};

export default DistrictValidation;
