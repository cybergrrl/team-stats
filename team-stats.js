const team = {
  _players: [ 
    {
    firstName: 'Abbie',
    lastName: 'Brown',
    age: 22
    },
    {
      firstName: 'Megan',
      lastName: 'Jones',
      age: 27
    },
    {
      firstName: 'Celia',
      lastName: 'Quansah',
      age: 23
    }
  ],
  _games: [
    {
      opponent: 'France',
      teamPoints: 17,
      opponentPoints: 22
    },
    {
      opponent: 'Ireland',
      teamPoints: 6,
      opponentPoints: 12
    },
    {
      opponent: 'Italy',
      teamPoints: 25,
      opponentPoints: 8
    }
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player)
  },
    addGame (opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this.games.push(game)
  }
}

//console.log(team._players[0].firstName + " " + team._players[0].lastName)
//console.log(team._games[0].opponent)
team.addPlayer('Emma', 'Uren', 29)
console.log(team.players)

team.addGame('Japan', 7, 27)
team.addGame('New Zealand', 9, 7)
team.addGame('South Africa', 19, 11)
console.log(team.games)
