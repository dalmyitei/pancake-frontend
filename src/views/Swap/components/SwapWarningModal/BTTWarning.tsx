<<<<<<< HEAD
import { useTranslation } from '@pancakeswap/localization'
import { Text, Link, LinkExternal } from '@pancakeswap/uikit'
=======
import { useTranslation } from 'contexts/Localization'
import { Text, Link, LinkExternal } from '@metaswap/uikit'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const BTTWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>
        {t(
          'Please note that this is the old BTT token, which has been swapped to the new BTT tokens in the following ratio:',
        )}
      </Text>
      <Text>1 BTT (OLD) = 1,000 BTT (NEW)</Text>
      <Text mb="8px">
        {t('Trade the new BTT token')}{' '}
        <Link
          style={{ display: 'inline' }}
          href="https://ecidade.org.br/swap?outputCurrency=0x352Cb5E19b12FC216548a2677bD0fce83BaE434B"
        >
          {t('here')}
        </Link>
      </Text>
      <LinkExternal href="https://medium.com/@BitTorrent/tutorial-how-to-swap-bttold-to-btt-453264d7142">
        {t('For more details on the swap, please refer here.')}
      </LinkExternal>
    </>
  )
}

export default BTTWarning
