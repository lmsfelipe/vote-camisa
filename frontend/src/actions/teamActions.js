import axios from 'axios'

const URL = 'http://localhost:3003/api/teams'

export const getApiData = () => {
  return (dispatch) => {
    axios.get(URL)
      .then(resp => dispatch({ type: 'GET_API_DATA', payload: resp.data }))
  }
}

export const registerVote = (team, shirt, year, vote) => ({
  type: 'REGISTER_VOTE',
  team,
  shirt,
  year,
  vote,
});
