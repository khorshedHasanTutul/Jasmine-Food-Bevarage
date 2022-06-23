import React, { useEffect, useRef } from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Slider = ({ options, data, Template, imageChangedHandler, from }) => {
  const ref = useRef(null);
  // useEffect(()=>{
  //   if(ref.current){
  //     ref.current.splide.mount(AutoScroll)
  //   }
  // },[])
  return (
    // new Splide( '.splide' ).mount( { AutoScroll } );

    <Splide options={options} ref={ref}>
      {data.map((item, index) => (
        <SplideSlide key={item.id || index}>
          {imageChangedHandler ? (
            <Template item={item} imageChangedHandler={imageChangedHandler} />
          ) : (
            <Template item={item} from={from} />
          )}
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
