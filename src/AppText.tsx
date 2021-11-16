export const AppText = {
  choose_language: "",
  choose_find_letter: "",
  next: "",
  submit: "",
  feedback_ok: "",
  letter: "",
};

export const getTranslation = (lang: string) => {
  if (lang === "eng") {
    return {
      choose_language: "Choose Language",
      choose_find_letter: "Find Letter",
      next: "Next",
      submit: "Submit",
      feedback_ok: "Good Job!",
      letter: "Letter",
      points: "Points: ",
      new_game: "New Game",
    };
  } else if (lang === "pl") {
    return {
      choose_language: "Wybierz język",
      next: "Graj dalej",
      submit: "Sprawdź",
      feedback_ok: "Świetnie!",
      choose_find_letter: "Znajdź literę",
      letter: "Litera",
      points: "Punkty: ",
      new_game: "Nowa  Gra",
    };
  }

  return {
    choose_language: "Wybierz język",
    next: "Graj dalej",
    submit: "Sprawdź",
    feedback_ok: "Świetnie!",
    choose_find_letter: "Znajdź litere",
    letter: "Litera",
    points: "Punkty: ",
    new_game: "Nowa  Gra",
  };
};
