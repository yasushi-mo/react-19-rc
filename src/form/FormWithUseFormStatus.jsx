import { useState } from "react";
import { useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();
  console.log("🚀 ~ App ~ pending:", pending);

  return (
    <button type="submit" disabled={pending}>
      Like
    </button>
  );
}

function FormWithUserFormStatus() {
  const [likeCount, setLikeCount] = useState(0);
  console.log("🚀 ~ App ~ likeCount:", likeCount);

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
      style={{ textAlign: "center" }}
    >
      <strong>Like: {likeCount}</strong>
      <hr />
      <FormButton />
    </form>
  );
}

export default FormWithUserFormStatus;
