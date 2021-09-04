export const fixture = {
  _id: '5f953df5c08c99b87c557afa',
  isAvailable: true,
  id: 592193,
  referee: 'Jonathan Moss, England',
  timezone: 'UTC',
  date: '2020-10-26T17:30:00+00:00',
  timestamp: '1603733400',
  periods: { first: 1603733400, second: 1603737000 },
  status: 'FT',
  league: 39,
  teams: {
    home: {
      id: 51,
      name: 'Brighton',
      logo: 'https://media.api-sports.io/football/teams/51.png',
      winner: null,
    },
    away: {
      id: 60,
      name: 'West Brom',
      logo: 'https://media.api-sports.io/football/teams/60.png',
      winner: null,
    },
  },
  goals: { home: 1, away: 1 },
  score: {
    halftime: { home: 1, away: 0 },
    fulltime: { home: 1, away: 1 },
    extratime: { home: null, away: null },
    penalty: { home: null, away: null },
  },
  __v: 0,
};

export const bet = {
  _id: '5f96f8eb0bf6c01c9d9385af',
  isPlaced: true,
  status: 'NOT_CHECKED',
  type: 'Match Winner',
  value: 'Draw',
  fixtureName: 'Brighton vs West Brom',
  oddValue: 3.9,
  fixtureId: '5f953df5c08c99b87c557afa',
  ticketID: '5f96f8eb0bf6c01c9d9385ae',
  __v: 0,
  createdAt: '2020-10-26T16:27:23.243Z',
  updatedAt: '2020-10-26T16:27:23.243Z',
};

export const oddExample = {
  id: 11,
  name: 'Highest Scoring Half',
  values: [
    {
      value: 'Draw',
      odd: '3.75',
    },
    {
      value: '1st Half',
      odd: '3.10',
    },
    {
      value: '2nd Half',
      odd: '1.95',
    },
  ],
};
