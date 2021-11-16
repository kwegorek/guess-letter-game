import React, { useEffect } from "react";
import { soundsLitery } from "../utils/generateLetterSounds";

const FindLetter = ({
  currentLetter,
  translation,
}: {
  currentLetter: string;
  translation: any;
}) => {
  let audioSrc = `litera_${currentLetter}.mp3`;

  useEffect(() => {
    if (currentLetter) {
      new Audio(soundsLitery[audioSrc])
        .play()
        .then(() => {})

        .catch((error: any) => {
          console.log(error);
        });
    }
    return () => {};
  }, [currentLetter]);
  return (
    <div className="FindLetter">
      <h2 style={{ fontSize: "50px" }}>
        {/* {translation.choose_find_letter} */}
        {currentLetter}
      </h2>
    </div>
  );
};

export default FindLetter;
