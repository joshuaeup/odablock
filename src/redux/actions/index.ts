import { ActionTypes } from "../constants/action-types";

let round = 0;

type Card = {
    id: String, 
    value: Number,
    type: String,
}

type Vote = {
    playerId: String, 
    votedPlayerId?: String,
    decision?: String, 
}

type Player = {
    playerId: String,
    name: String,
    cards: Card[],
    vote: Vote,
    eliminated: Boolean,
}


// Game 

export const setGameSettings = (
    id,
    code,
    playerId,
    settings,
    players:  Player[],
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

export const incrementRound = (round) => {
    return {
        type: ActionTypes.INCREMENT_ROUND,
        round
    }
}

// Player 

export const setPlayerSettings = (
    player: Player,
) => {
    return {
        type: ActionTypes.SET_PLAYER_SETTINGS,
        player
    };
};

export const setPlayerCard = (playerId, card: Card) => {
    return {
        type: ActionTypes.SET_PLAYER_CARD,
        playerId,
        card,
    };
};

export const setPlayerVote = (playerId, card: Card) => {
    return {
        type: ActionTypes.SET_PLAYER_VOTE,
        playerId,
        card,
    };
};

export const addPlayer = (player: Player) => {
    return {
        type: ActionTypes.ADD_PLAYER,
        player
    }
}

// Cards

export const setBinKeepCards = (cards: Card[]) => {
    return {
        type: ActionTypes.SET_BIN_KEEP_CARDS,
        cards
    }
}





// import { ActionTypes } from "../constants/action-types";

// let round = 0;

// type Card = {
//     id: String, 
//     value: Number,
//     type: String,
// }

// type Vote = {
//     playerId: String, 
//     votedPlayerId?: String,
//     decision?: String, 
// }

// type Player = {
//     playerId: String,
//     name: String,
//     cards: Card[],
//     vote: Vote,
//     eliminated: Boolean,
// }


// // Game 

// export const setGameSettings = (
//     id,
//     code,
//     playerId,
//     settings,
//     players:  Player[],
//     completed = false
// ) => {
//     return {
//         type: ActionTypes.SET_GAME_SETTINGS,
//         id,
//         code,
//         playerId,
//         settings,
//         round,
//         players,
//         completed,
//     };
// };

// export const incrementRound = (round) => {
//     return {
//         type: ActionTypes.INCREMENT_ROUND,
//         round
//     }
// }

// // Player 

// export const setPlayerSettings = (
//     player: Player,
// ) => {
//     return {
//         type: ActionTypes.SET_PLAYER_SETTINGS,
//         player
//     };
// };

// export const setPlayerCard = (playerId, card: Card) => {
//     return {
//         type: ActionTypes.SET_PLAYER_CARD,
//         playerId,
//         card,
//     };
// };

// export const setPlayerVote = (playerId, card: Card) => {
//     return {
//         type: ActionTypes.SET_PLAYER_VOTE,
//         playerId,
//         card,
//     };
// };

// export const addPlayer = (player: Player) => {
//     return {
//         type: ActionTypes.ADD_PLAYER,
//         player
//     }
// }

// // Cards

// export const setBinKeepCards = (cards: Card[]) => {
//     return {
//         type: ActionTypes.SET_BIN_KEEP_CARDS,
//         cards
//     }
// }
