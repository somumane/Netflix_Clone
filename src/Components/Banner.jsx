import React from 'react'
import '../Style/Banner.css'
import { useEffect,useState } from 'react';



function truncate(string,n){
  return string?.length>n? string.substr(0,n-1)+'....':string;
}

const Banner = () => {

  const[movie,setmovie]=useState([]);
    const url = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYThjMjUyZjM2NzgzOWM0MDY1NDM4MjM4NWQzYWJiMCIsInN1YiI6IjY0ZjhhMDkwYThiMmNhMDBlMTU5MGM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BC9gJmFlYma1uTYGODAVhJmdb68UWTQnoVvV5-OqkLM'
      }
    };
    useEffect(()=>{
    fetch(url, options)
      .then(res => res.json())
      .then((data)=>setmovie(data.results[Math.floor(Math.random()*data.results.length-1)]))
      .catch(err => console.error('error:' + err));
    },[])

  return (
    <header className='banner' style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
      ,backgroundPosition:"center"
    
    }
  }>
    <div className='banner_contains'>
    <h1 className='banner_tittle'>{movie?.original_title || movie?.title ||movie?.name }</h1>
    <div className='banner_buttons'>
    <button className='banner_button'>Play</button>
    <button className='banner_button'>My List</button>
    </div>
    {console.log(movie)}
    <div className='banner_description'>
     <h1>{ truncate(`${movie.overview}`,200)}
     </h1></div>
    </div>
    <div className='banner_footer'/>
    </header>
      )
}

export default Banner
