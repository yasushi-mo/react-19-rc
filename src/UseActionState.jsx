import { useActionState } from "react";
import "./App.css";

function UseActionState() {
  const [likeCount, onClick, isPending] = useActionState(async () => {
    const response = await fetch("https://example.com/like", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likeCount }),
    });
    const jsonResponse = await response.json();
    return jsonResponse.likeCount;
  }, 0);
  console.log("🚀 ~ App ~ isPending:", isPending, "\nlikeCount:", likeCount);

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

export default UseActionState;
