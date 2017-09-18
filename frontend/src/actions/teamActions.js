import axios from 'axios'
import * as types from './../types/teamTypes';

const URL = 'http://localhost:3003/api/teams'

export const getApiData = () => {
  return (dispatch) => {
    axios.get(URL)
      .then(resp => dispatch({ type: types.GET_API_DATA, payload: resp.data }))
  }
}

export const sum = (number) => ({
  type: types.SUM,
  number,
});

export const registerVote = (team, shirt, year, vote) => ({
  type: types.REGISTER_VOTE,
  team,
  shirt,
  year,
  vote,
});
