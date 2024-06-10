import { useState } from "react";
import "./App.css";

function App() {
  const [likeCount, setLikeCount] = useState(0);

  // const onClick = async () => {
  //   const response = await fetch("https://example.com/user");
  //   const jsonResponse = await response.json();
  //   console.log("🚀 ~ onClick ~ jsonResponse:", jsonResponse);
  // };

  const onPost = async () => {
    const response = await fetch("https://example.com/like", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likeCount }),
    });
    const jsonResponse = await response.json();
    console.log("🚀 ~ onPost ~ jsonResponse:", jsonResponse);
    setLikeCount(jsonResponse.likeCount);
  };

  return (
    <>
      {/* <button onClick={onClick}>User</button> */}
      <strong>Like: {likeCount}</strong>
      <hr />
      <button onClick={onPost}>Post</button>
    </>
  );
}

export default App;
