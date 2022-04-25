import React, { useContext, useEffect, useState } from "react";
import { addressDivisions } from "../../../lib/endpoint";
import Select from "../../../utilities/select/Select";
import { getDivision, storeAddressObj } from "../../Services/AddressService";
import { http } from "../../Services/httpService";
import addressContext from "../../Store/address-context";

const Divisionvalidation = ({
  clicked,
  getDistrictHandler,
  fixDivision,
  setDivisionId,
}) => {
  const addressCtx = useContext(addressContext);
  const [divisionList, setDivisionList] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState({});
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
  // const getDivisionHandler = () => {
  //   setDivisions(getDivision);
  // };
  const selectDivisionHandler = (item) => {
    addressCtx.storeDivision(item);
    storeAddressObj.division.name = item.name;
    storeAddressObj.division.id = item.id;
  };

  const getDivisionsHttp = () => {
    http.get({
      url: addressDivisions,
      before: () => {},
      successed: (data) => {
        setDivisionList(data.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };
  const divisionSelectHandler = (divisionList) => {
    setSelectedDivision(divisionList);
    getDistrictHandler(divisionList.id);
  };

  useEffect(() => {
    getDivisionsHttp();
  }, []);

  useEffect(() => {
    if (fixDivision) {
      setSelectedValue(fixDivision);
      setSelectedDivision(fixDivision);
      setDivisionId(fixDivision.id);
    }
  }, [fixDivision, setDivisionId]);

  console.log({ selectedValue });

  // useEffect(() => {
  //   if (clicked) {
  //     if (
  //       (divisionIsTouched && divisions.length === 0) ||
  //       (!divisionIsTouched && divisions.length === 0)
  //     ) {
  //       setDivisionIsValid(true);
  //     } else setDivisionIsValid(false);
  //   }
  // }, [divisions.length, divisionIsTouched, clicked]);

  return (
    <Select
      label="Select Region"
      name="division"
      options={divisionList || []}
      onSelect={divisionSelectHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedDivision}
      // previewText={
      //   districtStatus === "pending" ? "Loading data..." : ""
      // }
      // error={divisionInputIsInvalid && "Region is required"}
      // onBlur={divisionBlurHandler}
    />
  );
};

export default Divisionvalidation;
