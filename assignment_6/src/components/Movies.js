import React from "react";
import Movie from "./Movie";

function Movies({ movies, onRemove }) {
  if (movies.length === 0) return <p>Inga filmer tillagda än.</p>;

  return (
    <ul className="list-group">
      {movies.map((movie, i) => (
        <Movie
          key={i}
          title={movie.title}
          grade={movie.grade}
          onRemove={() => onRemove(i)}
        />
      ))}
    </ul>
  );
}

export default Movies;
