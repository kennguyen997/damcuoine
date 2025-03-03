import React, { useEffect } from "react";
import "./FallingHearts.css";

const FallingHearts = () => {
  useEffect(() => {
    const createHeart = () => {
      const container = document.getElementById("falling-hearts");
      const heart = document.createElement("div");
      heart.className = "heart";
      // Randomize position
      heart.style.left = `${Math.random() * 100}vw`;
      // Randomize size
      const size = Math.random() * 20 + 10;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      // Randomize animation delay
      const delay = Math.random() * 10;
      heart.style.animationDelay = `${delay}s`;
      // Add heart to container
      container?.appendChild(heart);
      // Remove heart after animation ends
      setTimeout(() => {
        heart.remove();
      }, 6000);
    };

    // Create hearts periodically
    const interval = setInterval(createHeart, 200);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);
  return <div id="falling-hearts"/>;
};

export default FallingHearts;
