import React, { useState } from "react";

const UserInput = ({
  currentLetter,
  validateAnswer,
  translation,
  inputRef,
  focusTextInput,
}: {
  translation: any;
  inputRef: any;
  currentLetter: string;
  validateAnswer: (x: string, y: string) => any;
  focusTextInput: () => void;
}) => {
  const [userGuess, setUserGuess] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setUserGuess(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    validateAnswer(currentLetter, userGuess);
    setUserGuess("");
  };

  return (
    <div onClick={focusTextInput}>
      <form className="UserForm" onSubmit={handleSubmit}>
        <div className="FormElement">
          {" "}
          <input
            className="UserInput"
            type="text"
            value={userGuess}
            onChange={onChange}
            ref={inputRef}
            maxLength={1}
            autoFocus
          />
        </div>
        <div className="FormElement">
          <input
            style={{
              fontSize: "16px",
              padding: "15px 32px",
              margin: "10px",
              color: "white",
              backgroundColor: "#4caf50",
            }}
            type="submit"
            value={translation.submit}
          />
        </div>
      </form>
    </div>
  );
};

export default UserInput;
