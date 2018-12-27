import React, { Component } from 'react'

export class Prices extends Component {

state = {
    currency: this.props.currency || 'USD'
}

  render() {
    
    const bpi_data = this.props.bpi[this.state.currency];

    return (
      <div>

        <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
            <option value="USD"> USD </option>
            <option value="GBP"> GBP </option>
            <option value="EUR"> EUR </option>
        </select>

        <ul className="list-group">
            <li className="list-group-item">
                Bitcoin rate for {bpi_data.description} : 
                <span className="badge badge-primary">
                    {bpi_data.code}
                </span>
                <strong>{bpi_data.rate}</strong>
            </li>
        </ul>
        
      </div>
    )
  }
}

export default Prices
