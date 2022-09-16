import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { useModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
=======
import { useModal } from '@metaswap/uikit'
import { useWeb3React } from '@web3-react/core'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { getBunnySpecialXmasContract } from 'utils/contractHelpers'
import { bscRpcProvider } from 'utils/providers'
import ClaimNftModal from 'components/ClaimNftModal/ClaimNftModal'
import noop from 'lodash/noop'

const useNftClaimStatusCheck = () => {
  const [hasDisplayedModal, setHasDisplayedModal] = useState(false)
  const { account } = useWeb3React()
  const [onPresentNftClaimModal] = useModal(<ClaimNftModal />)

  useEffect(() => {
    const checkClaimStatus = async () => {
      try {
        const canClaim = await getBunnySpecialXmasContract(bscRpcProvider).canClaim(account)
        if (canClaim) {
          onPresentNftClaimModal()
          setHasDisplayedModal(true)
        }
      } catch (error) {
        // User not registered throws here
        noop()
      }
    }
    if (account && !hasDisplayedModal) {
      checkClaimStatus()
    }
  }, [account, hasDisplayedModal, onPresentNftClaimModal])

  // Reset when account changes
  useEffect(() => {
    setHasDisplayedModal(false)
  }, [account])
}

export default useNftClaimStatusCheck
