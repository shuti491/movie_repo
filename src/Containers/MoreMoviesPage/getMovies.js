 import  {useEffect, useState } from 'react';
 import * as genreList from './genres';

export default function GetMovies(page, pageGenre) {

const genres= genreList.default.genres;
const result=genres.filter(block =>block.name===pageGenre)
console.log('id'+result[0].id);

const [loading ,setLoading] =useState(true);
const[NewMovies,setMovies]=useState([]);
const [hasMore,setHasMore]=useState(true);

    useEffect(()=>{
        setLoading(true);
        console.log("https://api.themoviedb.org/3/discover/movie?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_genres="+result[0].id)
        
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=b4782d9afceaa0f29c118122d0c8e4bf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_genres="+result[0].id)
        .then(response => response.json())
        .then(data=>{
            console.log("result:"+data.results);
        setMovies(prevMovies =>{
            return [...prevMovies,...data.results]
        });
        setHasMore(page < data.total_pages)
          setLoading(false)
        })
    },[page, pageGenre])

    //console.log("In file:"+NewMovies[0].poster_path);
    return {loading,NewMovies ,hasMore}

 }
