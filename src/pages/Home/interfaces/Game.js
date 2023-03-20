import { Player } from "./Player";

export class Game {
  constructor(name, gamers) {
    this.name = name;
    if(gamers)
      this.gamers = gamers;
    else
      this.gamers = this.defautGamers()
  }
  addPlayer(gamer) {
    this.gamers.push(gamer);
  }
  defautGamers() {
    return [new Player(this.name+ ' Player 1'), new Player(this.name+ ' Player 2'), new Player(this.name+ ' Player 3'), new Player(this.name+ ' Player 4')];
  }
}
