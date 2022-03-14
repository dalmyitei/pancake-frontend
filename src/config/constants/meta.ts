import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MetaSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MetaSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://ecidade.org.br/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MetaSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MetaSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MetaSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MetaSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MetaSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MetaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MetaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MetaSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MetaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MetaSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MetaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MetaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MetaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MetaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MetaSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MetaSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MetaSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MetaSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MetaSwap Info & Analytics')}`,
        description: 'View statistics for Metaswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MetaSwap Info & Analytics')}`,
        description: 'View statistics for Metaswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MetaSwap Info & Analytics')}`,
        description: 'View statistics for Metaswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MetaSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MetaSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('MetaSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('MetaSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('MetaSwap')}`,
      }
    default:
      return null
  }
}
