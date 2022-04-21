import React, { useContext, useEffect, useState } from "react";
import Select from "../../../utilities/select/Select";
import { getDistricts, storeAddressObj } from "../../Services/AddressService";
import addressContext from "../../Store/address-context";

const DistrictValidation = ({ clicked }) => {
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
  const ctx = useContext(addressContext);
  const getDivisionCtx = ctx.getDivision;
  const [districts, setDistricts] = useState([]);
  const [districtIsTouched, setDistrictIsTouched] = useState(false);
  const [districtValid, setDistrictIsValid] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  // const districtChangeHandler=({target})=>{
  //     setDistricts(target.value)
  // }
  const getCtxStoreAddress = ctx?.getStoreAddressCtx;
  const getIfFindActiveType = getCtxStoreAddress?.find(
    (item) => item.type === ctx.getActiveType
  );
  const districtIsTouchedHandler = () => {
    setDistrictIsTouched(true);
  };

  const getDistrictHandler = () => {
    setDistricts(getDistricts(getDivisionCtx.id));
  };
  const selectDistrictHandler = (item) => {
    ctx.storeDistrict(item);
    storeAddressObj.district.name = item.name;
    storeAddressObj.district.id = item.id;
  };
  useEffect(() => {
    if (getIfFindActiveType) {
      setSelectedValue(getIfFindActiveType.district);
    }
  }, [getIfFindActiveType]);

  useEffect(() => {
    if (clicked) {
      if (
        (districtIsTouched && districts.length === 0) ||
        (!districtIsTouched && districts.length === 0)
      ) {
        setDistrictIsValid(true);
      } else setDistrictIsValid(false);
    }
  }, [districts.length, districtIsTouched, clicked]);

  return (
    <Select
      label="Select City"
      name="district"
      options={divisionsa || []}
      onSelect={selectDistrictHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedValue}
      // onBlur={districtBlurHandler}
      // error={districtInputIsInvalid && "City is required"}
      // previewText={
      //   districtStatus === "pending"
      //     ? "Loading data..."
      //     : "Select Region First"
      // }
    />
  );
};

export default DistrictValidation;
