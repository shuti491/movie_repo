
import styled from 'styled-components';

import React, { useState } from 'react';


export default function OverLayCard(props) {

  const OverWrapper = styled.div`
  
  height:10em ;
  width:8.9em;
  cursor: pointer;
  float : left;
  position: absolute;
  display:flex;
  background-color: rgba(105,105,105,0.5);
  text-align: center;

}`;

const WatchWrapper=styled.div`
height: 1.89em;
width: 8.8em;
cursor: pointer;
position: absolute;
background-color: orange;
margin-top: 9.9em;
border-radius: 5px;
text-align: center;

}`;

console.log(props.details);

  return(
    <div>
    <OverWrapper >
       IMdb {props.details.imdbRating}
     </OverWrapper>
     <WatchWrapper>
       Watch on Netflix
     </WatchWrapper>
     </div>
  );
}

