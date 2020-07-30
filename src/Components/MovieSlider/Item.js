
import styled from 'styled-components';
 import cx from 'classnames';
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import SliderContext from './context'
import React, { useState } from 'react';
import OverLayCard from '../OverLayCard';
import movieDatabase from 'Containers/GenresPage/movieDatabase';
import './Item.scss'


//export default function MovieCard(props) {
//const [hover,setHover]=useState(false)
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

const Item=({movie})=> {
  console.log(movie);
return(
<SliderContext.Consumer>
{
({onSelectSlide,currentSlide,elementRef})=> {
  
const isActive=currentSlide && currentSlide.Title===movie.Title;
return(
<div
          onClick={() =>  onSelectSlide(movie)}
          ref={elementRef}
          className={cx('item', {'item--open': isActive})} >
          <img src={movie.Poster} />
          {/* <span>HI { movie.Plot}</span> */}
</div>
);
}
}
</SliderContext.Consumer>
)};



export default Item;

