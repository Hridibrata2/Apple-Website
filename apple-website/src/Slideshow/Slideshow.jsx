import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Slideshow.css';

const Slideshow = () => {

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        setMovies(response.data.results.slice(0, 5));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }

    };

    fetchMovies();
  }, []);

  console.log(movies);

  return (
   <div>

  </div>
  )
}

export default Slideshow