import React, { useEffect, useRef } from "react";
import { createWidget } from "@typeform/embed";
import "./typeformEmbed.css"; // Import the CSS for styling

const TypeformEmbed = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      createWidget("WqXKx61Y", {
        container: containerRef.current,
        width: "100%",
        height: "100%",
      });
    }
  }, []);
  return (
    <div ref={containerRef} className="typeform-container">
      {/* No inline styles on the iframe */}
    </div>
  );
};

export default TypeformEmbed;
