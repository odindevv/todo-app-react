import React, { useState } from "react";

export const useToggleTheme = () => {
  const [isBlackMode, setIsBlackMode] = useState(false);

  const handleToggle = () => {
    setIsBlackMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isBlackMode);
    localStorage.setItem("color-mode", !isBlackMode ? "black" : "light");
  };

  return {
    handleToggle,
    setIsBlackMode,
  };
};
