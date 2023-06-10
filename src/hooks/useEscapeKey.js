import React from "react";

export const useEscapeKey = (escapeAction) => {

  React.useEffect(() => {
    const handler = window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (escapeAction) {
          escapeAction();
        }
      }
    }, []);

    return () => {
      window.removeEventListener("keydown", handler);
    }
  }, [escapeAction]);

  return {
  }
}