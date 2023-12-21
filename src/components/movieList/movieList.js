import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import { homeData } from "../../dummyData"
import Hero from '../../components/Hero/Hero';


const MovieList = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const { type } = useParams();
   const [items, setItems] = useState(homeData)

  useEffect(() => {
    getUpcomingData();
    getPopularData();
  }, []);

  const getUpcomingData = () => {
    fetch(
      `http://localhost:4000/api/v1/upcoming/movie`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ file: movieList.js:88 ~ .then ~ data:", data)
        const upcomingMovies = data?.movies[0]?.results.slice(0, 6);
        setUpcomingMovies(upcomingMovies);  
      });
  };

  const getPopularData = () => {
    fetch(
      `http://localhost:4000/api/v1/movies`
    )
      .then((res) => res.json())
      .then((data) => {
        const popularMovies = data.movies.slice(0, 12);
        setPopularMovies(popularMovies);
      });
  };


  return (
    <>
       <Hero items={items}/>
      <div className="movie__list1">
        <h2 className="list__title">{(type ? type : "UPCOMING MOVIES").toUpperCase()}</h2>
        <div className="list__cards">
          {
            popularMovies.map(movie => (
              <Cards movie={movie} />
            ))
          }
        </div>
      </div>
      <div className="movie__list2">
        <h2 className="list__title">{(type ? type : "upcoming").toUpperCase()}</h2>
        <div className="list__cards">
          {
            upcomingMovies.map(movie => (
              <Cards movie={movie} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default MovieList;
