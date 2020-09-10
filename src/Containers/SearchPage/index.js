import styled from 'styled-components';
import {MovieCard} from 'Components/MovieCard/index';
import getMovies from './getMovies';
import getTv from './getTv';
import React, { useState,useRef ,useCallback,useEffect} from 'react';
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

export default function SearchPage(props){
  const[info,setInfo]=useState(false)
  const [currentSlide, setCurrentSlide]=useState([]);
    console.log("text:"+props.location.state.text)
    let searchText=props.location.state.text
    const[page, setPage]=useState(1)

   let pageType='movie'
 
    let{
        loading,
        NewMovies ,
        hasMore
      }=getMovies(page, searchText, pageType);
    console.log("New:"+NewMovies)
    
    let pageTypeTv='tv'
    let {loadingTv,NewTv ,hasMoreTv}=getTv(page, searchText, pageTypeTv);

      
    const handleSelect=(movie)=>{
      setInfo(true)
      setCurrentSlide(movie)
      }

      const observer= useRef()
      const lastMovieRef= useCallback(node =>{
       if(loading )  return;
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
    


    return(
      <div>
        <FlixWrapper>
        <div>Search results for "{searchText}":  </div>
        { NewTv.length==0 ||NewMovies.length==0 ? (< div>{loading && 'Loading...'}</div>) : ( 
        <div>
            {
             NewTv.map((mov,index)=>(
                  <MovieCard  key={index} movie={mov} type={pageTypeTv} handleSelect={handleSelect}/>     
             ))
           }
           {
             NewMovies.map((mov,index)=>(
               (NewMovies.length===index+1)?
                 <MovieCard ref={lastMovieRef} key={index} movie={mov} type={pageType} handleSelect={handleSelect}/>:<MovieCard key={index}  movie={mov} type={pageType} handleSelect={handleSelect}/>
                 
             ))
           }
           
        </div>

        )}
        </FlixWrapper>
         {  currentSlide && info &&<OverLay/> &&<Content movie={currentSlide} onClose={()=>setCurrentSlide(null)} />}
         </div>
    )
}