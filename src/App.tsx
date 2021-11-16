import React, { useEffect, useRef, useState } from "react";

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
import { Header } from "./components/Header";
import { Points } from "./components/Points";
import ChirpMP3 from "./assets/feedback_ok.mp3";
import forestMP3 from "./assets/forest.mp3";
import { soundsLitery } from "./utils/generateLetterSounds";

let AppText = getTranslation("pl");

function App() {
  const [letter, setNextLetter] = useState(alphabet[getIndx]);
  const [points, setPoints] = useState(0);
  const [image, setNextImage] = useState("");
  const [displayOk, setDisplayOk] = useState(false);
  const [lang, setLang] = useState({ eng: false, pl: true });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const audioElement = new Audio(ChirpMP3);
  const forestAudio = new Audio(forestMP3);
  console.log(soundsLitery);
  useEffect(() => {
    const getPic = rewardImages[getRandomNumber(0, rewardImages.length - 1)];

    if (getPic.default) {
      setNextImage(getPic.default);
    }
    if (lang.eng) {
      AppText = getTranslation("eng");
    }

    if (lang.pl) {
      AppText = getTranslation("pl");
    }

    startForestAudio();

    return () => {};
  }, [lang]);

  const start = () => {
    audioElement
      .play()
      .then(() => {})

      .catch((error) => {});
  };

  const startForestAudio = () => {
    forestAudio
      .play()
      .then(() => {})

      .catch((error) => {});
  };

  const validateAnswer = (target: string, userLetter: string): boolean => {
    if (target === userLetter.toLocaleUpperCase()) {
      setDisplayOk(true);
      start();

      return true;
    }
    return false;
  };

  const changeLang = (lng: string) => {
    if (lng === "en") {
      setLang({ ...lang, eng: true, pl: false });
    } else if (lng === "pl") {
      setLang({ ...lang, eng: false, pl: true });
    }
    return;
  };

  const handleClick = (): void => {
    setNextLetter(alphabet[getRandomNumber(0, alphabet.length - 1)]);
    setPoints((prevState) => prevState + 1);
    console.log(points, "points");

    const getPic = rewardImages[getRandomNumber(0, rewardImages.length - 1)];
    if (getPic.default) {
      setNextImage(getPic.default);
    }
    setDisplayOk(false);
  };

  const focusTextInput = () => {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    inputRef.current?.focus();

    if (displayOk) {
      handleClick();
    }
  };

  const resetGame = () => {
    setPoints(0);
  };

  return (
    <div>
      {" "}
      <Header translation={AppText} changeLang={changeLang} />
      <Points resetGame={resetGame} translation={AppText} points={points} />
      <div className="App" onClick={focusTextInput} tabIndex={-1}>
        <div className="Content">
          <main className="Game">
            {displayOk ? (
              <Feedback
                rewardPicture={image}
                handleClick={handleClick}
                translation={AppText}
                divRef={divRef}
              />
            ) : (
              <div className="MainGame">
                <FindLetter translation={AppText} currentLetter={letter} />
                <UserInput
                  translation={AppText}
                  currentLetter={letter}
                  validateAnswer={validateAnswer}
                  inputRef={inputRef}
                  focusTextInput={focusTextInput}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
