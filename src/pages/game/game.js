import Card from "../../components/card/card";

const Game = () => {
  const players = [
    {
      player: "Something",
    },
    {
      player: "Something",
    },
    {
      player: "Something",
    },
    {
      player: "Something",
    },
  ];
  const cards = [
    {
      card: "Something",
    },
    {
      card: "Something",
    },
    {
      card: "Something",
    },
    {
      card: "Something",
    },
    {
      card: "Something",
    },
  ];
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
          <h1>Controls Go Here</h1>
        </div>
        {players.map(() => {
          return (
            <div className="player-cam-container">
              <img
                className="player-cam"
                alt="player cam"
                src="https://media.discordapp.net/attachments/940763097193394177/965721186539565136/unknown.png"
              />
              <section className="player-card-container__minimized">
                {cards.map(() => {
                  return <Card />;
                })}
              </section>
            </div>
          );
        })}
      </div>
      <section id="player-card-container">
        {cards.map(() => {
          return <Card />;
        })}
      </section>
    </div>
  );
};

export default Game;
