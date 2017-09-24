import axios from 'axios'

const teamsURL = 'http://localhost:3003/api/teams'
const shirtYearsURL = 'http://localhost:3003/api/shirtyears'


export const getTeams = () => {
  return (dispatch) => {
    axios.get(teamsURL)
      .then(resp => dispatch({ type: 'GET_TEAMS', payload: resp.data }))
  }
}

export const getShirtYears = (team) => {
  return (dispatch) => {
    axios.get(`${shirtYearsURL}?team__regex=/${team}/`)
      .then(resp => dispatch({ type: 'GET_SHIRT_YEARS', payload: resp.data }))
  }
}

export const registerVote = (team, shirt, year, vote) => ({
  type: 'REGISTER_VOTE',
  team,
  shirt,
  year,
  vote,
});
