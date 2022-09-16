<<<<<<< HEAD
import { Currency } from '@pancakeswap/sdk'
=======
import { Currency, ETHER, Token } from '@metaswap/sdk'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

export function currencyId(currency: Currency): string {
  if (currency?.isNative) return currency.symbol?.toUpperCase()
  if (currency?.isToken) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
