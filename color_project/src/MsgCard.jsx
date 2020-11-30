import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MsgCard = ({ curColor, object, handleChange }) => {
    const borderStyle = curColor === object.color ? `2px ${object.color} solid` : `1px black solid`
  return (
    <div className="mb-2">
      <Card style={{border: borderStyle}} className="p-2">
        <Card.Title >{object.title}</Card.Title>
        <Card.Text >
          {object.text}
        </Card.Text>
        <Button onClick={()=>handleChange(object.color)} style={{ backgroundColor: object.color, border: "None"}}>Submit</Button>
      </Card>
    </div>
  );
};

export default MsgCard;
