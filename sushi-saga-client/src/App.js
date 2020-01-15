import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiPage: 0,
    currentFourSushis:[],
    remainingCash: 100,
    sushisBought: []
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then((sushiList) => {
      let tempSushiList = sushiList.map((sushi) => {
        sushi= {...sushi, eaten: false}
        //console.log("after spread", sushi)
        return sushi;
      })
      //console.log("maybe",tempSushiList)
      this.setState({
        sushis: tempSushiList
      })
      //console.log("test",tempSushiList)
      //console.log("test2", this.state.sushis)
      this.getNextFourSushis()
    })
  }

  buySushi = (id, price) => {
    // console.log("we buying", this.state.sushis)
    // console.log("Data", id, price)
    let eatenSushi = this.state.sushis.find((sush) => {
      //console.log("finding: ", sush)
      return sush.id === id})
    //console.log("eaten sushi", eatenSushi)
    if (!eatenSushi.eaten && price < this.state.remainingCash) {
      eatenSushi.eaten = true;
      this.setState({
        remainingCash: this.state.remainingCash - price,
        sushisBought: [...this.state.sushisBought, id],
        sushis: [...this.state.sushis, eatenSushi]
      })
    }
  }

  getNextFourSushis = () => {
    let sushiDisplay = this.state.sushis.slice(this.state.sushiPage, this.state.sushiPage+4)
    this.setState({
      sushiPage: this.state.sushiPage + 4,
      currentFourSushis: sushiDisplay
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          buySushi={this.buySushi}
          moreSushi={this.getNextFourSushis}
          fourSushis={this.state.currentFourSushis}

          />
        <Table
          remainingCash={this.state.remainingCash}
          sushisEaten={this.state.sushisBought} />
      </div>
    );
  }
}

export default App;