import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';
//  import App from './App';
import App from './Containers/App/AppRoute';

// import * as serviceWorker from './serviceWorker';
const AppWrapper = styled.div`
  width : 100%;  
  height: 100%;
  background-color: #000000;
  display:flex;
  position: absolute;
  overflow-y: scroll;
`;
ReactDOM.render(
  <React.StrictMode>
    <AppWrapper className="scrollArea">
         <App />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
