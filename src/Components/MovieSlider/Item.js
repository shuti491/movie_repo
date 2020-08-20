
import styled from 'styled-components';
 import cx from 'classnames';
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import SliderContext from './context'
import React, { useState } from 'react';
import OverLayCard from '../OverLayCard';
import movieDatabase from 'Containers/GenresPage/movieDatabase';
import './Item.scss'


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

