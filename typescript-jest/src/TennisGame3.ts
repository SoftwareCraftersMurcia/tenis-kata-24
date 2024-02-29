import { TennisGame } from './TennisGame';

export class TennisGame3 implements TennisGame {
  private p2: number = 0;
  private p1: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    let s: string;
    if (this.p1 < 4 && this.p2 < 4 && !(this.p1 + this.p2 === 6)) {
      const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      s = p[this.p1];
      return (this.p1 === this.p2) ? s + '-All' : s + '-' + p[this.p2];
    } else {
      if (this.p1 === this.p2)
        return 'Deuce';
      s = this.p1 > this.p2 ? this.player1Name : this.player2Name;
      return (((this.p1 - this.p2) * (this.p1 - this.p2)) === 1) ? 'Advantage ' + s : 'Win for ' + s;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1 += 1;
    else
      this.p2 += 1;
  }
}
