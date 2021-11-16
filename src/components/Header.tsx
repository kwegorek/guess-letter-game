import React from "react";

export const Header = ({
  translation,
  changeLang,
}: {
  translation: any;
  changeLang: (lang: string) => any;
}) => {
  return (
    <header className="Header">
      <h5>{translation.choose_language}</h5>{" "}
      <button onClick={() => changeLang("en")}>en</button>{" "}
      <button onClick={() => changeLang("pl")}>pl</button>
    </header>
  );
};
