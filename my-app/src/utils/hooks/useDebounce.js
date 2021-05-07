import React, { useState } from "react";

export default function useDebounce() {
  const [typeingTimeout, setTypingTimeout] = useState("");

  const debounce = (func, wait) => {
    clearTimeout(typeingTimeout);
    const timeout = setTimeout(() => {
      func();
      // setSearchItem(text);
    }, wait);
    setTypingTimeout(timeout);
  };
  return debounce;
}
