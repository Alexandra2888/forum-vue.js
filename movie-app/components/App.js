import React from 'react';
import Movie from './Movie';
import App from './App';

const FEATURED_API = 

function App() {
  const movies = ['1','2', '3'];
  return <div>
    {movies.map(movie => (
      <Movie />
    ))}
  </div>
}






export default App;
