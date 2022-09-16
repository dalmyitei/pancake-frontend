<<<<<<< HEAD
import { Button, ButtonProps } from '@pancakeswap/uikit'
import { useWallet } from 'hooks/useWallet'
// @ts-ignore
// eslint-disable-next-line import/extensions
import { useActiveHandle } from 'hooks/useEagerConnect.bmp.ts'
=======
import { Button, useWalletModal, ButtonProps } from '@metaswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import Trans from './Trans'

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const handleActive = useActiveHandle()
  const { onPresentConnectModal } = useWallet()

  const handleClick = () => {
    if (typeof __NEZHA_BRIDGE__ !== 'undefined') {
      handleActive()
    } else {
      onPresentConnectModal()
    }
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children || <Trans>Connect Wallet</Trans>}
    </Button>
  )
}

export default ConnectWalletButton
