import {Game} from './Game'

export class Category {
  constructor(name, games = null) {
    this.name = name;
    if(games)
      this.games = games;
    else
      this.games = this.defautGames()
  }
  addGame(game) {
    this.games.push(game);
  }
  defautGames() {
    return [new Game(this.name+ ' A'), new Game(this.name+ ' B'), new Game(this.name+ ' C'), new Game(this.name+ ' D')];
  }
}
