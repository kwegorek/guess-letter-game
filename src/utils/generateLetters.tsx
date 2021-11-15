import feedback from "../assets/letter.png";
import baloons from "../assets/baloons.png";
import scooby from "../assets/Scoobydoo.jpeg";

export const rewardImages = [scooby, baloons, feedback];

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
export const alphabet = alpha.map((x) => String.fromCharCode(x));

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getIndx = getRandomNumber(0, 4);
