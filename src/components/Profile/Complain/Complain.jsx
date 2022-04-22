import React, { useEffect, useState } from "react";
import { postComplain } from "../../../lib/endpoint";
import Select from "../../../utilities/select/Select";
import { http } from "../../Services/httpService";

const Complain = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedComplain, setSelectedComplain] = useState({});

  //title validation start
  const [title, setTitle] = useState("");
  const [titleIsTouched, setTitleIsTouched] = useState(false);
  const [titleIsValid, setTitleIsValid] = useState(false);
  //end

  //Remarks validation start
  const [remark, setRemark] = useState("");
  const [remarkIsTouched, setRemarkIsTouched] = useState(false);
  const [remarkIsValid, setRemarkIsValid] = useState(false);
  //end

  const complainList = [
    {
      id: 0,
      name: "Website",
    },
    {
      id: 1,
      name: "Delivary",
    },
    {
      id: 2,
      name: "AgentBehaviors",
    },
    {
      id: 3,
      name: "Products",
    },
    {
      id: 4,
      name: "Others",
    },
  ];

  const titleChangeHandler = ({ target }) => {
    setTitle(target.value);
  };
  const titleTouchedHandler = () => {
    setTitleIsTouched(true);
  };

  const remarkChangeHandler = ({ target }) => {
    setRemark(target.value);
  };
  const remarkTouchedHandler = () => {
    setRemarkIsTouched(true);
  };

  const complainSelectHandler = (complainList) => {
    setSelectedComplain(complainList);
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    http.post({
      url:postComplain,
      payload:{
        "activityId": "00000000-0000-0000-0000-000000000000",
        "complainType": selectedComplain.id,
        "message": remark
      },
      before:()=>{
        
      },
      successed:(data)=>{
        console.log(data)
      },
      failed:()=>{
        console.log('failed');
      }
    })
  };
  useEffect(() => {
    if (clicked) {
      if (
        (titleIsTouched && title.length === 0) ||
        (!titleIsTouched && title.length === 0)
      ) {
        setTitleIsValid(true);
      } else setTitleIsValid(false);

      if (
        (remarkIsTouched && remark.length === 0) ||
        (!remarkIsTouched && remark.length === 0)
      ) {
        setRemarkIsValid(true);
      } else setRemarkIsValid(false);
    }
  }, [titleIsTouched, title.length, remarkIsTouched, remark.length, clicked]);

  return (
    <div class="submit-compline-main-flex edit-profile-main-flex">
      <form>
        {/* <div class="custom-input">
          <label for="name">Title</label>
          <input
            type="text"
            name=""
            id="name"
            required=""
            onChange={titleChangeHandler}
            onBlur={titleTouchedHandler}
          />
          {titleIsValid && (
            <div class="alert alert-error">Title is required.</div>
          )}
          {titleIsTouched && title.length === 0 && !titleIsValid && (
            <div class="alert alert-error">Title is required.</div>
          )}
        </div> */}

        <div class="custom-input">
          <label for="msg">Remarks</label>
          <textarea
            name=""
            id="msg"
            value={remark}
            onChange={remarkChangeHandler}
            onBlur={remarkTouchedHandler}
          ></textarea>
          {remarkIsValid && (
            <div class="alert alert-error">Remark is required.</div>
          )}
          {remarkIsTouched && remark.length === 0 && !remarkIsValid && (
            <div class="alert alert-error">Remark is required.</div>
          )}
        </div>
        <div className="group-complain_type">
          <Select
            label="Select Region"
            name="division"
            options={complainList || []}
            onSelect={complainSelectHandler}
            config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
            // selectedOption={selectedValue}
            // previewText={districtStatus === "pending" ? "Loading data..." : ""}
            // error={divisionInputIsInvalid && "Region is required"}
            // onBlur={divisionBlurHandler}
          />
          <div className="complain_button">
            <button type="submit" onClick={submitButtonHandler}>
              Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Complain;
