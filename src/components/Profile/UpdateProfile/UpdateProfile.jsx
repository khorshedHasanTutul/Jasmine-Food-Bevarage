import React, { useEffect, useState } from "react";
import { getProfileInfo, updateProfileInfo } from "../../../lib/endpoint";
import { http } from "../../Services/httpService";

const UpdateProfile = ({ getProfileInformation }) => {
  const [clicked, setClicked] = useState(false);

  //name validation
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  //end
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState();

  //name Handlers
  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const nameTouchedHandler = () => {
    setNameIsTouched(true);
  };
  const emailChangeHandler = ({ target }) => {
    setEmail(target.value);
  };
  //   end

  //save button handler
  const saveButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    if (name.length !== 0 || email.length !== 0 || files !== undefined) {
      let formData = new FormData();
      if (name.length !== 0) formData.append("Name", name);
      if (email.length !== 0) formData.append("Email", email);
      if (files !== undefined) formData.append("ProfilePicture", files);
      http.put({
        url: updateProfileInfo,
        payload: formData,
        successed: (data) => {
          getProfileInformation();
        },
        failed: () => {
          console.log("failed");
        },
        always: () => {},
      });
    }
  };
  //end

  const fileUploadHandler = ({ target }) => {
    setFiles(target.files[0]);
  };

  const getProfileInfoHttp = () => {
    http.get({
      url: getProfileInfo,
      before: () => {},
      successed: (data) => {
        if (data.data.name !== null) {
          setName(data.data.name);
        }
        setPhone(data.data.phone);
        if (data.data.email !== null) {
          setEmail(data.data.email);
        }
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };

  useEffect(() => {
    getProfileInfoHttp();
  }, []);

  useEffect(() => {
    if (clicked) {
      if (
        (nameIsTouched && name.length === 0) ||
        (!nameIsTouched && name.length === 0)
      ) {
        setNameIsValid(true);
      } else setNameIsValid(false);
    }
  }, [clicked, name.length, nameIsTouched]);

  return (
    <div class="edit-profile-main-flex">
      <form>
        <div class="edit-profile-main-form">
          <div class="custom-input">
            <label for="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              required=""
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameTouchedHandler}
            />

            {nameIsValid && (
              <div class="alert alert-error">Name is required.</div>
            )}
            {nameIsTouched && name.length === 0 && !nameIsValid && (
              <div class="alert alert-error">Name is required.</div>
            )}
          </div>
          <div class="custom-input">
            <label for="name">Phone Number</label>
            <input
              type="text"
              class="disabled"
              name=""
              id="name"
              disabled
              value={phone}
            />
          </div>
        </div>
        <div class="edit-profile-main-form">
          <div class="custom-input">
            <label for="name">Email</label>
            <input
              type="text"
              name=""
              id="name"
              required=""
              value={email}
              onChange={emailChangeHandler}
            />
          </div>
          <div class="custom-input">
            <label for="name">Upload Photo</label>
            <input
              type="file"
              name=""
              id="name"
              required=""
              onChange={fileUploadHandler}
            />
            {/* <div class="alert alert-error">Photo is required.</div> */}
          </div>
        </div>
        <button type="submit" onClick={saveButtonHandler}>
          Save <i class="fa fa-floppy-o" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
