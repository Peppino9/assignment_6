import React, { useState } from "react";

function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !grade) {
      window.alert("Du måste ange både titel och betyg!");
      return;
    }
    onAdd({ title, grade: Number(grade) });
    setTitle("");
    setGrade("");
    window.alert("Filmen har lagts till!");
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 pb-3 border-bottom">
      <h4>Lägg till en film</h4>
      <div className="mb-2">
        <label className="form-label" htmlFor="title">Titel:</label>
        <input
          id="title"
          type="text"
          className="form-control"
          placeholder="Titel här..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="grade">Betyg:</label>
        <select
          id="grade"
          className="form-select"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">Spara film</button>
    </form>
  );
}

export default AddMovieForm;
