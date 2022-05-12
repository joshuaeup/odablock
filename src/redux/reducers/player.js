/**
 * Used to determine which action to take for a Player
 */

const player = (state, action) => {
    switch (action.type) {
        case "SET_PLAYER_SETTINGS":
            return {
                id: action.id,
                code: action.code,
                playerId: action.playerId,
                settings: action.settings,
                round: action.round,
                players: state.players,
                completed: state.completed,
            };
        case "ADD_PLAYER":
            return {
                round: state.round++,
            };
        default:
            return state;
    }
};

export default player;
