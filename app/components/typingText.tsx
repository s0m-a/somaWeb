"use client";
import { TypingTextProps } from "../utils/interface";
import { useEffect, useState } from "react";
export default function TypingText({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  className,
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  useEffect(() => {
    const target = texts[currentTextIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < target.length) {
            setCurrentText(target.slice(0, currentText.length + 1));
          } else {
            // Finished typing,
            // start deleting after pause
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );
    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    speed,
    deleteSpeed,
    pauseDuration,
  ]);
  return <span className={className}>{currentText}</span>;
}
