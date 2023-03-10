import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {Background} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    bgColor: `to ${gradientDirectionsList[0].value},#8ae323 , #014f7b `,
  }

  changeFirst = event => {
    this.setState({firstColor: event.target.value})
  }

  changeSecond = event => {
    this.setState({secondColor: event.target.value})
  }

  changeDirection = value => {
    this.setState({direction: value})
  }

  onRenderBgColor = () => {
    const {direction, firstColor, secondColor} = this.state
    this.setState({bgColor: `to ${direction}, ${firstColor}, ${secondColor}`})
  }

  render() {
    const {firstColor, secondColor, bgColor, direction} = this.state
    return (
      <Background bgColor={bgColor} data-testid="gradientGenerator">
        <div>
          <h1>Generate a CSS Color Gradient</h1>
          <p>Choose direction</p>
          <ul>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                details={eachItem}
                changeDirection={this.changeDirection}
                isActive={direction === eachItem.value}
              />
            ))}
          </ul>
          <p>Pick the Colors</p>
          <p>{firstColor}</p>
          <p>{secondColor}</p>
          <input type="color" value={firstColor} onChange={this.changeFirst} />
          <input
            type="color"
            value={secondColor}
            onChange={this.changeSecond}
          />
          <button type="button" onClick={this.onRenderBgColor}>
            Generate
          </button>
        </div>
      </Background>
    )
  }
}

export default GradientGenerator
