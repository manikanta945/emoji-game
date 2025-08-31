/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmoji: '', isGameEnd: false, topScore: 0}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onclickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmoji} = this.state
    const isPresent = clickedEmoji.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmoji.length)
    } else if (emojisList.length - 1 === clickedEmoji.length) {
      this.finishGameAndSetTopScore(emojisList.length)
    }
    this.setState(prevs => ({
      clickedEmoji: [...prevs.clickedEmoji, id],
    }))
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore => topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmoji: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmoji} = this.state
    const isWon = emojisList.length === clickedEmoji.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmoji.length}
      />
    )
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emoji-list">
        {shuffledEmojisList.map(emojisItem => (
          <EmojiCard
            key={emojisItem.id}
            emoji={emojisItem}
            onclickEmoji={this.onclickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGameEnd, clickedEmoji} = this.state
    const currentScore = clickedEmoji.length

    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          currentScore={currentScore}
          isGameEnd={isGameEnd}
        />
        <div className="body">
          {isGameEnd ? this.renderWinOrLose() : this.renderEmojiList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
