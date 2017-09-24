const initialState = {
  votes: {},
  teams: [],
  shirtYears: [],
  shirts: []
}

export const voteCamisa = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_TEAMS':
      return { ...state, teams: action.payload }

    case 'GET_SHIRT_YEARS':
      return { ...state, shirtYears: action.payload }

    case 'GET_SHIRTS':
      return { ...state, shirts: action.payload }

    case 'REGISTER_VOTE':
      const newState = Object.keys({...state.votes[action.team]}).length !== 0 ?
        state.votes[action.team][action.year] : {};

      return Object.assign({}, state, {
        votes: {
          ...state.votes,
          [action.team]: {
            ...state.votes[action.team],
            [action.year]: {
              ...newState,
              [action.shirt]: action.vote,
            },
          },
        },
      });
    default:
      return state;
  }
}
