import React, { Component } from 'react'
import './App.css'
import contractToEmployee from './contractToEmployee'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contract: {
        grossEarnings: 0,
        taxes: 0,
        deductions: 0
      },
      employee: {
        grossMonthly: 0
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const { name, value } = event.target
    this.setState({
      ...this.state,
      contract: {
        ...this.state.contract,
        [name]: parseFloat(value),
      },
    })
  }

  calculate() {
    const { grossEarnings, taxes, deductions } = this.state.contract
    const netValue = grossEarnings - taxes - deductions
    const anualNetEarnings = netValue * 12
    const salary = contractToEmployee.netToGross(anualNetEarnings)
    this.setState({
      ...this.state,
      employee: {
        grossMonthly: salary
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Pejotinha</h1>
        <input
          type="number"
          name="grossEarnings"
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
        <p>Salário CLT equivalente:</p>
        <p>{this.state.employee.grossMonthly}</p>
      </div>
    );
  }
}

export default App;
