import React, { useCallback, useEffect, useState } from "react";

const Typewriter = ({
  text = "Type your text here...",
  speed = 100,
  delay = 0,
  onComplete = () => {},
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsTyping(false);
  }, [text]);

  const startTyping = useCallback(() => {
    setIsTyping(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (delay > 0 && !isTyping) {
      timer = setTimeout(startTyping, delay);
      return () => clearTimeout(timer);
    } else {
      startTyping();
    }
  }, [delay, isTyping, startTyping]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping && currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else if (currentIndex >= text.length) {
      onComplete();
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, onComplete, speed, text]);

  return (
    <div className={`font-mono ${className}`}>
      <div
        className="typewriter-content"
        dangerouslySetInnerHTML={{ __html: displayText }}
      ></div>
      <span className="typewriter-cursor" />
    </div>
  );
};

export default Typewriter;
