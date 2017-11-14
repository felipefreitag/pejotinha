import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Layout from './Layout'
import contractToEmployee from './contractToEmployee'
import './App.css'

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

    // this.handleInputChange = this.handleInputChange.bind(this)
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
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Pejotinha"
            showMenuIconButton={false}
          />
          <Layout
            handleInputChange={this.handleInputChange.bind(this)}
            calculate={this.calculate.bind(this)}
            grossMonthly={this.state.employee.grossMonthly}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
