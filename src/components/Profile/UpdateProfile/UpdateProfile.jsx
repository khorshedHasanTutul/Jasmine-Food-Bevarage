import React from 'react'

const UpdateProfile = () => {
  return (
    <div class="edit-profile-main-flex">
        <form>
            <div class="edit-profile-main-form">
                <div class="custom-input">
                    <label for="name">Name</label>
                    <input type="text" name="" id="name" required="" />
                    <div class="alert alert-error">Name is required.</div>
                </div>
                <div class="custom-input">
                    <label for="name">Phone Number</label>
                    <input type="text" class="disabled" placeholder="01792855467" name="" id="name" disabled required="" />
                    <div class="alert alert-error">Phone Number is required.</div>
                </div>
            </div>
            <div class="edit-profile-main-form">
                <div class="custom-input">
                    <label for="name">Email</label>
                    <input type="text" name="" id="name" required="" />
                    <div class="alert alert-error">Email is required.</div>
                </div>
                <div class="custom-input">
                    <label for="name">Upload Photo</label>
                    <input type="file" name="" id="name" required="" />
                    <div class="alert alert-error">Photo is required.</div>
                </div>
            </div>
            <button type="submit">
                Save <i class="fa fa-floppy-o" aria-hidden="true"></i>
            </button>
        </form>
    </div>
  )
}

export default UpdateProfile