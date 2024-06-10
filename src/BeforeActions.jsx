import { useState } from "react";
import "./App.css";

function App() {
  const [likeCount, setLikeCount] = useState(0);
  const [isPending, setIsPending] = useState(false);

  const onClick = async () => {
    setIsPending(true);
    const response = await fetch("https://example.com/like", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likeCount }),
    });
    const jsonResponse = await response.json();
    setLikeCount(jsonResponse.likeCount);
    setIsPending(false);
  };

  return (
    <>
      <strong>Like: {likeCount}</strong>
      <hr />
      <button onClick={onClick} disabled={isPending}>
        Like
      </button>
    </>
  );
}

export default App;
