
import styled from 'styled-components';
import ReactPlayer from "react-player"
import SliderContext from 'Components/MovieSlider/context'
import React, { useState } from 'react';
import OverLayCard from '../OverLayCard';
import cx from 'classnames';
import './card.scss'


export const MovieCard=React.forwardRef((props,ref)=> {


 const [loaded ,setLoad]= useState(false)
const [Tlink, setLink]=useState("")

  const Wrapper = styled.div`
  margin:1em;
  //border:3px solid #ffffff;
  height:7em ;
  width:7em;
  cursor: pointer;
  float : left;
  //border-radius: 5px;
  text-align: center;
  
  :hover  {
   
    transform: scale(1.2) !important;
	}
`;


 

function getTLink(slide,event,type){
  console.log("inside type:"+type)
    fetch("https://api.themoviedb.org/3/"+type+"/"+slide.id+"/videos?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US")
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
    <Wrapper classname={cx('movieCard')}
    onMouseEnter={event => { 
      setLoad(true)
       getTLink(props.movie,event,props.type) 
  }}
  onMouseLeave={()=>setLoad(false)}
    >
     
       <img  className={cx('imag', {'imag--hidden': loaded})} ref={ref} src={"http://image.tmdb.org/t/p/w200" + props.movie.poster_path } alt={props.movie.title!=null?props.movie.title:props.movie.original_name}/> 
       {loaded && ( 
    <ReactPlayer url={Tlink}   className='react-player'  />)}

{loaded && ( 
  <div className='info'  onClick={()=>props.handleSelect(props.movie)}>
      <img src="/images.png" className="arrow"/></div>
   )}

     </Wrapper>
  );

    })
  
    