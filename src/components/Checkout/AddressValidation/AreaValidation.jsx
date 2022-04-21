import React, { useContext, useEffect, useState } from "react";
import Select from "../../../utilities/select/Select";
import { getAreas, storeAddressObj } from "../../Services/AddressService";
import addressContext from "../../Store/address-context";

const AreaValidation = ({ clicked }) => {
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
  const ctxAddress = useContext(addressContext);
  const getAreaCtx = ctxAddress.getDistrict;
  const [areas, setAreas] = useState([]);
  const [areaIsTouched, setAreaIsTouched] = useState(false);
  const [areaValid, setAreaIsValid] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const getCtxStoreAddress = ctxAddress?.getStoreAddressCtx;
  const getIfFindActiveType = getCtxStoreAddress?.find(
    (item) => item.type === ctxAddress.getActiveType
  );

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
    ctxAddress.storeArea(item);
    storeAddressObj.area.name = item.name;
    storeAddressObj.area.id = item.id;
  };

  useEffect(() => {
    if (getIfFindActiveType) {
      setSelectedValue(getIfFindActiveType.area);
    }
  }, [getIfFindActiveType]);

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
    <Select
      label="Select Area"
      name="area"
      options={divisionsa || []}
      onSelect={selectAreaHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedValue}
      // onBlur={upzilaBlurHandler}
      // error={upzilaInputIsInvalid && "Area is required"}
      // previewText={
      //   upzilaStatus === "pending"
      //     ? "Loading data..."
      //     : "Select City First"
      // }
    />
  );
};

export default AreaValidation;
