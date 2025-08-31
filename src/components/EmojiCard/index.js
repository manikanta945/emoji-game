// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onclickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onbuttonClick = () => {
    onclickEmoji(id)
  }
  return (
    <li className="emojiContainer">
      <button className="btn" type="button" onClick={onbuttonClick}>
        <img key={id} src={emojiUrl} className="img" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
