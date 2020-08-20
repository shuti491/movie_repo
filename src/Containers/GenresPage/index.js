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
};
const Loader= styled.img`
height: 2em;
width: 2em;
`;

export default function GenresPage(props) {
  
  const[error,setError]=useState(null);
  const[isLoaded, setIsLoaded]=useState(false);
  const[genreMovie, setGenreMovie]=useState([]);
  const movTitle=[];
  const movList=[];
  //let genreMovie=[];
//console.log(prop);
//console.log(genre);

// const getGenreMovie=(movList) =>{
//   let genreMovie = movList.filter(mov => (mov.Genre).includes(props.genres));
//   console.log(genreMovie);
//   setGenreMovie(genreMovie);
// }

const datarequest= (title)=>{
  let movie={};
  return new Promise((resolve,reject)=>{
  fetch("http://www.omdbapi.com/?apikey=6af37986&t="+title)
  .then(response => response.json())
.then(data =>{
resolve(data);
})

})
}

const getMovieDetails= (movTitle)=>{
  let movie={};
  let requests=[];
  movTitle.forEach(
    (title)=>{
      //console.log(title);
      requests.push(datarequest(title));
    }
)

Promise.all(requests)
.then((movList) => {
 // getGenreMovie(movList);
  setIsLoaded(true);
  setGenreMovie(movList);  })
    
  }

// const getMovieTitles =()=>{
// const apiPromises=[]
// for(let i=2;i>0;i--){
//   apiPromises.push(fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US&page="+i));
// }

// Promise.all(apiPromises)
// .then(response => response.json())
// .then(movieTitles)

// }
  

const movieTitles = (data) => {
       data.results.forEach(
         (mov)=> {
           movTitle.push(mov.title)
         }
       )
       getMovieDetails(movTitle);
    
  }



  useEffect( ()=> {
    console.log('Hiii');
//fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US&page=1")
 fetch("https://api.themoviedb.org/3/discover/movie?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+props.id)
.then(response => response.json())
.then(movieTitles)
  }, [])

// useEffect(()=> {getMovieTitles}, [])
   


  return (
      // <FlixWrapper>
      <div style={hStyle}>
 { genreMovie.length == 0 ? (<Loader src="./loader.gif"></Loader>) :  
   ( 
    
    <Slider>
    {
      genreMovie.map((movieDetails,index)=>(
        // <MovieCard key={index}   { ...movieDetails } path={ `/movie_details/${movieDetails.Title }` }  ></MovieCard>
        <Slider.Item key={index}  movie={movieDetails}  path={ `/movie_details/${movieDetails.Title }` }  >item1</Slider.Item>
  
       ))
    }
    </Slider>
    
   )
    }  

 {/* </div>    */}
 </div>  
// </FlixWrapper>     

);
}
