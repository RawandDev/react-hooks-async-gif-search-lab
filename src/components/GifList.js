import React from "react";

function GifList({ gif }) {
  const displayGif = gif.map((gif, i) => {
    return (
      <li key={gif.id} style={{ listStyleType: "none" }}>
        <img src={gif.images.original.url} alt={gif.slug} />
      </li>
    );
  });

  return <ul>{displayGif}</ul>;
}

export default GifList;
