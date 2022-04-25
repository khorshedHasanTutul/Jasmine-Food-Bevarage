import React, { useContext, useEffect, useState } from "react";
import { addressArea } from "../../../lib/endpoint";
import Select from "../../../utilities/select/Select";
import { getAreas, storeAddressObj } from "../../Services/AddressService";
import { http } from "../../Services/httpService";
import addressContext from "../../Store/address-context";

const AreaValidation = ({
  clicked,
  districtId,
  getSelectAreaHandler,
  fixArea,
  setAreaId
}) => {
  const ctxAddress = useContext(addressContext);
  const [areaList, setAreaList] = useState([]);
  const [selectedArea, setSelectedArea] = useState();
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
    if (clicked) {
      if (
        (areaIsTouched && areas.length === 0) ||
        (!areaIsTouched && areas.length === 0)
      ) {
        setAreaIsValid(true);
      } else setAreaIsValid(false);
    }
  }, [areas.length, areaIsTouched, clicked]);

  const areaSelectHandler = (areaList) => {
    setSelectedArea(areaList);
    getSelectAreaHandler(areaList.id);
  };

  const getAreaHttp = (districtId) => {
    console.log({ districtId });
    http.get({
      url: addressArea + districtId,
      before: () => {},
      successed: (data) => {
        setAreaList(data.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };
  useEffect(() => {
    getAreaHttp(districtId);
  }, [districtId]);

  useEffect(() => {
    if (fixArea) {
      setSelectedValue(fixArea);
      setSelectedArea(fixArea);
      setAreaId(fixArea.id);
    }
  }, [fixArea,setAreaId]);
  return (
    <Select
      label="Select Area"
      name="area"
      options={areaList || []}
      onSelect={areaSelectHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedArea}
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
