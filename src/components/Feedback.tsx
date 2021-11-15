import React, { useEffect, useState } from "react";

const Feedback = ({
  translation,
  handleClick,
  rewardPicture,
}: {
  translation: any;
  rewardPicture: any;
  handleClick: (e: any) => any;
}) => {
  console.log(rewardPicture);
  return (
    <div className="Feedback">
      <div className="imgContainer">
        <img src={rewardPicture}></img>
      </div>
      <div>
        <h4>{translation.feedback_ok}</h4>
        <button className="BtnSubmit" onClick={handleClick}>
          {translation.next}
        </button>
      </div>
    </div>
  );
};

export default Feedback;
