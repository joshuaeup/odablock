const Landing = () => {
  const routeToJoinGamePage = () => {
    window.location.href = "/join-game";
  };
  const routeToNewGamePage = () => {
    window.location.href = "/new-game";
  };
  return (
    <div id="landing">
      <div id="landing-container">
        <button
          className="landing-container-button"
          onClick={routeToNewGamePage}
        >
          New Game
        </button>
        <button
          className="landing-container-button"
          onClick={routeToJoinGamePage}
        >
          Join Game
        </button>
      </div>
    </div>
  );
};

export default Landing;
