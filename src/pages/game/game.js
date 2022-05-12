// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/card";
import {
    incrementRound,
    updateInstructions,
} from "../../redux/actions/gameActions.ts";

const Game = () => {
    let game = useSelector((state) => state.gameSettings);

    const { round, players, instructions } = game;

    const dispatch = useDispatch();

    const updateRoundListener = () => {
        dispatch(incrementRound());
    };

    const updateInstructionsListener = () => {
        dispatch(updateInstructions("Vote Player Off"));
    };

    return (
        <div id="game">
            <div id="player-cams">
                <div className="host-cam-container">
                    <img
                        className="host-cam"
                        alt="player cam"
                        src="https://www.grunge.com/img/gallery/game-show-hosts-who-are-actually-terrible-people/intro-1582661950.jpg"
                    />
                </div>
                <div className="controls-cam-container">
                    <h1 onClick={updateInstructionsListener}>{instructions}</h1>
                    <h1 onClick={updateRoundListener}>{round}</h1>
                </div>
                {players.map((player, index) => {
                    return (
                        <div className="player-cam-container" key={index}>
                            <img
                                className="player-cam"
                                alt="player cam"
                                src="https://media.discordapp.net/attachments/940763097193394177/965721186539565136/unknown.png"
                            />
                            <section className="player-card-container__minimized">
                                {players[index].cards.map((card, index) => {
                                    return (
                                        <Card
                                            player={player}
                                            card={card}
                                            key={index}
                                        />
                                    );
                                })}
                            </section>
                        </div>
                    );
                })}
            </div>
            <section id="player-card-container">
                {players[0].cards.map((card, index) => {
                    return <Card player={players[0]} card={card} key={index} />;
                })}
            </section>
        </div>
    );
};

export default Game;
