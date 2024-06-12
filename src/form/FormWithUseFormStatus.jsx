import { useState } from "react";
import { useFormStatus } from "react-dom";

function FormWithUserFormStatus() {
  const [likeCount, setLikeCount] = useState(0);
  const { pending } = useFormStatus();
  console.log("🚀 ~ App ~ pending:", pending, "\nlikeCount:", likeCount);

  return (
    <form
      action={async () => {
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
      }}
    >
      <strong>Like: {likeCount}</strong>
      <hr />
      <button type="submit" disabled={pending}>
        Like
      </button>
    </form>
  );
}

export default FormWithUserFormStatus;
