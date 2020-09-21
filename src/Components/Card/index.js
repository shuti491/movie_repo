
import styled from 'styled-components';
import {Link} from "react-router-dom";
import React, { useState } from 'react';
const Title = styled.h1`
  font-size: 0.6em;
  margin-left : 2em;
  text-align: left;
  color: #ffffff;
  margin-top: 1em;
  width:10em;
  height:1em;
 
`;
const StyledLink = styled(Link)`
text-decoration: none;
// color: inherit;
color: yellowgreen;
font-size: 0.5em;
margin-left: 0.5em;
cursor: pointer ;
position:relative;
//z-index:5
`;


export default function Card(props) {
  console.log(props.name)
  console.log("CardType"+props.type)
    const [top,setTop]=useState(false)
  return(
    // <Wrapper  onClick={event =>  window.location.href=props.path}>
      <Title onMouseEnter={()=>{setTop(true)}}
          onMouseLeave={()=>{setTop(false)}}>
        {props.name}  
        {true &&
        <StyledLink  to={{ pathname: props.path, state: { type: props.type} }} >More</StyledLink>}
      </Title>
    // </Wrapper>
  );
}

