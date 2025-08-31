// Write your code here.
import './index.css'

const NavBar = props => {
  const renderScore = () => {
    const {currentScore, topScore, isGameEnd} = props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="Score-container">
        <p className="score-label">Score: {currentScore}</p>
        <p className="score-label">Top Score: {topScore} </p>
      </div>
    )
  }

  return (
    <div className="head">
      <div className="logo-name">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {renderScore()}
    </div>
  )
}

export default NavBar
