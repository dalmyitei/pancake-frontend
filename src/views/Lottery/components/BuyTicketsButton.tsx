<<<<<<< HEAD
import { Button, useModal, WaitIcon, ButtonProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Button, useModal, WaitIcon, ButtonProps } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { useLottery } from 'state/lottery/hooks'
import { LotteryStatus } from 'config/constants/types'
import BuyTicketsModal from './BuyTicketsModal/BuyTicketsModal'

interface BuyTicketsButtonProps extends ButtonProps {
  disabled?: boolean
}

const BuyTicketsButton: React.FC<React.PropsWithChildren<BuyTicketsButtonProps>> = ({ disabled, ...props }) => {
  const { t } = useTranslation()
  const [onPresentBuyTicketsModal] = useModal(<BuyTicketsModal />)
  const {
    currentRound: { status },
  } = useLottery()

  const getBuyButtonText = () => {
    if (status === LotteryStatus.OPEN) {
      return t('Buy Tickets')
    }
    return (
      <>
        <WaitIcon mr="4px" color="textDisabled" /> {t('On sale soon!')}
      </>
    )
  }

  return (
    <Button {...props} disabled={disabled} onClick={onPresentBuyTicketsModal}>
      {getBuyButtonText()}
    </Button>
  )
}

export default BuyTicketsButton
