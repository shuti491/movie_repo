import  React, {useState, useEffect } from 'react';

import IconCross from './../Icons/IconCross';
import './Content.scss';

export default function Content ( props ){
 
  const [details,setDetails]=useState([])
  let title= props.movie.title?props.movie.title:props.movie.name
  let date=props.movie.release_date?props.movie.release_date:props.movie.first_air_date
  let movieURL="http://image.tmdb.org/t/p/w200" + props.movie.poster_path

  useEffect(()=>{
  fetch("http://www.omdbapi.com/?apikey=6af37986&t="+title)
  .then(response => response.json())
  .then(data =>{
   console.log('Here:'+data)
    setDetails(data)
  } )
  },[title])

  return (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${movieURL})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{title}</div>
        <div className="content__description">{props.movie.overview}</div>
  <div className="content__rating">IMDB : {details.imdbRating}</div>
  <div className="content__description">
    Release Date : {date } <br/>
    Director : {details.Director}<br/>
    Actors : {details.Actors}<br/>
    Run Time : {details.Runtime}<br/>
    Awards : {details.Awards}
  </div>
      </div>
      <button className="content__close" onClick={props.onClose}>
        <IconCross />
      </button>
    </div>
  </div>
)

};


