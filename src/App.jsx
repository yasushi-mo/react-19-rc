import "./App.css";

function App() {
  const onClick = async () => {
    const response = await fetch("https://example.com/user");
    const jsonResponse = await response.json();
    console.log("🚀 ~ onClick ~ jsonResponse:", jsonResponse);
  };

  return (
    <>
      <button onClick={onClick}>User</button>
    </>
  );
}

export default App;
