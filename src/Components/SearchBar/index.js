import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link, NavLink,Redirect} from "react-router-dom";
const Input = styled.input`
  height: 2.8em;
  margin-top: 0.8em;
  float: right;
  width: 32%;
  cursor:pointer;
  background-color: rgba(15,23,30,.2);
  color: #8197a4;
  pointer-events: all
  box-shadow: none;
  border: 2px solid #8197a4;
`;


export default function SearchBar(){

    const[searchText,setText]=useState('')
   const [redirect, setRedirect]=useState(false)
   const[count , setcount]=useState(0)
    
   function handleSubmit(event){
      event.preventDefault()
       setRedirect(true)
       setcount(count+1)
       return false
      }

useEffect(()=>{
  setRedirect(false)
  
},[count])

    return(
<div>
<form  onSubmit={handleSubmit}>
           <Input id="search" type="text" value={searchText} onChange={e=>setText(e.target.value)} placeholder="Search.."></Input> 
           </form>  

        {redirect && searchText!="" && <Redirect 
                 to={{
                   pathname:'/search',
                   state:{text: searchText} 
                 }}/>}   
                 
</div>     
        
           
       );


}