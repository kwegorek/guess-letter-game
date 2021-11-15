import React, { KeyboardEventHandler, useEffect, useState } from "react";

import "./App.css";
import UserInput from "./components/UserInput";
import FindLetter from "./components/FindLetter";
import {
  alphabet,
  getIndx,
  getRandomNumber,
  rewardImages,
} from "./utils/generateLetters";
import { getTranslation } from "./AppText";
import Feedback from "./components/Feedback";

let AppText = getTranslation("pl");

function App() {
  const [letter, setNextLetter] = useState(alphabet[getIndx]);
  const [image, setNextImage] = useState(rewardImages[getIndx]);
  const [displayOk, setDisplayOk] = useState(false);
  const [lang, setLang] = useState({ eng: false, pl: true });

  useEffect(() => {
    if (lang.eng) {
      AppText = getTranslation("eng");
    }

    if (lang.pl) {
      AppText = getTranslation("pl");
    }

    return () => {};
  }, [lang]);

  const validateAnswer = (target: string, userLetter: string): boolean => {
    if (target === userLetter) {
      setDisplayOk(true);

      return true;
    }
    return false;
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setNextLetter(alphabet[getRandomNumber(0, alphabet.length-1)]);
    setNextImage(rewardImages[getRandomNumber(0, rewardImages.length-1)]);
    console.log(image, "-");
    setDisplayOk(false);
  };

  return (
    <div className="App">
      <div className="Content">
        <main className="Game">
          {displayOk ? (
            <Feedback
              rewardPicture={image}
              handleClick={handleClick}
              translation={AppText}
            />
          ) : (
            <div>
              <header className="Header">
                <span>{AppText.choose_language}</span>{" "}
                <button
                  onClick={(e) => setLang({ ...lang, eng: true, pl: false })}
                >
                  en
                </button>{" "}
                <button
                  onClick={(e) => setLang({ ...lang, eng: false, pl: true })}
                >
                  pl
                </button>
              </header>
              <FindLetter translation={AppText} currentLetter={letter} />
              <UserInput
                translation={AppText}
                currentLetter={letter}
                validateAnswer={validateAnswer}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
