"use client";

import React, { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
import { Button } from "~/components/ui/button";

interface ConfettiProps {
  duration?: number;
}

export const Confetti: React.FC<ConfettiProps> = ({ duration = 5000 }) => {
  const [isActive, setIsActive] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 3000);
    detectSize();
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsActive(false), duration);
      return () => clearTimeout(timer);
    }
  }, [isActive, duration]);

  const startConfetti = () => setIsActive(true);

  return (
    <>
      {isActive && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
          aria-hidden="true"
        />
      )}
    </>
  );
};
