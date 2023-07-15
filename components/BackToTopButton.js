import React from 'react';
import { useEffect, useState } from 'react';
import { ReactComponent as UpArrow } from '../public/back-to-top.svg';

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 1080) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="App">
      {backToTopButton && (
        <button 
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            background: "transparent",
            border: "none",
            outline: "none",
            cursor: "pointer",
            opacity: 0,
            transition: "opacity 0.5s",
            opacity: backToTopButton ? 1 : 0,
        }}
        onClick={scrollUp}
        >
          <UpArrow 
            style={{
              fill: "#333",
              width: "100%",
              height: "100%",
            }}
          />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;