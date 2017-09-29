const initialState = {
  teams: [],
  shirtYears: [],
  shirts: [],
  ranking: []
}

export const voteCamisa = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_TEAMS':
      return { ...state, teams: action.payload }

    case 'GET_SHIRT_YEARS':
      return { ...state, shirtYears: action.payload }

    case 'GET_SHIRTS':
      return { ...state, shirts: action.payload }

    case 'GET_RANKING':
      return { ...state, ranking: action.payload }

    default:
      return state;
  }
}
