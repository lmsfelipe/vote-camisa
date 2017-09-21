const initialState = {
  votes: {},
  team: '',
  year: '',
  data: []
}

export const teams = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_API_DATA':
      return { ...state, data: action.payload }

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
