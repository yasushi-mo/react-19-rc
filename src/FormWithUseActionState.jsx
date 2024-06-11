import { useActionState } from "react";

function FormWithUseActionState() {
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
    <form action={onClick}>
      <strong>Like: {likeCount}</strong>
      <hr />
      <button type="submit" disabled={isPending}>
        Like
      </button>
    </form>
  );
}

export default FormWithUseActionState;
