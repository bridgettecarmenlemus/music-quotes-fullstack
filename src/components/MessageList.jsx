import { useEffect } from "react";
import MessageCard from "./MessageCard";

function MessageList({quotes}) {
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
        <MessageCard />
      </div>
    </>
  );
}

export default MessageList;
