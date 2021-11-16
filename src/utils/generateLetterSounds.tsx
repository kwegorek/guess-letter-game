function importAll(r: any) {
  let sounds: any = {};

  r.keys().map((item: any) => {
    // sounds.push(r(item));
    sounds[item.replace("./", "")] = r(item).default;
  });
  return sounds;
}

// @ts-ignore
export const soundsLitery = importAll(
  require.context("../../src/assets/sounds", false, /.mp3/)
);
