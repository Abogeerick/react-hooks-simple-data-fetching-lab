import React, { useEffect, useState } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    // Send a fetch request to the dog.ceo API to get a random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received dog image URL
        setDogImageUrl(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }, []);

  return (
    <div>
      {dogImageUrl ? (
        // If we have the dog image URL, display the image
        <img src={dogImageUrl} alt="A Random Dog" />
      ) : (
        // Otherwise, display "Loading..." when the component is first rendered
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
