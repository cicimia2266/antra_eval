import React, { useState, useEffect } from "react";
import Card from "./Card";

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const CardDeck = ({ cardNumber }) => {
  const [cardArr, setCardArr] = useState([]);
  const [lastClicked, setLastClicked] = useState([-1, {}]);
  const generateDeck = () => {
    const numArr = [];
    while (numArr.length < cardNumber) {
      let r = Math.floor(Math.random() * 52) + 1;
      if (numArr.indexOf(r) === -1) numArr.push(r);
    }
    const fullArr = numArr.concat(numArr);
    shuffleArray(fullArr);
    const fullCards = [];
    fullArr.forEach((value) => {
      let suitNum = Math.floor(value / 13);
      let suit;
      let rankNum = (value % 13).toString();
      let rank;
      switch (suitNum) {
        case 0:
          suit = "C";
          break;
        case 1:
          suit = "D";
          break;
        case 2:
          suit = "H";
          break;
        case 3:
          suit = "S";
          break;
        default:
          break;
      }
      switch (rankNum) {
        case "1":
          rank = "A";
          break;
        case "11":
          rank = "J";
          break;
        case "12":
          rank = "Q";
          break;
        case "0":
          rank = "K";
          break;
        default:
          rank = rankNum;
          break;
      }
      let name = rank + suit + ".png";
      fullCards.push({
        img: name,
        isMatched: false,
      });
    });
    setCardArr(fullCards);
  };

  const handleClick = (idx, card) => {
    if (card.img === lastClicked[1].img && idx !== lastClicked[0]) {
      const newCardArr = [];
      cardArr.forEach((card, id) => {
        if (id === idx || id === lastClicked[0]) {
          newCardArr.push({ ...card, isMatched: true });
        } else {
          newCardArr.push({ ...card });
        }
      });
      setCardArr(newCardArr);
    }
    setLastClicked([idx, card]);
  };

  useEffect(generateDeck, [cardNumber]);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between mt-3" >
      {cardArr &&
        cardArr.map((card, idx) => {
          return (
            <div key={idx}
              onClick={() => {
                handleClick(idx, card);
              }}
            >
              <Card img={card.img} matched={card.isMatched} idx={idx} />
            </div>
          );
        })}
    </div>
  );
};

export default CardDeck;
