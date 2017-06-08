export const quantVotes = state => {
  let votes;

  votes = state.teams.votes;

  return votes;
};

export const sum = state => state.teams.sum;
