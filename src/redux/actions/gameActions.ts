import { ActionTypes } from "../constants/action-types";

let round = 0;

type Card = {
    id: String,
    value: Number,
    type: String,
};

type Vote = {
    playerId: String,
    votedPlayerId?: String,
    decision?: String,
};

type Player = {
    playerId: String,
    name: String,
    cards: Card[],
    vote: Vote,
    eliminated: Boolean,
};

// Game

export const setGameSettings = (
    id,
    code,
    playerId,
    settings,
    players: Player[],
    completed = false
) => {
    return {
        type: ActionTypes.SET_GAME_SETTINGS,
        id,
        code,
        playerId,
        settings,
        round,
        players,
        completed,
    };
};

export const incrementRound = () => {
    return {
        type: ActionTypes.INCREMENT_ROUND,
    };
};

export const updateInstructions = (instructions: String) => {
    return {
        type: ActionTypes.UPDATE_INSTRUCTIONS,
        instructions
    }
}

export const flipCard = () => {
    return {
        type: ActionTypes.FLIP_CARD
    }
}
