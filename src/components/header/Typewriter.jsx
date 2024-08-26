import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts, speed = 100, delay = 1500 }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing) {
      const timer = setTimeout(() => {
        setText(texts[index].substring(0, text.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTyping(true);
        setText('');
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [text, typing, index, texts, speed, delay]);

  useEffect(() => {
    if (text === texts[index]) {
      setTyping(false);
    }
  }, [text, index, texts]);

  return <div className="typewriter">{text}</div>;
};

export default Typewriter;
