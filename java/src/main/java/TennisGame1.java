
public class TennisGame1 implements TennisGame {

    public static final int FOURTY = 4;
    private int firstPlayerScore = 0;
    private int secondPlayerScore = 0;
    private String firstPlayerName;
    private String secondPlayerName;

    public TennisGame1(String player1Name, String player2Name) {
        this.firstPlayerName = player1Name;
        this.secondPlayerName = player2Name;
    }

    public void wonPoint(String playerName) {
        if (playerName.equals(this.firstPlayerName))
            firstPlayerScore += 1;
        else
            secondPlayerScore += 1;
    }

    public String getScore() {
        if (isATie()) {
            return calculateScoreWhenTheSetIsTied();
        }

        if (isOverFourty()) {

            return calculateScoreWhenTheMatchIsAboutToEnd();
        }

        return pointsToReadableScore(firstPlayerScore) + "-" + pointsToReadableScore(secondPlayerScore);
    }

    private String pointsToReadableScore(int tempScore) {
        return switch (tempScore) {
            case 0 -> "Love";
            case 1 -> "Fifteen";
            case 2 -> "Thirty";
            default -> "Forty";
        };
    }

    private String calculateScoreWhenTheMatchIsAboutToEnd() {
        int minusResult = this.firstPlayerScore - this.secondPlayerScore;
        if (minusResult ==1) {
            return "Advantage player1";
        }

        if (minusResult ==-1) {
            return "Advantage player2";
        }

        if (minusResult >=2) {
            return "Win for player1";
        }

        return "Win for player2";
    }

    private String calculateScoreWhenTheSetIsTied() {
        return switch (firstPlayerScore) {
            case 0 -> "Love-All";
            case 1 -> "Fifteen-All";
            case 2 -> "Thirty-All";
            default -> "Deuce";
        };
    }

    private boolean isOverFourty() {
        return firstPlayerScore >= FOURTY || secondPlayerScore >= FOURTY;
    }

    private boolean isATie() {
        return firstPlayerScore == secondPlayerScore;
    }
}
