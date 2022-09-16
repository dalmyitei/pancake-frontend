<<<<<<< HEAD
=======
import { ChainId, JSBI, Percent, Token } from '@metaswap/sdk'
import { BigNumber } from '@ethersproject/bignumber'
import { mainnetTokens, testnetTokens } from './tokens'

export const ROUTER_ADDRESS = {
  [ChainId.MAINNET]: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  [ChainId.TESTNET]: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
}

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    mainnetTokens.wbnb,
    mainnetTokens.cake,
    mainnetTokens.busd,
    mainnetTokens.usdt,
    mainnetTokens.btcb,
    mainnetTokens.ust,
    mainnetTokens.eth,
    mainnetTokens.usdc,
  ],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.busd, mainnetTokens.cake, mainnetTokens.btcb],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
// used to construct the list of all pairs we consider by default in the frontend

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
]

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export { default as ifosConfig } from './ifo'
export { default as poolsConfig } from './pools'

export const FAST_INTERVAL = 10000
export const SLOW_INTERVAL = 60000

export const NOT_ON_SALE_SELLER = '0x0000000000000000000000000000000000000000'
export const NO_PROXY_CONTRACT = '0x0000000000000000000000000000000000000000'

export const FARM_AUCTION_HOSTING_IN_SECONDS = 604800

export const PREDICTION_TOOLTIP_DISMISS_KEY = 'prediction-switcher-dismiss-tooltip'

// Gelato uses this address to define a native currency in all chains
export const GELATO_NATIVE = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
<<<<<<< HEAD

export const EXCHANGE_DOCS_URLS = 'https://docs.pancakeswap.finance/products/pancakeswap-exchange'
=======
// Handler string is passed to Gelato to use PCS router
export const GELATO_HANDLER = 'metaswap'
export const GENERIC_GAS_LIMIT_ORDER_EXECUTION = BigNumber.from(500000)

export const EXCHANGE_DOCS_URLS = 'https://docs.ecidade.org.br/products/metaswap-exchange'
export const LIMIT_ORDERS_DOCS_URL = 'https://docs.ecidade.org.br/products/metaswap-exchange/limit-orders'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
