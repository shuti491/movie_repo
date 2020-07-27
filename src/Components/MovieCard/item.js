
import styled from 'styled-components';
import cx from 'classnames';
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import SliderContext from 'Components/MovieSlider/context'
import React, { useState } from 'react';
import OverLayCard from '../OverLayCard';
import movieDatabase from 'Containers/GenresPage/movieDatabase';

//export default function MovieCard(props) {
// const [Hover, setHover]=useState(false);

//   const Wrapper = styled.div`
//   margin:2em;
//   border:3px solid #ffffff;
//   height:12em ;
//   width:9em;
//   cursor: pointer;
//   float : left;
//   border-radius: 5px;
//   text-align: center;
//   transition: transform 300ms ease 100ms;
//   :hover  {
//     // transform: translateX(-25%);
//     transform: scale(1.2) !important;
// 	}
// `;

//   const ImageWrapper = styled.img`  
//   height:100% ;
//   width:100%;  
//   transition: transform 300ms ease 100ms;
// `;


  
//   return(
//     <Wrapper 
//     onClick={event =>  window.location.href=props.path}
//     onMouseEnter={()=> setHover(true)}
//      onMouseLeave={()=> setHover(false)}
//     >
//       {
//         Hover && <OverLayCard details={props}/>
//       } 
//        <ImageWrapper src= {props.Poster} /> 
       
//      </Wrapper>
//   );
const Item=({movie})=> (
<SliderContext.Consumer>
{
({onSelectSlide,currentSlide,elementRef})=> {
const isActive=currentSlide && currentSlide.Title===movie.Title;
return(
<div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
<img src={movie.Poster} />
<ShowDetailsButton onClick={() => onSelectSlide(movie)} />
{isActive && <Mark />}

</div>
);

}
}
</SliderContext.Consumer>
);



export default Item;

