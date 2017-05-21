import * as types from './../types/teamTypes';

const initialState = {
  votes: {},
  listTeams: [],
};

export const teams = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TEAM:
      return Object.assign(
        {},
        state,
        {
          listTeams: [
            ...state.listTeams,
            {
              team: action.text,
            },
          ],
        },
      );
    case types.REGISTER_VOTE:
      return Object.assign(
        {},
        state,
        {
          votes: {
            ...state.votes,
            vote: action.vote,
          },
        },
      );
    default:
      return state;
  }
};
