// Write your code here
import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, isActive} = props
  const {value, displayText, directionId} = details

  const clickedDirection = () => {
    changeDirection(value)
  }

  return (
    <li key={directionId}>
      <Button type="button" onClick={clickedDirection} isActive={isActive}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
