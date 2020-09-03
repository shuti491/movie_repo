
import styled from 'styled-components';

import SliderContext from 'Components/MovieSlider/context'
import React, { useState } from 'react';
import OverLayCard from '../OverLayCard';

export const MovieCard=React.forwardRef((props,ref)=> {
//export default function MovieCard(props,ref) {
const [Hover, setHover]=useState(false);
 //console.log('test_props:'+JSON.stringify(props.movie));
  const Wrapper = styled.div`
  margin:1em;
  border:3px solid #ffffff;
  height:10em ;
  width:7em;
  cursor: pointer;
  float : left;
  border-radius: 5px;
  text-align: center;
  
  :hover  {
   
    transform: scale(1.2) !important;
	}
`;

  const ImageWrapper = styled.img`  
  height:100% ;
  width:100%;  
  transition: transform 300ms ease 100ms;
`;


  
  return(
    <Wrapper className="movieCard"
    onMouseEnter={()=> setHover(true)}
    onMouseLeave={()=> setHover(false)}
    >
      {
         Hover && <OverLayCard details={props.movie}/>
      } 
       <img ref={ref} src={"http://image.tmdb.org/t/p/w200" + props.movie.poster_path }/> 
       
     </Wrapper>
  );

    })
  
    