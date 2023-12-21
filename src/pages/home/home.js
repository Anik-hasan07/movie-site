/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home