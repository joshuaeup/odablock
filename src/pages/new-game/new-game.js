const NewGame = () => {
  const newGame = (e) => {
    e.preventDefault();
    window.location.href = "/game";
  };

  return (
    <div id="newGame">
      <div id="newGame-container">
        <h1 id="newGame-container-title">Game Settings</h1>
        <form onSubmit={newGame}>
          <input
            className="newGame-container-input"
            type="number"
            placeholder="Starting Card Amount"
            required
          />
          <input
            className="newGame-container-input"
            type="text"
            placeholder="Other Configuration"
            required
          />
          <input
            className="newGame-container-input"
            type="text"
            placeholder="Other Configuration"
            required
          />
          <input type="submit" id="newGame-container-button" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewGame;
