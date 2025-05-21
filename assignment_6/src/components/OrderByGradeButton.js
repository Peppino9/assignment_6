import React from "react";

function OrderByGradeButton({ setSortBy }) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => setSortBy("grade")}
    >
      Betygsordning
    </button>
  );
}

export default OrderByGradeButton;
