import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import backCard from "../../assets/images/back-card.jpeg";
import frontCard from "../../assets/images/front-card.png";
import { flipCard } from "../../redux/actions/gameActions.ts";

const Card = (props) => {
    const [clicked, setClicked] = useState(false);

    const mystyle = {
        transform: clicked ? "rotateY( 180deg )" : "none",
    };

    let game = useSelector((state) => state.gameSettings);

    const { players } = game;

    const dispatch = useDispatch();

    const flipPlayerCard = (playerId, cardId) => {
        if (playerId && cardId) {
            players.map((player) => {
                if (player.playerId === playerId) {
                    player.cards.map((card) => {
                        if (card.id === cardId) {
                            // Figure out a way to update the state of a specific card
                            dispatch(flipCard());
                            setClicked(!clicked);

                            console.log("Player ID :: ", playerId);
                            console.log("Card ID :: ", cardId);
                            return;
                        }
                    });
                }
            });
        }
    };

    return (
        <div
            onClick={() => flipPlayerCard(props.player.playerId, props.card.id)}
            className="card-container"
        >
            <div style={mystyle} className="card">
                <div className="front">
                    <img
                        className="player-card"
                        alt="Back of card"
                        src={backCard}
                    />
                </div>
                <div className="back">
                    <img
                        className="player-card"
                        alt="Front of card"
                        src={frontCard}
                    />{" "}
                </div>
            </div>
        </div>
    );
};

export default Card;
