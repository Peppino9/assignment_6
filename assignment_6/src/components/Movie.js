import React from "react";

function Movie({ title, grade, onRemove }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center bg-light mb-2 border">
      <span>{title}</span>
      <span className="d-flex align-items-center gap-2">
        {/* Stars */}
        <span>
          {[...Array(grade)].map((_, i) => (
            <img
              key={i}
              src="/star.png"
              alt="star"
              width={22}
              height={22}
              style={{ marginLeft: i !== 0 ? 2 : 0 }}
            />
          ))}
        </span>
        {/* Delete icon */}
        <button
          className="btn btn-link p-0 ms-2"
          title="Ta bort"
          onClick={onRemove}
          style={{ outline: "none", boxShadow: "none" }}
        >
          <img src="/delete.png" alt="delete" width={26} height={26} />
        </button>
      </span>
    </li>
  );
}

export default Movie;
