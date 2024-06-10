import UseActionState from "./UseActionState";

function Form() {
  const [likeCount, onClick, isPending] = UseActionState(async () => {
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
  });
  console.log("🚀 ~ App ~ isPending:", isPending, "\nlikeCount:", likeCount);

  return (
    <form action={onClick}>
      <strong>Like: {likeCount}</strong>
      <hr />
      <button onClick={onClick} disabled={isPending}>
        Like
      </button>
    </form>
  );
}

export default Form;
