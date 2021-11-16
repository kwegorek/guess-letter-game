import React, { useCallback } from "react";

const Feedback = ({
  translation,
  divRef,
  handleClick,
  rewardPicture,
}: {
  translation: any;
  divRef: any;
  rewardPicture: any;
  handleClick: () => any;
}) => {
  const onKeyPressed = (e: any) => {
    console.log(e.key, "pressed");
    handleClick();
  };

  const callbackRef = useCallback((inputElement) => {
    console.log("e");
    if (inputElement) {
      console.log(inputElement);
      inputElement.focus();
    }
  }, []);

  return (
    <div
      tabIndex={-1}
      onKeyPress={onKeyPressed}
      ref={callbackRef}
      className="Feedback"
    >
      <div>
        <h4>{translation.feedback_ok}</h4>
      </div>
      <div className="imgContainer">
        <img src={rewardPicture}></img>
      </div>
    </div>
  );
};

export default Feedback;
