import React, { useState}from "react"
import HomePage from "Containers/HomePage/index"
import GenresPage from "Containers/GenresPage/index"
import MoreMoviesPage from "Containers/MoreMoviesPage/index"
import SearchPage from "Containers/SearchPage/index"
import DiscoverPage from "Containers/DiscoverPage/index"
import styled from 'styled-components'
import NavBar from 'Components/NavBar/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"


export default function AppRoute() {

  return (
          
     <Router>
      <div style={{width:"100%"}}>
        <NavBar/>
         <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/tv" component={HomePage} />
          <Route exact path="/movie" component={HomePage} />
          <Route path="/movie/:genres" component={MoreMoviesPage} />
           <Route path="/tv/:genres" component={MoreMoviesPage} /> 
           <Route path="/search"  component={SearchPage}/>
           {/* <Route path="/discover"  component={DiscoverPage}/> */}
        </Switch>  
        </div>
     </Router>
     
  );
}



