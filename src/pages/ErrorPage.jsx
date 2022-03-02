import React from "react";

const ErrorPage = () => {
  return (
    <section class="page-not-fount-area">
      <div class="container">
        <div class="page-not-fount-main d-flex al-center">
          <div class="notfount-img">
            <img src="contents/assets/images/notfount.png" alt="notfound" />
          </div>
          <div class="notfount-content">
            <p>Awwww...... Don,t Cry.</p>
            <span>Its Just 404 Error!!!</span>
            <aside>
              What your are looking for may have been Misplaced in long term
              memory.
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
