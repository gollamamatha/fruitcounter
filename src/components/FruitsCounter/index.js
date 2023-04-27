// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg_container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span">{mangoesCount}</span> mangoes
            <span className="span">{bananasCount}</span> bananas
          </h1>
          <div className="image_container">
            <img
              className="imagesize"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="imagesize"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>

          <div className="button_container">
            <button
              type="button"
              className="button"
              onClick={this.onClickEatMango}
            >
              Eat Mango
            </button>
            <button
              type="button"
              className="button"
              onClick={this.onClickEatBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
