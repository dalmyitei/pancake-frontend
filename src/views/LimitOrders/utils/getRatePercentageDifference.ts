<<<<<<< HEAD
import { Percent, Price, Currency } from '@pancakeswap/sdk'
=======
import { Percent, Price } from '@metaswap/sdk'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const getRatePercentageDifference = (
  currentMarketRate: Price<Currency, Currency>,
  price: Price<Currency, Currency>,
) => {
  if (currentMarketRate && price) {
    const percentageAsFraction = price.subtract(currentMarketRate).divide(currentMarketRate)
    return new Percent(percentageAsFraction.numerator, percentageAsFraction.denominator)
  }
  return undefined
}

export default getRatePercentageDifference
