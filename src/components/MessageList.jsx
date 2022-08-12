import MessageCard from "./MessageCard";
import { useEffect, useState } from "react";

function MessageList() {
  const [quotes, setQuotes] = useState('');
  useEffect(() => {
    fetch("https://music-quotes-fullstack-app.web.app/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(quotes);

  return (
    <>
      <div class='messagecard'>
        <MessageCard quotes={quotes} />
      </div>
    </>
  );
}

export default MessageList;
