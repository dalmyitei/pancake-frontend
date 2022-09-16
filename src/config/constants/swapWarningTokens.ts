<<<<<<< HEAD
import { Token } from '@pancakeswap/sdk'
import { bscTokens } from '@pancakeswap/tokens'
import { bscWarningTokens } from 'config/constants/warningTokens'
=======
import { Token } from '@metaswap/sdk'
import tokens from 'config/constants/tokens'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const { bondly, itam, ccar, bttold } = bscTokens
const { pokemoney, free, safemoon } = bscWarningTokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
  bondly,
  itam,
  ccar,
  bttold,
  pokemoney,
  free,
}

export default SwapWarningTokens
