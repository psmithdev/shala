import React, { useEffect, useRef } from "react";
import { createWidget } from "@typeform/embed";
import "./typeformEmbed.css"; // Import the CSS for styling

const TypeformEmbed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      createWidget("01JGZ7YFKVJ764D7MGJP3RV11W", {
        container: containerRef.current,
      });
    }
  }, []);

  return <div ref={containerRef} className="typeform-container" />;
};

export default TypeformEmbed;
