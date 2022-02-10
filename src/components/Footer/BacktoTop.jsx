import React, { useEffect, useState } from 'react'
import ScroltoTop from '../../pages/ScroltoTop'

const BacktoTop = () => {
    const [displayBackToTopBtn, setdisplayBackToTopBtn] = useState(false)
    const[screenGoToTop,setscreenGoToTop]=useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>45){
                setdisplayBackToTopBtn(true);
            }
            else{
                setdisplayBackToTopBtn(false);
                setscreenGoToTop(false);
            }
           
        })
      },[])
      const goToTopHandler=()=>{
        setscreenGoToTop(true);
      }
  return (
     <>
      {
          (displayBackToTopBtn)&&  <a href id="toTop" onClick={goToTopHandler}></a>
      }
      {
          (screenGoToTop)&& <ScroltoTop />
      }
     </>
  )
}

export default BacktoTop