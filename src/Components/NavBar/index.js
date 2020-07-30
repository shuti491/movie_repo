import styled from 'styled-components';
import React, { useState } from 'react';
import { Link} from "react-router-dom";
const NavWrapper = styled.div`
  width : 100%;  
  height: 3 em;
  display: block;
  background-color: #f2f2f2;;
  position: relative;
  float: left;
  font-weight: bold;
  color: #069;
  margin: 0 0 3em 0;
`;

export default function NavBar(){
return(
         <NavWrapper>
           <div>
              <ul id="nav">
                <li>
                <Link to="/">JustBingeTV</Link>
                </li>
                <li>
                <Link to="/movies">Movies</Link>
                </li>
                <li>
                <Link to="/series">Series</Link>
                </li>               
              </ul>
            </div>
            </NavWrapper>
);
}
