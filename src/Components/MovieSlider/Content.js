import React from 'react';
import IconCross from './../Icons/IconCross';
import './Content.scss';

const Content = ({ movie, onClose }) => {
  let movieURL="http://image.tmdb.org/t/p/w200" + movie.poster_path
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
        <div className="content__title">{movie.title}</div>
        <div className="content__description">{movie.overview}</div>
  {/* <div className="content__rating">IMDB : {movie.imdbRating}</div> */}
  <div className="content__description">
    Release Date : {movie.release_date } <br/>
    {/* Director : {movie.Director}<br/>
    Actors : {movie.Actors}<br/>
    Awards : {movie.Awards} */}
  </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
)};

export default Content;
