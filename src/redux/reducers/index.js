import { combineReducers } from "@reduxjs/toolkit";
import gameReducer from "./gameReducer";

const App = combineReducers({
    gameSettings: gameReducer,
});

export default App;
