import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Counter } from "./features/counter/Counter";
import "./App.scss";
import Landing from "./pages/landing/landing";
import JoinGame from "./pages/join-game/join-game";
import NewGame from "./pages/new-game/new-game";
import Game from "./pages/game/game";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/join-game" element={<JoinGame />}></Route>
          <Route exact path="/new-game" element={<NewGame />}></Route>\
          <Route exact path="/game" element={<Game />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
