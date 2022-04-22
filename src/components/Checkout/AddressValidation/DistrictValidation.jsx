import React, { useContext, useEffect, useState } from "react";
import { addressDistrict } from "../../../lib/endpoint";
import Select from "../../../utilities/select/Select";
import { getDistricts, storeAddressObj } from "../../Services/AddressService";
import { http } from "../../Services/httpService";
import addressContext from "../../Store/address-context";

const DistrictValidation = ({ clicked,divisionID,getAreaHandler }) => {
  const ctx = useContext(addressContext);
  const getDivisionCtx = ctx.getDivision;
  const [selectedDistrict,setSelectedDistrict] = useState({})
  const [districtList, setDistrictList] = useState([]);
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
  const districtSelectHandler=(districtList)=>{
    setSelectedDistrict(districtList);
    getAreaHandler(districtList.id)
  }

  const getDistrictHttp =(divisionID)=>{
    console.log({divisionID})
    http.get({
      url:addressDistrict+divisionID,
      before:()=>{

      },
      successed:(data)=>{
        setDistrictList(data.data)
      },
      failed:()=>{
        console.log('failed');
      },
      always:()=>{

      }
    })
  }
  useEffect(()=>{
    getDistrictHttp(divisionID);
  },[divisionID])


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
      options={districtList || []}
      onSelect={districtSelectHandler}
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
