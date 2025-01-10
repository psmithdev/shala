import React, { useState } from "react";

const Results = () => {
  const [results, setResults] = useState(null);

  // Placeholder example of chakra data
  const mockResults = [
    { chakra: "Root", strength: 80 },
    { chakra: "Sacral", strength: 60 },
    { chakra: "Solar Plexus", strength: 90 },
    { chakra: "Heart", strength: 70 },
    { chakra: "Throat", strength: 50 },
    { chakra: "Third Eye", strength: 85 },
    { chakra: "Crown", strength: 95 },
  ];

  // Simulate fetching results (replace this with real data from Typeform API)
  const handleFetchResults = () => {
    setResults(mockResults);
  };

  return (
    <div className="results-container">
      <button onClick={handleFetchResults}>Get Chakra Results</button>

      {results && (
        <div className="chakra-results">
          {results.map((chakra) => (
            <div key={chakra.chakra} className="chakra-bar">
              <span>{chakra.chakra}</span>
              <div
                style={{
                  width: `${chakra.strength}%`,
                  backgroundColor: "purple",
                  height: "20px",
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
