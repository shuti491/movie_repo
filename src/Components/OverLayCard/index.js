
import styled from 'styled-components';

import React, { useState } from 'react';


export default function OverLayCard(props) {

  const OverWrapper = styled.div`
  
  height:27em ;
  width:18.9em;
  cursor: pointer;
  float : left;
  position: absolute;
  display:flex;
  background-color: rgba(105,105,105,0.5);
  text-align: left;
  font-size: 12px;
}`;

const WatchWrapper=styled.div`
height: 3em;
width: 18.7em;
cursor: pointer;
position: absolute;
background-color: orange;
top:23.4em;
border-radius: 5px;
text-align: center;

}`;

console.log("ooo:"+props.details);

  return(
    <div>
    <OverWrapper >
       Plot: {props.details.overview}
       <WatchWrapper>
       Watch on Netflix
     </WatchWrapper>
     </OverWrapper>
     
     </div>
  );
}

