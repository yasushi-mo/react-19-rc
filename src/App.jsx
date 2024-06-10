import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [likeCount, setLikeCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  console.log("🚀 ~ App ~ isPending:", isPending, "\nlikeCount:", likeCount);

  const onClick = async () => {
    startTransition(async () => {
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
    });
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

// const onClick = async () => {
//   const response = await fetch("https://example.com/user");
//   const jsonResponse = await response.json();
//   console.log("🚀 ~ onClick ~ jsonResponse:", jsonResponse);
// };

{
  /* <button onClick={onClick}>User</button> */
}
