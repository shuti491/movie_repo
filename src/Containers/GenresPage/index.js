import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

 import Slider from 'Components/MovieSlider/index';
const FlixWrapper = styled.div`
  Width: 80%%;
  height: 80%;
  display : block;
  margin : 4em;
  font-family: 'Helvetica Neue';
  font-size: x-large;
  color: #ffffff
`;
const hStyle = { 
  
  width : '30em',
  overflow: 'hidden',
  height: '4em'
};
const Loader= styled.img`
height: 5em;
width: 7em;
margin-left: 13em;
`;

export default function GenresPage(props) {
  let url="";
  let id = null;
  
  const[genreMovie, setGenreMovie]=useState([]);
  
  console.log("type:"+props.type);
  

  useEffect( ()=> {
    console.log('Hiii'+props.type);
    setGenreMovie([]);
    if(props.type==='movie' || props.type==='tv' ){
    url="https://api.themoviedb.org/3/discover/"+ props.type +"?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+props.id;
    }    

 fetch(url)
 .then(response => response.json())
// .then(movieTitles)
.then(data =>{
  console.log(data.results)
  setGenreMovie(data.results)
})
  }, [props.type])

  return (

      <div style={hStyle}>
        
 { genreMovie.length == 0 ? (<Loader src="./loader.gif"></Loader>) :  
   ( 
    
    <Slider type={ props.type} >
    {
      genreMovie.map((movieDetails,index)=>(
        <Slider.Item type={ props.type} key={index}  movie={movieDetails}  path={ `/movie_details/${movieDetails.title }` }  >item1</Slider.Item>
  
       ))
    }
    </Slider>
    
   )
    }  

 </div>  

);
}
