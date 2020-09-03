
import styled from 'styled-components';
import {Link} from "react-router-dom";
import React from 'react';
const Title = styled.h1`
  font-size: 0.6em;
  margin-left : 2em;
  text-align: left;
  color: #ffffff;
  // margin-top: 1.5em;

`;
const StyledLink = styled(Link)`
text-decoration: none;
// color: inherit;
color: yellowgreen;
font-size: 0.5em;
margin-left: 0.5em;
cursor: pointer ;
z-index: 3;
position:absolute;

`;


export default function Card(props) {
  console.log(props.name)
  console.log("CardType"+props.type)
    
  return(
    // <Wrapper  onClick={event =>  window.location.href=props.path}>
      <Title>
        {props.name}  <StyledLink  to={{ pathname: props.path, state: { type: props.type} }} >More</StyledLink>
      </Title>
    // </Wrapper>
  );
}

