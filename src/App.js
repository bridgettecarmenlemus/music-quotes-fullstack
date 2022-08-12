import MessageList from './components/MessageList';
import './App.css';

const quoteElement = document.querySelector("#menu")

fetch("https://music-quotes-fullstack-app.web.app/")
    .then((res) => res.json())
    .then((quoteItems) => {
        let element = " "
        quoteItems.forEach(
            (quotes) => {
            let htmlSegment = 
            `<div class="quote-item">
            <h3>${quotes.name}</h3>
            <p> ${quotes.quote}</p>
        </div>`
            element += elementSegment
        })

        quoteElement.innerHTML = html
    })
    .catch(err => console.error(err))

function App() {
  return (
    <>
      <MessageList /> 
    </>
  );
}

export default App;
