import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MsgCard from "./MsgCard";
import {data} from "./data"

function App() {
  const [curColor, setCurColor] = useState(data[0].color);
  const handleChange = (color)=>{
    setCurColor(color);
  }
  return (
    <div className="container">
      <h1 style={{color: curColor, textAlign: "center"}}>This is the Main Title.</h1>
      <div className="row">
        {data.map((object, index) => {
          return (
            <div key={index} className="col-sm-6">
              <MsgCard curColor={curColor} object={object} handleChange={handleChange}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
