import React from "react";

export const Points = ({
  translation,
  points,
  resetGame,
}: {
  translation: any;
  points: number;
  resetGame:  () => void
}) => {
  return (
    <div className="Points">
      <h5>
        {translation.points}
        <span>{points}</span>
      </h5>
      <button onClick={resetGame}>{translation.new_game}</button>
    </div>
  );
};
