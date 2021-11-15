import React from "react";

const FindLetter = ({
  currentLetter,
  translation,
}: {
  currentLetter: string;
  translation: any;
}) => {
  return (
    <div className="FindLetter">
      <h3>{translation.choose_find_letter}</h3>
      <h3>{currentLetter}</h3>
    </div>
  );
};

export default FindLetter;
