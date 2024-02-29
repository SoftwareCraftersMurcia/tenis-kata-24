import { TennisGame } from './TennisGame';
import { Player } from './Player';

export class TennisGame3 implements TennisGame {
  private player2Points: number = 0;
  private player1Points: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }



  getScore(): string {
    
    if (this.player1Points < 4 && this.player2Points < 4 && !(this.player1Points + this.player2Points === 6)) {
      const scores: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      const score = scores[this.player1Points];
      return (this.player1Points === this.player2Points) ? score + '-All' : score + '-' + scores[this.player2Points];
    } else {
      if (this.player1Points === this.player2Points)
        return 'Deuce';
      const winningPlayer = this.player1Points > this.player2Points ? this.player1Name : this.player2Name;
      return (((this.player1Points - this.player2Points) * (this.player1Points - this.player2Points)) === 1) ? 'Advantage ' + winningPlayer : 'Win for ' + winningPlayer;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1Points += 1;
    else
      this.player2Points += 1;
  }
}
