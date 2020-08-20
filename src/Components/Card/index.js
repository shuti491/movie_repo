
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
font-size: 0.7em;
margin-left: 0.5em;
`;

const StySpan = styled.span`
color: yellowgreen;
font-size: 0.7em;
margin-left: 0.5em;
cursor: pointer;
`;
export default function Card(props) {
  console.log(props.name)
    
  return(
    // <Wrapper  onClick={event =>  window.location.href=props.path}>
      <Title>
        {props.name}  <StyledLink to={props.path}  >More</StyledLink>
      </Title>
    // </Wrapper>
  );
}

