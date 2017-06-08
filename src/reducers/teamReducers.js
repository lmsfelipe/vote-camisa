import * as types from './../types/teamTypes';

const initialState = {
  votes: {},
  sum: 0,
};

export const teams = (state = initialState, action) => {
  switch (action.type) {
    case types.SUM:
      return Object.assign({}, state, {
        sum: action.number,
      });

    case types.REGISTER_VOTE:
      const newState = Object.keys({...state.votes[action.team]}).length !== 0 ? {...state.votes[action.team][action.year]} : {};

      console.log(
        'reducer', Object.keys({...state.votes[action.team]}).length !== 0 ?
          {...state.votes[action.team][action.year]} :
          {},
        {...state.votes[action.team]}
      );

      return Object.assign({}, state, {
        votes: {
          ...state.votes,
          [action.team]: {
            ...state.votes[action.team],
            [action.year]: {
              ...newState,
              [action.shirt]: action.vote += 1,
            },
          },
        },
      });
    default:
      return state;
  }
};
