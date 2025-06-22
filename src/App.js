// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MoviePlayer from "./pages/MoviePlayer";
import MovieDetail from "./pages/MovieDetails"; // Correct path
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/player" element={<MoviePlayer />} />
        <Route path="/moviedetails/:type/:index" element={<MovieDetail />} />
        <Route path="/videoplayer" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
