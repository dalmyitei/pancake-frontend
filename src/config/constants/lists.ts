<<<<<<< HEAD
const PANCAKE_EXTENDED = 'https://tokens.pancakeswap.finance/pancakeswap-extended.json'
const COINGECKO = 'https://tokens.pancakeswap.finance/coingecko.json'
const CMC = 'https://tokens.pancakeswap.finance/cmc.json'

// List of official tokens list
export const OFFICIAL_LISTS = [PANCAKE_EXTENDED]
=======
const PANCAKE_EXTENDED = 'https://tokens.ecidade.org.br/metaswap-extended.json'
const PANCAKE_TOP100 = 'https://tokens.ecidade.org.br/metaswap-top-100.json'
// const COINGECKO = 'https://tokens.ecidade.org.br/coingecko.json'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANCAKE_EXTENDED,
  CMC,
  COINGECKO,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
