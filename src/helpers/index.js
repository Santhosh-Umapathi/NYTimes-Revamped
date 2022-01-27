import { createElement } from "react";

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light"; // light theme as the default;
};

//Decode html entities from articles
export const renderHTML = (escapedHTML) =>
  createElement("div", {
    dangerouslySetInnerHTML: { __html: escapedHTML },
  });

//Calculate read time of the article
export const readTime = (word_count) => Math.ceil(+word_count / 225);
