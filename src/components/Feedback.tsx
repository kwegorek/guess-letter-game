import React, { useEffect, useState } from "react";

const Feedback = ({
  translation,
  handleClick,
  rewardPicture,
}: {
  translation: any;
  rewardPicture: string;
  handleClick: (e: any) => any;
}) => {
  console.log(rewardPicture);
  return (
    <div className="Feedback">
      <div className="imgContainer">
        <img src={rewardPicture}></img>
      </div>

      <h4>{translation.feedback_ok}</h4>
      <button className="BtnSubmit" onClick={handleClick}>
        {translation.next}
      </button>
    </div>
  );
};

export default Feedback;
