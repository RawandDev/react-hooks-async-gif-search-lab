import { useState } from "react";

function GifSearch({ onSearch }) {
  const [queryValue, setQueryValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(queryValue);
    setQueryValue("");
  }

  function handleChange(e) {
    setQueryValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={queryValue} placeholder="Search for a gif" />
      <button type="submit">submit</button>
    </form>
  );
}

export default GifSearch;
