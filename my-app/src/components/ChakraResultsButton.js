import { useState } from "react";

export default function ChakraResultsButton() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    try {
      const response = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1ImL5x4_pVZpNWK2NDF4P7x3FCzD64JxNSnqBUZ2oFLg/values/Sheet2?key=AIzaSyAkGr-sTn6S9ZGZbuJbzEAPbxi1xkrr5pQ"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setResults(data.values);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={fetchResults}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Get Chakra Results
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {results && (
        <div className="mt-4">
          <h2 className="font-bold">Chakra Results:</h2>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
