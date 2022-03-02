import React, { useState } from 'react'
import AuthenticationModalBody from './AuthenticationModalBody'
import LoginModal from './LoginModal'

const RegistrationModal = ({closeModal}) => {
    const [loginModal,setLoginModal] = useState(false)

    const loginModalHandler=()=>{
        closeModal()
        setLoginModal(true)
    }
    const closeModalHandler=()=>{
        setLoginModal(prevState=>!prevState)
    }

  return (
    <div class="login-main-area">
        <div class="login-info-from">
            <form>
                <h2>registration to Jasmine</h2>
                <i class="fa fa-spinner" aria-hidden="true"></i>
                <div class="login-info-inner-content">
                    <div class="custom-input">
                        <label for="name">Name</label>
                        <input type="text" name="" id="name" required="" />
                    </div>
                    <div class="custom-input">
                        <label for="mobile">Mobile Number</label>
                        <input type="text" name="" id="mobile" required="" />
                    </div>
                    <div class="custom-input">
                        <label for="password">Password</label>
                        <input type="password" name="" id="password" required="" />
                    </div>
                    <div class="login-submit">
                        <input type="submit" value="Registration" />
                    </div>
                </div>
            </form>
        </div>
        <div class="dont-have-account">
            <p>Already a member?</p>
            <a href onClick={loginModalHandler}>LogIn</a>
        </div>
        {
            loginModal && <AuthenticationModalBody Template={LoginModal} closeModal={closeModalHandler}/>
        }
    </div>
  )
}

export default RegistrationModal