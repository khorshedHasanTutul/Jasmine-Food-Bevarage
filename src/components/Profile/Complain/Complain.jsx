import React, { useEffect, useState } from "react";

const Complain = () => {
  const [clicked, setClicked] = useState(false);

  //title validation start
  const [title, setTitle] = useState("");
  const [titleIsTouched, setTitleIsTouched] = useState(false);
  const [titleIsValid, setTitleIsValid] = useState(false);
  //end

  //Remarks validation start
  const[remark,setRemark]=useState("")
  const [remarkIsTouched, setRemarkIsTouched] = useState(false);
  const [remarkIsValid, setRemarkIsValid] = useState(false);
  //end


  const titleChangeHandler = ({ target }) => {
    setTitle(target.value);
  };
  const titleTouchedHandler = () => {
    setTitleIsTouched(true);
  };

  const remarkChangeHandler=({target})=>{
      setRemark(target.value)
  }
  const remarkTouchedHandler=()=>{
      setRemarkIsTouched(true)
  }


  const submitButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
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
  }, [titleIsTouched, title.length,remarkIsTouched,remark.length, clicked]);

  return (
    <div class="submit-compline-main-flex edit-profile-main-flex">
      <form>
        <div class="custom-input">
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
        </div>

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

        <button type="submit" onClick={submitButtonHandler}>
          Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
};

export default Complain;
