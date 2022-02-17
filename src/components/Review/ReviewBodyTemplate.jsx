import React, { useEffect, useState } from 'react';
import ReviewSingleItem from './ReviewSingleItem';

const ReviewBodyTemplate = () => {
    //postValidation
    const[post,setPost]=useState('')
    const[clicked,setClicked]=useState(false)
    const[postIsTouched,setPostIsTouched]=useState(false)
    const[postIsValid,setPostIsValid]=useState(false)
    
    const postChangeHandler=({target})=>{
        setPost(target.value)
    }
    const postIsTouchedhandler=()=>{
        setPostIsTouched(true)
    }
    const submitHandler=()=>{
        setClicked(true)
    }
    useEffect(()=>{
        if(clicked){
            (((postIsTouched && post.length===0)||(!postIsTouched && post.length===0))?setPostIsValid(true):setPostIsValid(false));
        }
        if(clicked && post.length!==0){
            console.log('hi')
        }
    },[postIsTouched,post.length,clicked,postIsValid])
  return (
    <section class="customar-review-area">
    <div class="container">
        <div class="customar-review-main-flex">
            <div class="tab-content detalis-page-tab-content">
                <div class="product-comments-block-tab">
                    <i class="fa fa-commenting-o" aria-hidden="true"></i>
                    <div class="new_comment_container">
                        <div class="post-cmt-input">
                            <input placeholder="Post Your Review Here" type="text" 
                            value={post}
                            onChange={postChangeHandler}
                            onBlur={postIsTouchedhandler}
                            />
                            {
                            (postIsValid)&&<div class="alert alert-error">Post can't be empty.</div>
                            }
                            {
                            (postIsTouched && post.length===0 && !postIsValid)&&<div class="alert alert-error">Post can't be empty.</div>
                            }
                        </div>
                        <div class="post-cmt-btn" onClick={submitHandler}>
                            <button type="submit">Post</button>
                        </div>
                    </div>
                    <p></p>
                    <ReviewSingleItem />
                </div>
            </div>
        </div>
    </div>
</section>    
  );
};

export default ReviewBodyTemplate;
