import React from "react";
import Header from "Components/Header"
import HomePage from "Containers/HomePage/index"
import GenresPage from "Containers/GenresPage/index"
import MovieDetailsPage from "Containers/MovieDetailsPage/index"
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";



export default function AppRoute() {
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

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
margin-top: 1em;
`;

const Logo = styled.div`
display: contents;

`;

  return (
        
          
     <Router>
      <div>
      <NavWrapper>
               <Logo className="Logo">
                   <StyledLink to="/" ><img src="/logo192.png" style={{height: "3em"}} ></img></StyledLink>
                </Logo>

                <Span>
                <StyledLink to="/movies" >Movies</StyledLink>
                </Span>
                <Span>
                <StyledLink to="/series" >Series</StyledLink>
                </Span>               
                     </NavWrapper>
         <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movie/:genres" component={GenresPage} />
          <Route path="/movie_details/:id" component={MovieDetailsPage} />
          
        </Switch>  
      </div>
     </Router>
     
  );
}



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things divke the back button and bookmarks
// work properly.

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <div>
//             <Link to="/">Home</Link>
//           </div>
//           <div>
//             <Link to="/about">About</Link>
//           </div>
//           <div>
//             <Link to="/dashboard">Dashboard</Link>
//           </div>
//         </ul>

//         <hr />

//         {/*
//           A <Switch> looks through all its children <Route>
//           elements and renders the first one whose path
//           matches the current URL. Use a <Switch> any time
//           you have multiple routes, but you want only one
//           of them to render at a time
//         */}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // You can think of these components as "pages"
// // in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }


