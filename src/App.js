import { createContext, useState } from "react";
import MessageList from "./components/MessageList";
import FooterAddMessage from "./components/FooterAddMessage";
import "./App.css";

export const OurInfoContext = createContext (null)

function App() {
  const [quotes, setQuotes] = useState('');  

  return (
    <OurInfoContext.Provider value={{quotes,setQuotes}}>
      <MessageList />
      <FooterAddMessage /> 

    </OurInfoContext.Provider>
  );
}

export default App;

