<<<<<<< HEAD
import { useWeb3React } from '@pancakeswap/wagmi'
import { AutoRenewIcon, HistoryIcon, IconButton } from '@pancakeswap/uikit'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
=======
import { useWeb3React } from '@web3-react/core'
import { AutoRenewIcon, HistoryIcon, IconButton } from '@metaswap/uikit'
import { useAppDispatch } from 'state'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { setHistoryPaneState } from 'state/predictions'
import { useGetIsFetchingHistory } from 'state/predictions/hooks'

const HistoryButton = () => {
  const isFetchingHistory = useGetIsFetchingHistory()
  const dispatch = useLocalDispatch()
  const { account } = useWeb3React()

  const handleClick = () => {
    dispatch(setHistoryPaneState(true))
  }

  return (
    <IconButton
      id="prediction-history-button"
      variant="subtle"
      onClick={handleClick}
      isLoading={isFetchingHistory}
      disabled={!account}
    >
      {isFetchingHistory ? <AutoRenewIcon spin color="white" /> : <HistoryIcon width="24px" color="white" />}
    </IconButton>
  )
}

export default HistoryButton
