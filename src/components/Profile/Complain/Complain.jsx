import React from 'react'

const Complain = () => {
  return (
    <div class="submit-compline-main-flex edit-profile-main-flex">
    <form>
        <div class="custom-input">
            <label for="name">Title</label>
            <input type="text" name="" id="name" required="" />
            <div class="alert alert-error">Title is required.</div>
        </div>
        
        <div class="custom-input">
            <label for="msg">Remarks</label>
            <textarea name="" id="msg"></textarea>
            <div class="alert alert-error">Remarks is required.</div>
        </div>
        
        <button type="submit">
            Send <i class="fa fa-paper-plane" aria-hidden="true"></i>

        </button>
    </form>
</div>
  )
}

export default Complain