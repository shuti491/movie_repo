
import styled from 'styled-components';
import Card from 'Components/Card';
import React, { Suspense, useEffect, useState } from 'react';
import * as genreList from './genres';
import GenreSlider from './../../Containers/GenresPage'

const FlixWrapper = styled.div`
  height: 100%;
  display : block;
  margin : 1em;
  font-family:'Helvetica Neue';
  font-size: 3em;
  color: #ffffff;

`;


const Block = styled.div`
  // display : flex;
  // flex-wrap: wrap;
  height:4em;
  width:100%;
  float:left;
  // margin-top : 1em;
  
`;
export default function HomePage(props) {
  
    const genres= genreList.default.genres;
    let type = (props && props.match && props.match.params) && props.match.params.type ? props.match.params.type : (props &&  props.location && props.location.state) && props.location.state.type;
    if(type === undefined) {
      type ='movie'
     
    };

    console.log(type)
   
useEffect(()=>{
  document.getElementById('search').value=""
},[type])

  return (

      <FlixWrapper>
            <p style={{margin:'0em'}}>What's your mood? </p>
       {
          genres.map((genreList ,index)=>(
           <div style={{height:'6em'}}>
              <Card key={index} name={genreList.name}  path={`/${type}/${genreList.name}`} type={type}></Card>
              <GenreSlider name= {genreList.name}  id ={ genreList.id }  type={type}></GenreSlider>
             </div>
             
          ))
          // <div style={{height:'6em'}}>
          // <Card  name={genres[0].name}  path={`/${type}/${genres[0].name}`}  type={type} ></Card>
          // <GenreSlider name= {genres[0].name}  id ={ genres[0].id } type={type}></GenreSlider>
          
          // </div>

          

       }
      </FlixWrapper>
  );
}
