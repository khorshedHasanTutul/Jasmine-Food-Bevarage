import React, { useContext, useEffect, useState } from "react";
import { getAreas, storeAddressObj } from "../../Services/AddressService";
import addressContext from "../../Store/address-context";

const AreaValidation = ({ clicked }) => {
  const ctxAddress = useContext(addressContext);
  const getAreaCtx = ctxAddress.getDistrict;
  const [areas, setAreas] = useState([]);
  const [areaIsTouched, setAreaIsTouched] = useState(false);
  const [areaValid, setAreaIsValid] = useState(false);

  // const areaChangeHandler=({target})=>{
  //     setArea(target.value)
  // }
  const areaIsTouchedHandler = () => {
    setAreaIsTouched(true);
  };
  const getAreaHandler = () => {
    setAreas(getAreas(getAreaCtx.districtId));
  };
  const selectAreaHandler = (item) => {
    console.log(item)
    ctxAddress.storeArea(item);
    storeAddressObj.area.name = item.name;
    storeAddressObj.area.id = item.areaId;
  };
  useEffect(() => {
    if (clicked) {
      if (
        (areaIsTouched && areas.length === 0) ||
        (!areaIsTouched && areas.length === 0)
      ) {
        setAreaIsValid(true);
      } else setAreaIsValid(false);
    }
  }, [areas.length, areaIsTouched, clicked]);

  return (
    <div class="custom-input">
      <label for="district">Select Area</label>
      <select
        id="district"
        //   onChange={areaChangeHandler}
        onBlur={areaIsTouchedHandler}
        onClick={getAreaHandler}
      >
        {areas.map((item) => (
          <option
            value={item.areaId}
            onClick={selectAreaHandler.bind(null, item)}
          >
            {item.name}
          </option>
        ))}
        {/* <option value="">Dhake</option>
        <option value="">Rangpur</option>
        <option value="">Dinajpur</option> */}
      </select>
      {areaValid && <div class="alert alert-error">Area is required.</div>}
      {areaIsTouched && areas.length === 0 && !areaValid && (
        <div class="alert alert-error">Area is required.</div>
      )}
    </div>
  );
};

export default AreaValidation;
