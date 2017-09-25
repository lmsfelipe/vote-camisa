import axios from 'axios'

const teamsURL      = 'http://localhost:3003/api/teams'
const shirtYearsURL = 'http://localhost:3003/api/shirtyears'
const shirtsURL     = 'http://localhost:3003/api/shirts'


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

export const getShirts = (team, year) => {
  return (dispatch) => {
    axios.get(`${shirtsURL}?team__regex=/${team}/&year__regex=/${year}/`)
      .then(resp => dispatch({ type: 'GET_SHIRTS', payload: resp.data }))
  }
}

export const registerVote = (shirt, team, year) => {
  shirt.votes ++
  return dispatch => {
    axios.put(`${shirtsURL}/${shirt._id}`, { ...shirt, votes: shirt.votes })
      .then(resp => dispatch(getShirts(team, year)) )
  }
}

