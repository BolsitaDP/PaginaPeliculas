import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
