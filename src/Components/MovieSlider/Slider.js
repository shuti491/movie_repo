import React, { useState } from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import SliderContext from './context'
import Content from './Content'
import SlideButton from './SlideButton'
import SliderWrapper from './SliderWrapper'
import useSliding from './useSliding'
import useSizeElement from './useSizeElement'
import './Slider.scss'
const OverLay=styled.div`
    position   : relative;
    top        : 0;
    left       : 0;
    width      : 100%;
    height     : 100%;
    background-color : #ffffff;
   // opacity    : 0.6;
    // filter     : alpha(opacity=60);
    z-index    : 6;
   // display    : none;
`;
const Slider=({children,activeSlide})=>{
const [currentSlide, setCurrentSlide]=useState(activeSlide);
const [overlay, setOverLay]=useState(false);
const { width, elementRef } = useSizeElement();
    const {
      handlePrev,
      handleNext,
      slideProps,
      containerRef,
      hasNext,
      hasPrev
    } = useSliding(width, React.Children.count(children));
    console.log(activeSlide, currentSlide, React.Children.count(children));

    const handleSelect= movie =>{
      setCurrentSlide(movie);
      setOverLay(true);
      console.log("test:"+overlay);
  }
    
const handleClose = () => {
    setCurrentSlide(null);
    setOverLay(false);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return(
 <SliderContext.Provider value={contextValue}>
<SliderWrapper>
<div
className={cx('slider',{'slider--open':currentSlide!=null})}
>
<div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
</div>
{hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
{hasNext && <SlideButton onClick={handleNext} type="next" />}

</SliderWrapper>
{/* {currentSlide && overlay && <OverLay/> &&<Content movie={currentSlide} onClose={handleClose} />} */}
{currentSlide &&  <OverLay/> &&<Content movie={currentSlide} onClose={handleClose} />}

 </SliderContext.Provider>


  );


}

export default Slider;
