import React, { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx"
import BookRecommendation from "./BookRecommendation/BookRecommendation.jsx";
import Modal from "./Modal/Modal.jsx";

function App() {
  const [gBooksKey, setGBooksKey] = useState(() => {
    const storedKey = localStorage.getItem("gBooksKey");
    return storedKey ? storedKey : null;
  });
  const [moodInput, setMoodInput] = useState();
  const [bookDisplay, setBookDisplay] = useState(false);

  useEffect(() => {
    localStorage.setItem("gBooksKey", gBooksKey);
  }, [gBooksKey]);

  const handleApiKey = (apiKey) => {
    setGBooksKey(apiKey);
  }

  const handleSearch = (mood) => {
    setMoodInput(mood);
  }
  const handleDisplay = (display) => {
    setBookDisplay(display);
    setMoodInput(undefined);
  }


  return (
    <>
    {!gBooksKey && (
      <Modal onApiKeySubmit={handleApiKey} />
    )}

      <Header />
      {!bookDisplay && (
        <>
          <SearchBar onSearch={handleSearch} />
        </>
      )}
      <BookRecommendation moodInput={moodInput} onDisplay={handleDisplay} />
    </>
  )
}

export default App


