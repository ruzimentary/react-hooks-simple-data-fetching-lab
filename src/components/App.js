// create your App component here
import { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDogImage() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
