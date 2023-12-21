import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {useState} from "react"
import Home from './pages/home/home';
import Movie from './pages/movieDetail/movie';
import Hero from './components/Hero/Hero';
import Header from './components/header/Header';
import { homeData } from "./dummyData"

function App() {
 
  return (
    <>
        <Router>
        <Header/>
         
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;
