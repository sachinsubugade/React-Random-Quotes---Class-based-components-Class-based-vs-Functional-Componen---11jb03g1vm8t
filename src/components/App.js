import React, { useState } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
let  iQuote = '';
let iAuthor = '';
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((data) => {
    iQuote = data.content;
    iAuthor = data.author;
   });


const App = () => {

  const [quote,setQuote] = useState(iQuote);
const[author,setAuthor] = useState(iAuthor)
    let cnt = 0;
  const handleNext = () =>{
    let index = cnt%colors.length;
    fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((data) => {
    setQuote(data.content);
    setAuthor(data.author);

  });
  }
    return (
      <div id="main">
        <div id="wrapper">
        <div className="quote-text">{quote}</div>
        <div className="quote-author">{author}</div>
          <button id="new-quote" onClick={handleNext}>Next Quote</button>
        </div>
      </div>
    );
};

export default App;
