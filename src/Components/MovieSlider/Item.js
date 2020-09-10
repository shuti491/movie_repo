
import styled from 'styled-components';
 import cx from 'classnames';
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import SliderContext from './context'
import React, { useState } from 'react';
import OverLayCard from '../OverLayCard';
import movieDatabase from 'Containers/GenresPage/movieDatabase';
import './Item.scss'
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
import ArrowDown from 'Components/Icons/IconArrowDown'
export default function  Item(props) {

  const [loaded ,setLoad]= useState(false)
  // console.log('Hi:'+movie);
  const [Tlink, setLink]=useState("")

function getTLink(slide,event){
  console.log("id:"+loaded)
    fetch("https://api.themoviedb.org/3/"+props.type+"/"+slide.id+"/videos?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US")
    .then(response => response.json())
    .then(data =>{
      
        let key= data.results[0].key
        console.log("key:"+key)
       let trailerLink="https://www.youtube.com/watch?v="+key
        setLink(trailerLink)
        console.log("Link:"+trailerLink)
       
    })
    // .then(event.target.play())
    .catch(e =>console.error(e.message))
   }

return(
<SliderContext.Consumer>
{
({onSelectSlide,currentSlide,elementRef})=> {

 const isActive=currentSlide && currentSlide.title===props.movie.title;
return(
<div
          
          ref={elementRef}
           className={cx('item', {'item--open': isActive})} 
           onMouseEnter={event => { 
            setLoad(true)
             getTLink(props.movie,event) 
        }}
       onMouseLeave={()=>setLoad(false)}
          >
           
      <img src={"http://image.tmdb.org/t/p/w200" + props.movie.poster_path  } 
        className={cx('imag', {'imag--hidden': loaded})}
         ></img> 
         
               {loaded && ( 
    <ReactPlayer url={Tlink}  className='react-player'  />
  )}
   {loaded && ( 
  <div className='info'  onClick={() =>  onSelectSlide(props.movie)}><img src="/images.png" className="arrow"/></div>
   )}
           
</div>
);
}
}
</SliderContext.Consumer>
)};



// export default Item;

