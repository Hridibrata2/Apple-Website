import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slideshow.css";

const Slideshow = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: API_KEY,
              language: "en-US",
              page: 1,
            },
          }
        );

        const moviesData = response.data.results.slice(0, 10);
        console.log(moviesData);
       
        const moviesWithLogos = await Promise.all(
          moviesData.map(async (movie) => {
            const imageRes = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/images`,
              {
                params: {
                  api_key: API_KEY,
                },
              }
            );

            const logo = imageRes.data.logos.find(
              (logo) => logo.iso_639_1 === "en"
            );

            return {
              ...movie,
              logo: logo ? logo.file_path : null,
            };
          })
        );

        setMovies([
          moviesWithLogos[moviesWithLogos.length - 1],
          ...moviesWithLogos,
          moviesWithLogos[0],
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
    
  }, []);

  useEffect(() => {
    if (movies.length === 0 || !isPlaying) return;

    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [movies, isPlaying]);

  useEffect(() => {
    if (movies.length === 0) return;

    if (index === movies.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(movies.length - 2);
      }, 700);
    }
  }, [index, movies]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  }, [transition]);

  return (
    <div className="slideshow">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(calc(15vw - ${
            index * 70
          }vw - ${index * 20}px))`,
          transition: transition
            ? "transform 0.7s ease-in-out"
            : "none",
        }}
      >
        {movies.map((movie, i) => (
          <div className={`slide ${i === index ? "active" : ""}`} key={i}>
            <img
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
            />

            {i === index && (
              <div className="overlay">
                <div className="movie-info">
                  {movie.logo ? (
                    <img
                      className="movie-logo"
                      src={`${IMAGE_BASE_URL}${movie.logo}`}
                      alt={movie.title}
                    />
                  ) : (
                    <h1>{movie.title}</h1>
                  )}

                  <button>Stream now</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="dots">
        {movies.slice(1, -1).map((_, i) => (
          <span
            key={i}
            className={i + 1 === index ? "active-dot" : ""}
          ></span>
        ))}
      </div>

      <button
        className="pause-btn"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
};

export default Slideshow;