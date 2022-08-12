import MessageCard from "./MessageCard";
import { useEffect, useState } from "react";

function MessageList() {
  const [quotes, setQuotes] = useState('');
  useEffect(() => {
    fetch("https://what-state-rv.uk.r.appspot.com/states")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(quotes);

  return (
    <>
      <MessageCard quotes={quotes} />
    </>
  );
}

export default MessageList;
