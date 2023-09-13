import React from 'react'
import Nava from './Nava'
import Banner from './Banner'
import Row from './Row'
const Home = () => {
  return (
    <div className='homeScreen'>
  <Nava/>
 <Banner/>
<Row title='Netflix_Orignal' url='https://api.themoviedb.org/3/trending/all/week?language=en-US' isLargeRow/>
<Row title='Top Rated'  url='https://api.themoviedb.org/3/movie/top_rated?language=en-US' />
<Row title='Action Movies' url='https://api.themoviedb.org/3/discover/movie?with_genres=28'/>
<Row title='Comedy Movies' url='https://api.themoviedb.org/3/discover/movie?with_genres=35' />
<Row title='Horror Movies' url='https://api.themoviedb.org/3/discover/movie?with_genres=27'/>
<Row title='Romance Movies' url='https://api.themoviedb.org/3/discover/movie?with_genres=10749'/>
<Row title='Documentaries' url='https://api.themoviedb.org/3/discover/movie?with_genres=99'/>
<Row title='Romance Movies' url='https://api.themoviedb.org/3/discover/movie?with_genres=37'/>
<Row title='Action Movies' url='https://api.themoviedb.org/3/discover/movie?with_genres=36'/>
    </div>
  )
}

export default Home
