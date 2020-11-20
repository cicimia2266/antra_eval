import React, {useState} from "react";
import blue_back from "../assets/cards/blue_back.png";


const Card = ({img, matched, idx}) => {
    const [flipped, setFlipped] = useState(false)
    const handleClick = ()=>{
        setFlipped(prevState => !prevState);
        setTimeout(()=>setFlipped(prevState => !prevState),1000)
    }
  return (
      matched ? (
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-back">
            <img
              src={require(`../assets/cards/${img}`).default}
              alt="Avatar"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
        </div>
      </div>
      ): (
    <div className="flip-card">
      <div className={`flip-card-inner ${flipped && "is-flipped"}`} onClick={handleClick}>
        <div className="flip-card-front">
          <img
            src={require(`../assets/cards/${img}`).default}
            alt="Avatar"
            style={{ width: "200px", height: "300px" }}
          />
        </div>
        <div className="flip-card-back">
          <img
            src={blue_back}
            alt="Avatar"
            style={{ width: "200px", height: "300px" }}
          />
        </div>
      </div>
    </div>
    )
  );
};

export default Card;
