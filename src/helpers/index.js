import { createElement } from "react";
import { toast } from "react-toastify";

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") return storedPrefs !== "light"; // Light theme
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) return true; //User System theme - Dark
  }

  return false; // light theme as the default;
};

//Decode html entities from articles
export const renderHTML = (escapedHTML) =>
  createElement("div", {
    dangerouslySetInnerHTML: { __html: escapedHTML },
  });

//Calculate read time of the article
export const readTime = (word_count) => Math.ceil(+word_count / 225) + 1;

//Error Toast
export const ErrorToast = ({ message = "", darkMode = false }) =>
  toast.error(message, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    draggable: false,
    progress: undefined,
    theme: darkMode ? "dark" : "light",
    style: { background: darkMode && "#0D1116" },
  });
