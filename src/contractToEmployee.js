const contractToEmployee = {
  netToGross: (anualNetValue) => {
    const monthlyNet = anualNetValue / 13.3
    return contractToEmployee.revertInss(contractToEmployee.revertIrrf(monthlyNet))
  },

  revertIrrf: (netValue) => {
    let result = 0;
    if (netValue <= 1903.98) {
      result = netValue
    } else if (netValue <= 2757.45) {
      result = (netValue - 142.80)/(1-0.075)
    } else if (netValue <= 3543.19) {
      result = (netValue - 354.80)/(1-0.15)
    } else if (netValue <= 4251.25) {
      result = (netValue - 636.13)/(1-0.225)
    } else result = (netValue - 869.36)/(1-0.275)
    return result;
  },

  revertInss: (valueWithIrrf) => {
    let result = 0;
    if (valueWithIrrf <= 1526.6296) {
      result = valueWithIrrf / (1 - 0.08)
    } else if (valueWithIrrf <= 2516.7506) {
      result = valueWithIrrf / (1 - 0.09)
    } else if (valueWithIrrf <= 4922.8659) {
      result = valueWithIrrf / (1 - 0.11)
    } else result = valueWithIrrf + 5531.31 * 0.11
    return result;
  },

  inssCalc: (salary) => {
    let result = 0;
    if (salary <= 1659.38 ) {
      result= salary * 0.08
    } else if (salary <= 2765.66) {
      result= salary * 0.09
    } else if (salary <= 5531.31) {
      result= salary * 0.11
    } else result= (5531.31 * 0.11);
    return result;
  },

  irrfCalc: (salary) => {
    let result = 0;
    if (salary <= 1903.98) {
      result = 0
    } else if (salary <= 2826.65) {
      result = (salary * 0.075 - 142.80)
    } else if (salary <= 3751.05) {
      result = (salary * 0.15 - 354.80)
    } else if (salary <= 4664.68) {
      result = (salary * 0.225 - 636.13)
    } else result = (salary * 0.275 - 869.36);
    return result;
  }
}

export default contractToEmployee
