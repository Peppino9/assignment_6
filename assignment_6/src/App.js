import React, { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import Movies from "./components/Movies";
import OrderByAlphaButton from "./components/OrderByAlphaButton";
import OrderByGradeButton from "./components/OrderByGradeButton";

function App() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState(null); 

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  // Sortera
  let sortedMovies = [...movies];
  if (sortBy === "alpha") {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "grade") {
    sortedMovies.sort((a, b) => b.grade - a.grade);
  }

  return (
    <div className="container" style={{ maxWidth: 600 }}>
      <h1 className="mt-4">Min filmlista</h1>
      <AddMovieForm onAdd={addMovie} />
      <h3 className="mt-5 mb-3">Inlagda filmer</h3>
      <Movies movies={sortedMovies} onRemove={removeMovie} />
      <div className="mt-3 d-flex gap-2">
        <OrderByAlphaButton setSortBy={setSortBy} />
        <OrderByGradeButton setSortBy={setSortBy} />
      </div>
    </div>
  );
}

export default App;
