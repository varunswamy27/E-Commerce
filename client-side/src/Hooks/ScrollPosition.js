import { useState, useEffect } from "react";

const ScrollPosition = () => {
  const [scrollPosition, setScrollPostion] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPostion(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default ScrollPosition;
