import { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=jOZ0zbt2IvidtNdbRaIV4VwrsJ5JC264&rating=g`
    )
      .then((response) => response.json())
      .then((data) => setGifs(data.data));
  }, [query]);

  function handleSearchGif(query) {
    setQuery(query);
  }

  console.log(query);

  return (
    <div
      style={{ display: "flex", flexDirection: "row-reverse", margin: "40px" }}
    >
      <GifSearch onSearch={handleSearchGif} />
      <GifList gif={gifs} />
    </div>
  );
}

export default GifListContainer;
