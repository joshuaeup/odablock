import { useState } from "react";
import backCard from "../../assets/images/back-card.jpeg";
import frontCard from "../../assets/images/front-card.png";

const Card = () => {
  const [clicked, setClicked] = useState(false);

  const toggleCard = () => {
    setClicked(!clicked);
  };

  const mystyle = {
    transform: clicked ? "rotateY( 180deg )" : "none",
  };
  return (
    <div className="card-container">
      <div style={mystyle} className="card">
        <div className="front" onClick={toggleCard}>
          <img className="player-card" alt="Back of card" src={backCard} />
        </div>
        <div className="back" onClick={toggleCard}>
          <img className="player-card" alt="Front of card" src={frontCard} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
