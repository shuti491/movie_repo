import React from 'react';
import IconCross from './../Icons/IconCross';
//import CancelIcon from '@material-ui/icons/Cancel';
import './Content.scss';

const Content = ({ movie, onClose }) => {
  return (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${movie.Poster})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.Title}</div>
        <div className="content__description">{movie.Plot}</div>
  <div className="content__rating">IMDB : {movie.imdbRating}</div>
  <div className="content__description">
    Runtime : {movie.Runtime } <br/>
    Director : {movie.Director}<br/>
    Actors : {movie.Actors}<br/>
    Awards : {movie.Awards}
  </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
)};

export default Content;
