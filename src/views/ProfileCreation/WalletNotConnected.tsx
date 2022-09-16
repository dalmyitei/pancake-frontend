<<<<<<< HEAD
import { Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Heading, Text } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import ConnectWalletButton from 'components/ConnectWalletButton'

const WalletNotConnected = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Heading scale="xl" mb="8px">
        {t('Oops!')}
      </Heading>
      <Text as="p" mb="16px">
        {t('Please connect your wallet to continue')}
      </Text>
      <ConnectWalletButton />
    </div>
  )
}

export default WalletNotConnected
