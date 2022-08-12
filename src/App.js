import { useEffect, useState } from "react";
import MessageList from "./components/MessageList";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState();
  useEffect(() => {
    fetch("https://what-state-rv.uk.r.appspot.com/states")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <MessageList />
    </>
  );
}

export default App;

