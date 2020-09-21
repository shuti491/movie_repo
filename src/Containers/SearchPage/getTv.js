import  {useEffect, useState } from 'react';

export default function GetTv(page, searchText,type) {

const [loadingTv ,setLoading] =useState(true);
const[NewTv,setTv]=useState([]);
const [hasMoreTv,setHasMore]=useState(true);

    useEffect(()=>{
        console.log("In tv")
        setLoading(true);
        console.log(page,searchText)
        fetch("https://api.themoviedb.org/3/search/"+type+"?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US&query="+searchText+"&page="+page+"&include_adult=false")
        .then(response => response.json())
        .then(data=>{
            console.log("result:"+ type + data.results);
            let filteredMovie=(data.results).filter(m =>m.poster_path!=null)
           setTv(prevMovies =>{
            return [...prevMovies,...filteredMovie]
        });
        
        setHasMore(page < data.total_pages)
          setLoading(false)
        })
    },[page, searchText])

    //console.log("In file:"+NewMovies[0].poster_path);
    return {loadingTv,NewTv ,hasMoreTv}

 } 
