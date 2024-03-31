import React, { useState } from "react";
import "./XDictionary.css";

const initialDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function XDictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm === "") {
      setSearchResult("Please enter a search term.");
      return;
    }

    const foundWord = initialDictionary.find(
      (word) => word.word.toLowerCase() === trimmedSearchTerm.toLowerCase()
    );

    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="dictionary-container">
      <h1> Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <h3>Definition:</h3>
      </div>
      {searchResult && (
        <div className="result-container">
          <p>{searchResult}</p>
        </div>
      )}
    </div>
  );
}

export default XDictionary;
