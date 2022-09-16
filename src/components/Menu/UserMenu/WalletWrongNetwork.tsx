import styled from 'styled-components'
<<<<<<< HEAD
import { useTranslation } from '@pancakeswap/localization'
import { Button, Text, Link, HelpIcon } from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'
=======
import { useTranslation } from 'contexts/Localization'
import { Button, Text, Link, HelpIcon } from '@metaswap/uikit'
import { setupNetwork } from 'utils/wallet'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const StyledLink = styled(Link)`
  width: 100%;
  &:hover {
    text-decoration: initial;
  }
`

interface WalletWrongNetworkProps {
  onDismiss: () => void
}

const WalletWrongNetwork: React.FC<React.PropsWithChildren<WalletWrongNetworkProps>> = ({ onDismiss }) => {
  const { t } = useTranslation()
  const { switchNetworkAsync, canSwitch } = useSwitchNetwork()

  const handleSwitchNetwork = async (): Promise<void> => {
    await switchNetworkAsync(ChainId.BSC)
    onDismiss?.()
  }

  return (
    <>
      <Text mb="24px">{t('You’re connected to the wrong network.')}</Text>
      {canSwitch && (
        <Button onClick={handleSwitchNetwork} mb="24px">
          {t('Switch Network')}
        </Button>
      )}
      <StyledLink href="https://docs.ecidade.org.br/get-started/connection-guide" external>
        <Button width="100%" variant="secondary">
          {t('Learn How')}
          <HelpIcon color="primary" ml="6px" />
        </Button>
      </StyledLink>
    </>
  )
}

export default WalletWrongNetwork
