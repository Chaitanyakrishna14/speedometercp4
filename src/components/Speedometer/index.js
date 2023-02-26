import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState + 10,
      }))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h1 className="heading2">Speed is {speed}mph</h1>
        <p className="description">Min limit is 0mph, Max limit is 200mph</p>
        <div className="buttons">
          <button
            className="btn acc_btn"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="btn brake_btn"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
