import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import React, { Component } from 'react';

class SushiContainer extends Component {

  state = {
    page:0
  }

  createSushis = () => {
    return this.props.sushis
      .slice(4*this.state.page,4*(this.state.page+1))
      .map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={this.props.eatSushi}/> )
  }

  nextPage = () => {
    this.setState({
      page: this.state.page+1 >= 25 ? 0 : this.state.page + 1
    }, () => console.log(this.state.page))
  }

  render() {
    return (
        <div className="belt">
          {
            this.createSushis()
          }
          <MoreButton nextPage={this.nextPage}/>
        </div>
    )
  }
}

export default SushiContainer;