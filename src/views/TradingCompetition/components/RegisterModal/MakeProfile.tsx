<<<<<<< HEAD
import { Button, Heading, Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Button, Heading, Text } from '@metaswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { CompetitionProps } from 'views/TradingCompetition/types'
import { useRouter } from 'next/router'

const MakeProfile: React.FC<React.PropsWithChildren<CompetitionProps>> = ({ onDismiss }) => {
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const router = useRouter()

  const handleClick = () => {
    router.push(`/profile/${account.toLowerCase()}`)
    onDismiss()
  }

  return (
    <>
      <Heading scale="md" mb="24px">
        {t('Make a profile!')}
      </Heading>
      <Text color="textSubtle">
        {t('It looks like you’ve disabled your account by removing your Pancake Collectible (NFT) profile picture.')}
      </Text>
      <Button mt="24px" width="100%" onClick={handleClick}>
        {t('Make a profile!')}
      </Button>
    </>
  )
}

export default MakeProfile
