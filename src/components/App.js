// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        console.log(data);
        setData(data.message);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? <p>Loading....</p> : <img src={data} alt="A Random Dog" />}
    </div>
  );
}

export default App;
