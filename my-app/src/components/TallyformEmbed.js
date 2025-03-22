import React, { useEffect } from "react";

/* global Tally */

const TallyFormEmbed = () => {
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    // Check if the Tally script is already loaded
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.onload = () => {
        if (typeof Tally !== "undefined") {
          Tally.loadEmbeds();
        }
      };
      script.onerror = () => {
        console.error("Failed to load Tally embed script.");
      };
      document.body.appendChild(script);
    } else if (typeof Tally !== "undefined") {
      Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/woKLa1?hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="2769"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Chakra Checkin"
    ></iframe>
  );
};

export default TallyFormEmbed;
