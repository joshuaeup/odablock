const JoinGame = () => {
  const joinGame = (e) => {
    e.preventDefault();
    window.location.href = "/game";
  };

  return (
    <div id="joinGame">
      <div id="joinGame-container">
        <form onSubmit={joinGame}>
          <input
            className="joinGame-container-input"
            type="text"
            placeholder="Enter Name"
            required
          />
          <input
            className="joinGame-container-input"
            type="text"
            placeholder="Enter Game Pin"
            required
          />
          <input id="joinGame-container-button" type="submit" value="Join" />
        </form>
      </div>
    </div>
  );
};

export default JoinGame;
