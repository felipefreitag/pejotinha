import React, { Component } from 'react'
import './App.css'
import contractToEmployee from './contractToEmployee'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contract: {
        earnings: 0,
        taxes: 0,
        deductions: 0
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const { name, value } = event.target
    this.setState({
      contract: {
        ...this.state.contract,
        [name]: parseInt(value, 10),
      }
    })
  }

  calculate() {
    const { earnings, taxes, deductions } = this.state.contract
    const netValue = earnings - taxes - deductions
    contractToEmployee(netValue)
  }

  render() {
    return (
      <div className="App">
        <h1>Pejotinha</h1>
        <input
          type="number"
          name="earnings"
          placeholder="Salário PJ"
          onChange={this.handleInputChange}
        >
        </input>
        <input
          type="number"
          name="taxes"
          placeholder="Impostos"
          onChange={this.handleInputChange}
        >
        </input>
        <input
          type="number"
          name="deductions"
          placeholder="Outras deduções"
          onChange={this.handleInputChange}
        >
        </input>
        <button type="submit" onClick={this.calculate.bind(this)}>Calcular</button>
        <p>{this.state.monthly}</p>
      </div>
    );
  }
}

export default App;
