import React, { useContext, useEffect, useState } from "react";
import Select from "../../../utilities/select/Select";
import { getDivision, storeAddressObj } from "../../Services/AddressService";
import addressContext from "../../Store/address-context";

const Divisionvalidation = ({ clicked }) => {
  const divisionsa = [
    { id: 10, name: "Barisal" },
    { id: 20, name: "Chittagong" },
    { id: 30, name: "Dhaka" },
    { id: 40, name: "Khulna" },
    { id: 50, name: "Rajshahi" },
    { id: 55, name: "Rangpur" },
    { id: 60, name: "Sylhet" },
    { id: 80, name: "Mymensing" },
  ];
  const addressCtx = useContext(addressContext);
  const [divisions, setDivisions] = useState([]);
  const [divisionIsTouched, setDivisionIsTouched] = useState(false);
  const [divisionValid, setDivisionIsValid] = useState(false);
  const getCtxStoreAddress = addressCtx?.getStoreAddressCtx;
  const getIfFindActiveType = getCtxStoreAddress?.find(
    (item) => item.type === addressCtx.getActiveType
  );

  const [selectedValue, setSelectedValue] = useState("");
  // const divisionChangeHandler=({target})=>{
  //     setDivision(target.value)
  // }
  const divisionIsTouchedHandler = () => {
    setDivisionIsTouched(true);
  };
  const getDivisionHandler = () => {
    setDivisions(getDivision);
  };
  const selectDivisionHandler = (item) => {
    addressCtx.storeDivision(item);
    storeAddressObj.division.name = item.name;
    storeAddressObj.division.id = item.id;
  };
  useEffect(() => {
    if (getIfFindActiveType) {
      setSelectedValue(getIfFindActiveType.division);
    }
  }, [getIfFindActiveType]);

  console.log({ selectedValue });

  useEffect(() => {
    if (clicked) {
      if (
        (divisionIsTouched && divisions.length === 0) ||
        (!divisionIsTouched && divisions.length === 0)
      ) {
        setDivisionIsValid(true);
      } else setDivisionIsValid(false);
    }
  }, [divisions.length, divisionIsTouched, clicked]);

  return (
    <Select
      label="Select Region"
      name="division"
      options={divisionsa || []}
      onSelect={selectDivisionHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedValue}
      // previewText={
      //   districtStatus === "pending" ? "Loading data..." : ""
      // }
      // error={divisionInputIsInvalid && "Region is required"}
      // onBlur={divisionBlurHandler}
    />
  );
};

export default Divisionvalidation;
