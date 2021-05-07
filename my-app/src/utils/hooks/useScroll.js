import React, { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollPos, setScrollPos] = useState(null);
  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollPos;
}
