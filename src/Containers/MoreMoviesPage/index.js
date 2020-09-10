
import styled from 'styled-components';
import {MovieCard} from 'Components/MovieCard/index';
import React, { useState,useRef ,useCallback} from 'react';
import getMovies from './getMovies';
import Slider from 'Components/MovieSlider/index';
import Content from 'Components/MovieSlider/Content'

const FlixWrapper = styled.div`
  margin-left: 3em;
  margin-top: 1em;
   font-weight: 600;  
  font-family: 'Helvetica Neue';
  font-size: 2em;
  color :lightblue;
`;

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
export default function MoreMoviesPage(props) {


  const[info,setInfo]=useState(false)
  const [currentSlide, setCurrentSlide]=useState([]);

  let pageGenre=(props && props.match && props.match.params)?props.match.params.genres:''
  let pageType=(props && props.location && props.location.state)?props.location.state.type:''
const[page, setPage]=useState(1)

let{
  loading,
  NewMovies ,
  hasMore
}=getMovies(page, pageGenre, pageType);

const handleSelect=(movie)=>{
setInfo(true)
setCurrentSlide(movie)
}

   const observer= useRef()
  const lastMovieRef= useCallback(node =>{
   if(loading)  return;
   console.log("Final Call");
 if(observer.current) observer.current.disconnect()
observer.current=new IntersectionObserver(entries =>{
  console.log(entries);
  if(entries[0].isIntersecting && hasMore){
    setPage(prePage =>prePage +1)
    console.log('page:'+page)
  }
})
if(node) observer.current.observe(node)
  },[loading,hasMore]);

// if(NewMovies.length<=0)
//            loading=true;
console.log("HAs More:"+hasMore);
    return(
      <div>
      <FlixWrapper>
        {pageGenre}
        
        { NewMovies.length == 0 ? (< div>{loading && 'Loading...'}</div>) : ( 
        <div>
           {
             NewMovies.map((mov,index)=>(
               (NewMovies.length===index+1)?
                //  <img ref={lastMovieRef} src={"http://image.tmdb.org/t/p/w200" + mov.poster_path }/> 
                 <MovieCard ref={lastMovieRef} key={index} movie={mov} type={pageType} handleSelect={handleSelect}/>:<MovieCard key={index}  movie={mov} type={pageType} handleSelect={handleSelect}/>
                 
             ))
           }
        </div>
        )}


        </FlixWrapper>
            {  currentSlide && info &&<OverLay/> &&<Content movie={currentSlide} onClose={()=>setCurrentSlide(null)} />}
            </div>
         ); 
}
