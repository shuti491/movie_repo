/*
 * FeaturePage
 *
 * List all the features
 */
import styled from 'styled-components';


import Card from 'Components/Card';
import React, { Suspense } from 'react';
import * as genreList from './genres';
import GenreSlider from './../../Containers/GenresPage'
//const GenreSlider=React.lazy(()=>import('./../../Containers/GenresPage'));
// import Header from 'Components/Header';

const FlixWrapper = styled.div`
  height: 100%;
  display : block;
  margin : 1em;
  font-family: 'Helvetica Neue';
  font-size: xxx-large;
  color: lightblue
  
`;

const Block = styled.div`
  // display : flex;
  // flex-wrap: wrap;
  height:4em;
  width:100%;
  float:left;
  // margin-top : 1em;
  
`;
export default function HomePage() {
    
    
    const genres= genreList.default.genres;
  return (

      <FlixWrapper>
            <div >What's your mood?</div>
       {
          genres.map((genreList ,index)=>(
           <div>
              <Card key={index} name={genreList.name}  path={`/movie/${genreList.name}`}></Card>
              <GenreSlider name= {genreList.name}  id ={ genreList.id }></GenreSlider>
             </div>
             
          ))
          // <div>
          // <Card  name={genres[0].name}  path={`/movie/${genres[0].name}`}></Card>
          // <GenreSlider name= {genres[0].name}  id ={ genres[0].id }></GenreSlider>
          // </div>

          

       }
      </FlixWrapper>
      // </Header>
  );
}
