import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    indices: [0, 4],
    total: 100,
    sushis: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      let newSushis = sushis.map(sushi => { 
       return { ...sushi, eaten: false}
      })
      this.setState({sushis: newSushis})
    })
  }

  handleMore = () => {
    this.setState({
      indices: [this.state.indices[0] + 4, this.state.indices[1] + 4]
    });
  }

  addToTable = (id) => {
    let sushiPrice = this.state.sushis.find(sushi => sushi.id === id).price;
    
    if(this.state.total - sushiPrice > 0) {

      let updateSushi = [...this.state.sushis];
      
      updateSushi.map(sushi => {
        if(sushi.id === id) sushi.eaten = true;
        return sushi;
      });
      
      this.setState({ 
        sushis: updateSushi,
        total: this.state.total - sushiPrice
      });
      
    } else {
      return;
    }
  }

  render() {
    let currSushis = [...this.state.sushis];
    currSushis = currSushis.slice(this.state.indices[0], this.state.indices[1]);

    let filtered = currSushis.filter(sushi => sushi.eaten);
    
    return (
      <div className="app">
        <SushiContainer 
          addToTable={this.addToTable}
          handleMore={this.handleMore}
          sushis={currSushis} />
        <Table 
          plates={filtered} 
          total={this.state.total}
        />
      </div>
    );
  }
}

export default App;