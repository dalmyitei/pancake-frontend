<<<<<<< HEAD
import { Flex, Text, Button, ArrowUpIcon, LinkExternal } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { getBlockExploreLink } from 'utils'
=======
import { Flex, Text, Button, ArrowUpIcon, LinkExternal } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { getBscScanLink } from 'utils'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { Divider } from './styles'

interface TransactionConfirmedProps {
  txHash: string
  onDismiss: () => void
}

const TransactionConfirmed: React.FC<React.PropsWithChildren<TransactionConfirmedProps>> = ({ txHash, onDismiss }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  return (
    <>
      <Flex p="16px" flexDirection="column" alignItems="center" justifyContent="space-between" height="150px">
        <ArrowUpIcon width="64px" height="64px" color="primary" />
        <Text bold>{t('Transaction Confirmed')}</Text>
        <LinkExternal href={getBlockExploreLink(txHash, 'transaction', chainId)}>{t('View on BscScan')}</LinkExternal>
      </Flex>
      <Divider />
      <Flex px="16px" pb="16px" justifyContent="center">
        <Button onClick={onDismiss} variant="secondary" width="100%">
          {t('Close')}
        </Button>
      </Flex>
    </>
  )
}

export default TransactionConfirmed
