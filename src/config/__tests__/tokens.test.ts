import map from 'lodash/map'
import omitBy from 'lodash/omitBy'
import erc20ABI from 'config/abi/erc20.json'
<<<<<<< HEAD
import { bscTokens } from '@pancakeswap/tokens'
import { Token } from '@pancakeswap/sdk'
=======
import tokens from 'config/constants/tokens'
import { Token } from '@metaswap/sdk'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import multicall from 'utils/multicall'

// remove BNB because it's not a Bep20 token
// remove ONE because there are two tokens with the symbol ONE (Harmony ONE and BigONE)
// remove HERO because there are two tokens with the symbol HERO (StepHero and Hero)
const tokensToTest = omitBy(
  bscTokens,
  (token) =>
    token.symbol.toLowerCase() === 'bnb' ||
    token.symbol.toLowerCase() === 'one' ||
    token.symbol.toLowerCase() === 'bttold' ||
    token.symbol.toLowerCase() === 'hero',
)

describe('Config tokens', () => {
  it.each(map(tokensToTest, (token, key) => [key, token]))(
    'Token %s has the correct key, symbol, and decimal',
    async (key, token: Token) => {
      const [[symbol], [decimals]] = await multicall(erc20ABI, [
        {
          address: token.address,
          name: 'symbol',
        },
        {
          address: token.address,
          name: 'decimals',
        },
      ])

      expect(key.toLowerCase()).toBe(token.symbol.toLowerCase())
      expect(token.symbol.toLowerCase()).toBe(symbol.toLowerCase())
      expect(token.decimals).toBe(parseInt(decimals, 10))
    },
  )
})
