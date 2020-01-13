import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './components/WalletForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis:[],
    sushisEaten:[],
    budget:30
  }
  componentDidMount() {
    this.getSushis()
  }

  getSushis = () => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      
      let newSushis = sushis.map((sushi) => {
        sushi.isEaten = false
        return sushi
      })
      
      this.setState({
      sushis:newSushis
    },() => { console.log(this.state.sushis)})
    })
  }

  eatSushi = (sushi) => {
    if (this.state.budget >= sushi.price) {
      let eatenSushi = {...sushi}
      eatenSushi.isEaten = true
      let newArray = [...this.state.sushis]
      newArray[sushi.id-1] = eatenSushi
      this.setState({
        sushis:newArray,
        sushisEaten:[...this.state.sushisEaten,sushi],
        budget:this.state.budget-sushi.price
      })
    } else {
      alert('You broke')
    }
  }

  addFunds = (funds) => {
    this.setState({
      budget:this.state.budget+Number(funds)
    })
  }

  render() {
    return (
      <div className="app">
        <WalletForm  addFunds={this.addFunds} /> 
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi}/>
        <Table eatenSushis={this.state.sushisEaten} wallet={this.state.budget} />
      </div>
    );
  }
}

export default App;