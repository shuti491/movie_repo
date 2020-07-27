
import styled from 'styled-components';

import React from 'react';
const Title = styled.h1`
  font-size: 0.4em;
  margin-left : auto;
  margin-right : auto;
  text-align: center;
  color: darkcyan;
  margin-top: 1.5em;

`;

const Wrapper = styled.section`
  // background-image:url(https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABf9YCWbFdf7jdHjpc84DzX4ETB7FarRM3uTRy0R5624TFAeNZLCpLUSkwx_UJLxgcauniLnbEuFn1j-5BpIxqQBNYoxT.png?r=2ca);
  border:1px solid darkcyan;
  height:2em ;
  width:4em;
  cursor: pointer;
  margin-left: 0.75em;
  margin-bottom: 0.75em;
  border-radius: 2em;
`;
export default function Card(props) {
  console.log(props.name)
    
  return(
    <Wrapper  onClick={event =>  window.location.href=props.path}>
      <Title>
        {props.name}
      </Title>
    </Wrapper>
  );
}

