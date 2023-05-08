import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    coinResult: 0,
    heads: 0,
    tails: 0,
  }

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        coinResult: tossResult,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        coinResult: tossResult,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {coinResult, heads, tails} = this.state
    const totalCount = heads + tails
    const imageUrl =
      coinResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="inner-card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>heads (or) tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <button type="button" className="button" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p>Total: {totalCount}</p>
            <p>heads: {heads}</p>
            <p>tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
