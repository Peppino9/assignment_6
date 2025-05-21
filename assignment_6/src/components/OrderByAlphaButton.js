import React from "react";

function OrderByAlphaButton({ setSortBy }) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => setSortBy("alpha")}
    >
      Alfabetisk ordning
    </button>
  );
}

export default OrderByAlphaButton;
