import { useCallback } from 'react'
<<<<<<< HEAD
import { useModal } from '@pancakeswap/uikit'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
=======
import { useModal } from '@metaswap/uikit'
import { useAppDispatch } from 'state'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { fetchAddressResult, setSelectedAddress } from 'state/predictions'
import AddressInputSelect from 'components/AddressInputSelect'
import { useStatModalProps } from 'state/predictions/hooks'
import { useConfig } from 'views/Predictions/context/ConfigProvider'
import WalletStatsModal from './WalletStatsModal'

const AddressSearch = () => {
  const dispatch = useLocalDispatch()
  const { result, address, leaderboardLoadingState } = useStatModalProps()
  const { token, api } = useConfig()

  const handleBeforeDismiss = () => {
    dispatch(setSelectedAddress(null))
  }

  const [onPresentWalletStatsModal] = useModal(
    <WalletStatsModal
      token={token}
      api={api}
      result={result}
      address={address}
      leaderboardLoadingState={leaderboardLoadingState}
      onBeforeDismiss={handleBeforeDismiss}
    />,
    true,
    true,
    'AddressSearchWalletStatsModal',
  )
  const handleValidAddress = useCallback(
    async (value: string) => {
      const response: any = await dispatch(fetchAddressResult(value))
      return response.payload?.data !== undefined
    },
    [dispatch],
  )

  const handleAddressClick = async (value: string) => {
    await dispatch(setSelectedAddress(value))
    onPresentWalletStatsModal()
  }

  return <AddressInputSelect onAddressClick={handleAddressClick} onValidAddress={handleValidAddress} />
}

export default AddressSearch
