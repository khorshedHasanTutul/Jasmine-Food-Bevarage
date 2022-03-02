import React, { useEffect, useState } from "react";

const UpdateProfile = () => {
  const [clicked, setClicked] = useState(false);

  //name validation
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  //end

  //name Handlers
  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const nameTouchedHandler = () => {
    setNameIsTouched(true);
  };
  //   end

  //save button handler
  const saveButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
  };
  //end


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
              value={"01704247162"}
            />
          </div>
        </div>
        <div class="edit-profile-main-form">
          <div class="custom-input">
            <label for="name">Email</label>
            <input type="text" name="" id="name" required="" />
          </div>
          <div class="custom-input">
            <label for="name">Upload Photo</label>
            <input type="file" name="" id="name" required="" />
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
