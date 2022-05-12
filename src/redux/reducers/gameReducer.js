import { ActionTypes } from "../constants/action-types";

const initialState = {
    id: 11111,
    code: "test",
    playerId: "test",
    settings: "test",
    round: 1,
    players: [
        {
            playerId: 1,
            name: "test",
            cards: [
                {
                    id: 1,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 2,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 3,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 4,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 5,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
            ],
            vote: {
                playerId: "test",
                votedPlayerId: "test",
                decision: "Yes",
            },
            eliminated: false,
        },
        {
            playerId: 2,
            name: "test",
            cards: [
                {
                    id: 1,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 2,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 3,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 4,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 5,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
            ],
            vote: {
                playerId: "test",
                votedPlayerId: "test",
                decision: "Yes",
            },
            eliminated: false,
        },
        {
            playerId: 3,
            name: "test",
            cards: [
                {
                    id: 1,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 2,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 3,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 4,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 5,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
            ],
            vote: {
                playerId: "test",
                votedPlayerId: "test",
                decision: "Yes",
            },
            eliminated: false,
        },
        {
            playerId: 4,
            name: "test",
            cards: [
                {
                    id: 1,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 2,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 3,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 4,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
                {
                    id: 5,
                    value: 1,
                    type: "Killer",
                    flipped: false,
                },
            ],
            vote: {
                playerId: "test",
                votedPlayerId: "test",
                decision: "Yes",
            },
            eliminated: false,
        },
    ],
    instructions: "Select two cards to reveal",
    completed: false,
};
/**
 * Used to determine which action to take for a Game
 */

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_GAME_SETTINGS:
            return {
                id: state.id,
                code: state.code,
                playerId: state.playerId,
                settings: state.settings,
                round: state.round,
                players: state.players,
                completed: state.completed,
            };

        case ActionTypes.INCREMENT_ROUND:
            return {
                ...state,
                round: (state.round += 1),
            };

        case ActionTypes.UPDATE_INSTRUCTIONS:
            return {
                ...state,
                instructions: action.instructions,
            };

        case ActionTypes.FLIP_CARD:
            return {
                ...state,
                flipped: true,
            };

        default:
            return state;
    }
};

export default gameReducer;
