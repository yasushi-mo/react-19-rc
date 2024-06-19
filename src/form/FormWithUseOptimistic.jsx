import { useActionState, useOptimistic } from "react";

function FormWithUseOptimistic() {
  const [likeCount, formAction, isPending] = useActionState(async () => {
    addOptimistic(likeCount + 1);

    await new Promise((res) => setTimeout(res, 3000));

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
      console.log(
        "🚀 ~ App ~ \ncurrentLikeCount:",
        currentLikeCount,
        "\noptimisticValue:",
        optimisticValue,
      );
      return optimisticValue;
    },
  );
  console.log(
    "🚀 ~ App ~ isPending:",
    isPending,
    "\noptimisticLikeCount:",
    optimisticLikeCount,
    "\nlikeCount:",
    likeCount,
  );

  return (
    <form action={formAction} style={{ textAlign: "center" }}>
      <strong>Like: {optimisticLikeCount}</strong>
      <hr />
      <button type="submit" disabled={isPending}>
        Like
      </button>
    </form>
  );
}

export default FormWithUseOptimistic;
