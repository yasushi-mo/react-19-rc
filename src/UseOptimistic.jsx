import { useActionState, useOptimistic } from "react";

function UseOptimistic() {
  const [likeCount, onClick, isPending] = useActionState(async () => {
    addOptimistic(1);
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

  const [optimisticLikeCount, addOptimistic] = useOptimistic(
    likeCount,
    (currentLikeCount, optimisticValue) => {
      return currentLikeCount + optimisticValue;
    }
  );
  console.log(
    "🚀 ~ App ~ isPending:",
    isPending,
    "\noptimisticLikeCount:",
    optimisticLikeCount,
    "\nlikeCount:",
    likeCount
  );

  return (
    <>
      <strong>Like: {optimisticLikeCount}</strong>
      <hr />
      <button onClick={onClick} disabled={isPending}>
        Like
      </button>
    </>
  );
}

export default UseOptimistic;
