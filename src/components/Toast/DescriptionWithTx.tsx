<<<<<<< HEAD
import { Link, Text } from '@pancakeswap/uikit'
import { getBlockExploreLink, getBlockExploreName } from 'utils'
=======
import { Link, Text } from '@metaswap/uikit'
import { getBscScanLink } from 'utils'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from '@pancakeswap/localization'
import truncateHash from '@pancakeswap/utils/truncateHash'

interface DescriptionWithTxProps {
  description?: string
  txHash?: string
}

const DescriptionWithTx: React.FC<React.PropsWithChildren<DescriptionWithTxProps>> = ({ txHash, children }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  return (
    <>
      {typeof children === 'string' ? <Text as="p">{children}</Text> : children}
      {txHash && (
        <Link external href={getBlockExploreLink(txHash, 'transaction', chainId)}>
          {t('View on %site%', { site: getBlockExploreName(chainId) })}: {truncateHash(txHash, 8, 0)}
        </Link>
      )}
    </>
  )
}

export default DescriptionWithTx
