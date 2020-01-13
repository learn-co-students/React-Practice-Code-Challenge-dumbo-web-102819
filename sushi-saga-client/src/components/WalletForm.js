import React, { Component } from 'react';

class WalletForm extends Component {

    state = {
        amount:0
    }
    
    handleChange = (event) => {
        if(event.target.value >= 0) {
            this.setState({
                amount:event.target.value
            })
        } else {
            alert('hell nah')
        }
    }

    render() {
        return (
            <div className='wallet'>
                <form onSubmit={(event) => { event.preventDefault(); this.props.addFunds(this.state.amount)}}>
                <input type='number' value={this.state.amount} onChange={this.handleChange} />
                <br></br>
                <button type='submit' >Add Funds</button>
                </form>
            </div>
        );
    }
}

export default WalletForm;