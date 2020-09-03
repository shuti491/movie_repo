
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
  
  console.log('Hi:'+movie);

 let trailerLink=""

   function getTLink(slide,event){
     console.log("id:"+slide.id)
    fetch("https://api.themoviedb.org/3/movie/"+slide.id+"/videos?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US")
    .then(response => response.json())
    .then(data =>{
      
        let key= data.results[0].key
        console.log("key:"+key)
        trailerLink="https://www.youtube.com/watch?v="+key
        console.log("Link:"+trailerLink)
       
    })
    .then(event.target.play())
    .catch(e =>console.error(e.message))
   }

return(
<SliderContext.Consumer>
{
({onSelectSlide,currentSlide,elementRef})=> {

const isActive=currentSlide && currentSlide.title===movie.title;
return(
<div
          onClick={() =>  onSelectSlide(movie)}
          ref={elementRef}
          className={cx('item', {'item--open': isActive})} >
          <img src={"http://image.tmdb.org/t/p/w200" + movie.poster_path } />
          {/* <video
          poster={"http://image.tmdb.org/t/p/w200"+movie.poster_path}
          onMouseOver={event => { 
             getTLink(movie,event) 
            //  event.target.play()
          }}
          onMouseOut={event => event.target.pause()}
          type={"video/mp4"}
          src={trailerLink} >
          </video> */}
</div>
);
}
}
</SliderContext.Consumer>
)};



export default Item;

