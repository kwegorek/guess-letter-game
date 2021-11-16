function importAll(r: any) {
  let images: any = [];

  r.keys().map((item: any) => {
    images.push(r(item));
    // images[item.replace("./", "")] = r(item);
  });
  return images;
}

// @ts-ignore
export const rewardImages = importAll(
  require.context("../../src/assets", false, /.png/)
);

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
export const alphabet = alpha.map((x) => String.fromCharCode(x));

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getIndx = getRandomNumber(0, 4);
