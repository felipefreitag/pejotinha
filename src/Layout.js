import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './Layout.css'

const Layout = ({ calculate, handleInputChange, grossMonthly }) => (
  <div className="Layout">
    <TextField
      hintText="Faturamento PJ"
      fullWidth={true}
      name="grossEarnings"
      type="number"
      onChange={handleInputChange}
    />
    <TextField
      hintText="Impostos"
      fullWidth={true}
      name="taxes"
      type="number"
      onChange={handleInputChange}
    />
    <TextField
      hintText="Outras deduções"
      fullWidth={true}
      name="deductions"
      type="number"
      onChange={handleInputChange}
    />
    <RaisedButton
      label="Calcular"
      primary={true}
      type="submit"
      onClick={calculate}
    />
    <p>Salário CLT equivalente:</p>
    <p>{grossMonthly}</p>
  </div>
)

export default Layout
