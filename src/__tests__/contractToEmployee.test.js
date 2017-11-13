import contractToEmployee from '../contractToEmployee'

describe('contractToEmployee', () => {
  describe('netToGross', () => {
    it('returns the correct value', () => {
      expect(contractToEmployee.netToGross(0)).toBe(0)
      expect(contractToEmployee.netToGross(12000)).toBeCloseTo(980.71)
      expect(contractToEmployee.netToGross(24000)).toBeCloseTo(1982.97, 1)
      expect(contractToEmployee.netToGross(36000)).toBeCloseTo(3114.44, 1)
      expect(contractToEmployee.netToGross(60000)).toBeCloseTo(5631.77, 1)
      expect(contractToEmployee.netToGross(100000)).toBeCloseTo(9780.08)
      expect(contractToEmployee.netToGross(200000)).toBeCloseTo(20150.83, 1)
    })
  })

  describe('revertIrrf', () => {
    it('returns the correct values for each range', () => {
      expect(contractToEmployee.revertIrrf(0)).toBe(0)
      expect(contractToEmployee.revertIrrf(1903.98)).toBe(1903.98)
      expect(contractToEmployee.revertIrrf(1905)).toBeCloseTo(1905.08)
      expect(contractToEmployee.revertIrrf(2757.45)).toBeCloseTo(2826.64, 1)
      expect(contractToEmployee.revertIrrf(2759)).toBeCloseTo(2828.47, 1)
      expect(contractToEmployee.revertIrrf(3543.19)).toBeCloseTo(3751.05, 1)
      expect(contractToEmployee.revertIrrf(3545)).toBeCloseTo(3753.38, 1)
      expect(contractToEmployee.revertIrrf(4251.25)).toBeCloseTo(4664.68, 1)
      expect(contractToEmployee.revertIrrf(5000)).toBeCloseTo(5697.43, 1)
    })
  })

  describe('revertInss', () => {
    it('returns the correct values for each range', () => {
      expect(contractToEmployee.revertInss(0)).toBe(0)
      expect(contractToEmployee.revertInss(1526.6296)).toBeCloseTo(1659.38)
      expect(contractToEmployee.revertInss(1527)).toBeCloseTo(1678.02)
      expect(contractToEmployee.revertInss(2516.7506)).toBeCloseTo(2765.66)
      expect(contractToEmployee.revertInss(2517)).toBeCloseTo(2828.089)
      expect(contractToEmployee.revertInss(4922.8659)).toBeCloseTo(5531.31)
      expect(contractToEmployee.revertInss(5000)).toBeCloseTo(5000+5531.31*0.11)
      expect(contractToEmployee.revertInss(6000)).toBeCloseTo(6000+5531.31*0.11)
    })
  })
})
