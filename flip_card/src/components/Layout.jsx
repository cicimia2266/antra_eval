import React, { useState } from "react";
import CardDeck from "./CardDeck";

let cardNumber = 0;
const Layout = () => {
  const [inputText, setInputText] = useState("");
  const [deckFlag, setDeckFlag] = useState(false);
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
      <h1 className="mt-3">Card Flip Game</h1>
      <form onSubmit={(e) => {
            e.preventDefault();
            setDeckFlag(true);
            cardNumber = inputText;
            setInputText("");
          }}
          className={`${deckFlag && "hide-submit"}`}>
        <label htmlFor="input">How many cards do you want to play?</label>
        <input
          type="number"
          id="input"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          min="1" 
          max="52"
          className="ml-2"
        ></input>
        <button className="btn btn-primary ml-2">
          Submit
        </button>
      </form>
      <form onSubmit={(e) => {
            e.preventDefault();
            setDeckFlag(false);
            setInputText("");
            cardNumber = 0;
          }}>
      <button className="btn btn-primary">Reset</button>
      </form>
      </div>
      {deckFlag ? <CardDeck cardNumber={cardNumber}/> : null}
              

    </div>
  );
};

export default Layout;
