<<<<<<< HEAD
import { Text, Flex, HelpIcon, useTooltip } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Text, Flex, HelpIcon, useTooltip } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const CannotBidMessage: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  const { tooltip, targetRef, tooltipVisible } = useTooltip(
    <>
      <Text mb="16px">{t('Only whitelisted project wallets can bid in the auction to create Community Farms.')}</Text>
      <Text mb="16px">{t('Bidding is only possible while the auction is live.')}</Text>
      <Text>
        {t(
          'If you’re sure your project should be able to bid in this auction, make sure you’re connected with the correct (whitelisted) wallet.',
        )}
      </Text>
    </>,
    { placement: 'bottom' },
  )
  return (
    <Flex justifyContent="center" alignItems="center">
      <Text color="textSubtle" small mr="8px">
        {t('Why cant I bid for a farm?')}
      </Text>
      <span ref={targetRef}>
        <HelpIcon color="textSubtle" height="16px" width="16px" />
      </span>
      {tooltipVisible && tooltip}
    </Flex>
  )
}

export default CannotBidMessage
