// Write your code here.
import './index.css'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? winImage : loseImage
  const altText = isWon ? 'win or lose' : 'win or lose'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const ScoreLabel = isWon ? 'Best Score' : 'Score'
  return (
    <div className="winOrLose">
      <div className="winOrLose-text-container">
        <h1>{gameStatus}</h1>
        <p>{ScoreLabel}</p>
        <p className="blue">{score}/12</p>
        <button
          className="winOrLose-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="winOrLose-image-container">
        <img
          className="win-or-lose-image"
          value="win or lose"
          src={imageUrl}
          alt={altText}
        />
      </div>
    </div>
  )
}
export default WinOrLoseCard
