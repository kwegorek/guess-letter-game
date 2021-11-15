import React, { useState } from "react";

const UserInput = ({
  currentLetter,
  validateAnswer,
  translation,
}: {
  translation: any;
  currentLetter: string;
  validateAnswer: (x: string, y: string) => any;
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
    <div>
      <form className="UserForm" onSubmit={handleSubmit}>
        <div className="FormElement">
          {" "}
          <input
            className="UserInput"
            type="text"
            value={userGuess}
            onChange={onChange}
            maxLength={1}
          />
        </div>
        <div className="FormElement">
          <input
            className="BtnSubmit"
            type="submit"
            value={translation.submit}
          />
        </div>
      </form>
    </div>
  );
};

export default UserInput;
