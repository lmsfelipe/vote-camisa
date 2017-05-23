import * as types from './../types/teamTypes';

const initialState = {
  listTeams: [],
  votes: [],
};

export const teams = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TEAM:
      return Object.assign({}, state, {
        listTeams: [
          ...state.listTeams,
          {
            team: action.text,
          },
        ],
      });
    case types.REGISTER_VOTE:
      return Object.assign({}, state, {
        votes: [
          ...state.votes,
          {
            team: action.team,
            shirt: action.shirt,
            vote: action.vote,
          },
        ],
      });
    default:
      return state;
  }
};

// {
//   votes: {
//     ...state.votes,
//     vote: action.vote,
//   },
// },
