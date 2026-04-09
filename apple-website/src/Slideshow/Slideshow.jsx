// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlay, FaPause } from "react-icons/fa";
// import "./Slideshow.css";

// const Slideshow = () => {
//   const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
//   const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

//   const [movies, setMovies] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   useEffect(() => {
//     const getMovies = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.themoviedb.org/3/movie/popular",
//           {
//             params: {
//               api_key: API_KEY,
//               language: "en-US",
//               page: 1,
//             },
//           }
//         );

//         const topPicks = response.data.results.slice(0, 5);

//         const moviesWithLogos = await Promise.all(
//           topPicks.map(async (movie) => {
//             const logoRes = await axios.get(
//               `https://api.themoviedb.org/3/movie/${movie.id}/images`,
//               {
//                 params: { api_key: API_KEY },
//               }
//             );

//             const logo = logoRes.data.logos.find(
//               (l) => l.iso_639_1 === "en"
//             )?.file_path;

//             return { ...movie, logo };
//           })
//         );

//         setMovies(moviesWithLogos);
//       } catch (error) {
//         console.error("Failed to fetch data", error);
//       }
//     };

//     getMovies();
//   }, []);

//   useEffect(() => {
//     if (!isPlaying || movies.length === 0) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % movies.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [movies, isPlaying]);

//   const currentMovie = movies[index];

//   return (
//     <div className="slideshow">
//       {currentMovie && (
//         <div className="slide">

//           <img
//             className="background"
//             src={`${IMAGE_BASE_URL}${currentMovie.backdrop_path}`}
//             alt={currentMovie.title}
//           />

//           <div className="overlay">
//             {currentMovie.logo ? (
//               <img
//                 className="logo"
//                 src={`${IMAGE_BASE_URL}${currentMovie.logo}`}
//                 alt="logo"
//               />
//             ) : (
//               <h1>{currentMovie.title}</h1>
//             )}
//           </div>
//         </div>
//       )}

//       <button
//         className="play-btn"
//         onClick={() => setIsPlaying(!isPlaying)}
//       >
//         {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
//       </button>
//     </div>
//   );
// };

// export default Slideshow;

import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./Slideshow.css"

const Slideshow = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

  const [movie, setMovies] = useState([])
  const [index, setIndex] = useState(0)

useEffect(() => {
      const findMovies = async () => {
        try {
          const response = await axios.get(
             "https://api.themoviedb.org/3/movie/popular",
             {
              params: {
                api_key: API_KEY,
                language: "en-US",
                page: 1
              },
             }
          )

          const moviesGot =  response.data.results.slice(0,6)
          setMovies(moviesGot)
          console.log(moviesGot)

        } catch (error) {
          console.error("cannot get the data")
        }
      }
      findMovies()
}, [])

return (
  <div>
    {movie.map((movies) => (
      <img
        key={movies.id}
        src={`${IMAGE_BASE_URL}${movies.backdrop_path}`}
        alt={movies.title}
      />
    ))}
  </div>
)
}
export default Slideshow
