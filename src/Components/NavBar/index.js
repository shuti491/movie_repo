import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link, NavLink} from "react-router-dom";
import SearchBar from 'Components/SearchBar/index';

export default function NavBar(){
  const NavWrapper = styled.div`
  width : 100%;  
  height: 4em;
  display: flex;
  background-color: #282828;
  // float: left;
  font-weight: bold;
  color: #ffffff ;
`;

const Span = styled.span`
padding :1em;
// margin: 1em 1em 1em 1em;
color: #ffffff ;
font-size: x-large;
`;


const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: inherit;
margin-top: 1em;

`;

const Logo = styled.div`
display: contents;
`;



return(
  <NavWrapper>
  <Logo className="Logo">
      <StyledNavLink to={{ pathname: '/movie', state: { type: 'movie'} } }><img src="/logo192.png" style={{height: "3em"}} ></img></StyledNavLink>
   </Logo>

   <Span >
   <StyledNavLink 
   to={{ pathname: '/movie', state: { type: 'movie'} }}
   activeClassName="navbar__link--active"
   className="navbar__link"  
   activeStyle={{
     borderBottom: '3px solid #29b6f6',
     transition: 'border-bottom .5s ease-in-out'
     }}    
     
   >Movies</StyledNavLink>
   </Span>
   <Span >
   <StyledNavLink   
   to={{ pathname: '/tv', state: { type: 'tv'} }} 
   activeClassName="navbar__link--active"
   className="navbar__link" 
   activeStyle={{
     borderBottom: '3px solid #29b6f6',
     transition: 'border-bottom .5s ease-in-out'
     }} 
     
   >Series</StyledNavLink>
   </Span>  
   <span style={{width:'64%'}}>
     <SearchBar />
   </span>
    </NavWrapper>
);
}
