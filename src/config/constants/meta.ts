import memoize from 'lodash/memoize'
import { ContextApi } from '@pancakeswap/localization'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MetaSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MetaSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://ecidade.org.br/images/hero.png',
}

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string } }
  defaultTitleSuffix: string
}

<<<<<<< HEAD
const getPathList = (t: ContextApi['t']): PathList => {
  return {
    paths: {
      '/': { title: t('Home') },
      '/swap': { basePath: true, title: t('Exchange') },
      '/limit-orders': { basePath: true, title: t('Limit Orders') },
      '/add': { basePath: true, title: t('Add Liquidity') },
      '/remove': { basePath: true, title: t('Remove Liquidity') },
      '/liquidity': { title: t('Liquidity') },
      '/find': { title: t('Import Pool') },
      '/competition': { title: t('Trading Battle') },
      '/prediction': { title: t('Prediction') },
      '/prediction/leaderboard': { title: t('Leaderboard') },
      '/farms': { title: t('Farms') },
      '/farms/auction': { title: t('Farm Auctions') },
      '/pools': { title: t('Pools') },
      '/lottery': { title: t('Lottery') },
      '/ifo': { title: t('Initial Farm Offering') },
      '/teams': { basePath: true, title: t('Leaderboard') },
      '/voting': { basePath: true, title: t('Voting') },
      '/voting/proposal': { title: t('Proposals') },
      '/voting/proposal/create': { title: t('Make a Proposal') },
      '/info': { title: t('Overview'), description: 'View statistics for Pancakeswap exchanges.' },
      '/info/pools': { title: t('Pools'), description: 'View statistics for Pancakeswap exchanges.' },
      '/info/tokens': { title: t('Tokens'), description: 'View statistics for Pancakeswap exchanges.' },
      '/nfts/collections': { basePath: true, title: t('Collections') },
      '/nfts/activity': { title: t('Activity') },
      '/profile': { basePath: true, title: t('Profile') },
      '/pancake-squad': { basePath: true, title: t('Pancake Squad') },
      '/pottery': { basePath: true, title: t('Pottery') },
    },
    defaultTitleSuffix: t('PancakeSwap'),
=======
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
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
  }
}

export const getCustomMeta = memoize(
  (path: string, t: ContextApi['t'], _: string): PageMeta => {
    const pathList = getPathList(t)
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]]

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title} | ${t(pathList.defaultTitleSuffix)}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
      }
    }
    return null
  },
  (path, t, locale) => `${path}#${locale}`,
)
