import React, { useState, useEffect } from "react";

const FlashMessage = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return visible ? <div className="flash-message">{message}</div> : null;
};

export default FlashMessage;
