import React from 'react'
import '../Style/Row.css'
import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const baseUrl='https://image.tmdb.org/t/p/original';
const Row = ({title,url,isLargeRow=false}) => {
  const[movie,setmovie]=useState([]);
    const movieurl =url;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYThjMjUyZjM2NzgzOWM0MDY1NDM4MjM4NWQzYWJiMCIsInN1YiI6IjY0ZjhhMDkwYThiMmNhMDBlMTU5MGM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BC9gJmFlYma1uTYGODAVhJmdb68UWTQnoVvV5-OqkLM'
      }
    };
    useEffect(()=>{
    fetch(movieurl, options)
      .then(res => res.json())
      .then((data)=>setmovie(data.results))
      .catch(err => console.error('error:' + err));
    },[movieurl])
   const handlesubmit=()=>{
    return(<div>
      
      </div>
    )
   }
  return (
   <div className='row'>
    <h2>{title}</h2>
    <div className='row_posters'> {
      movie.map((movies)=>(
      <img onClick={handlesubmit} className={`row_poster ${isLargeRow &&'row_posterlarge'}`} src={`${baseUrl}${isLargeRow?movies.poster_path:movies.backdrop_path}`} alt={movie.name} ></img>
      ))
    }</div>
    </div>
  );}
  export default Row;