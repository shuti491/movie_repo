/*
 * FeaturePage
 *
 * List all the features
 */
import styled from 'styled-components';


import Card from 'Components/Card';
import React from 'react';
import * as genreList from './genres';
// import Header from 'Components/Header';

const FlixWrapper = styled.div`
  height: 100%;
  display : block;
  margin : 1em;
  font-family: 'Helvetica Neue';
  font-size: xxx-large;
  color: #ffffff 
  
`;

const Block = styled.div`
  display : flex;
  flex-wrap: wrap;
  height:100% ;
  width:100%;
  float:left;
  margin-top : 1em;
  
`;
export default function HomePage() {
    
    // const imgPath='../../../app/images/comedy.jpeg';
    const genres= genreList.default.genres;
  return (
    // <Header>
      <FlixWrapper>
            <div >What's your mood?</div>
            <Block>
       {
          genres.map((genreList ,index)=>(
             <Card key={index} name={genreList.name}  path={`/movie/${genreList.name}`}></Card>
          )

          )

       }

       
</Block>
      </FlixWrapper>
      // </Header>
  );
}
