import { parseUnits } from '@ethersproject/units'
<<<<<<< HEAD:packages/utils/tryParseAmount.ts
import { Currency, CurrencyAmount, JSBI } from '@pancakeswap/sdk'
=======
import { Currency, CurrencyAmount, JSBI, Token, TokenAmount } from '@metaswap/sdk'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973:src/utils/tryParseAmount.ts

// try to parse a user entered amount for a given token
function tryParseAmount<T extends Currency>(value?: string, currency?: T): CurrencyAmount<T> | undefined {
  if (!value || !currency) {
    return undefined
  }
  try {
    const typedValueParsed = parseUnits(value, currency.decimals).toString()

    if (typedValueParsed !== '0') {
      return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed))
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.debug(`Failed to parse input amount: "${value}"`, error)
  }
  // necessary for all paths to return a value
  return undefined
}

export default tryParseAmount
