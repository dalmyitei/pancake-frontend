<<<<<<< HEAD
import { useWeb3React } from '@pancakeswap/wagmi'
import { useEffect, useRef } from 'react'
=======
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useModal } from '@metaswap/uikit'
import { useWeb3React } from '@web3-react/core'
import dynamic from 'next/dynamic'
import { getAnniversaryAchievementContract } from 'utils/contractHelpers'

const AnniversaryAchievementModal = dynamic(() => import('./AnniversaryAchievementModal'), { ssr: false })
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

interface GlobalCheckClaimStatusProps {
  excludeLocations: string[]
}

// change it to true if we have events to check claim status
const enable = false

const GlobalCheckClaimStatus: React.FC<React.PropsWithChildren<GlobalCheckClaimStatusProps>> = (props) => {
  const { account } = useWeb3React()
  if (!enable) {
    return null
  }
  return <GlobalCheckClaim key={account} {...props} />
}

/**
 * This is represented as a component rather than a hook because we need to keep it
 * inside the Router.
 *
 * TODO: Put global checks in redux or make a generic area to house global checks
 */
const GlobalCheckClaim: React.FC<React.PropsWithChildren<GlobalCheckClaimStatusProps>> = () => {
  const hasDisplayedModal = useRef(false)

  const { account } = useWeb3React()
  // const { pathname } = useRouter()
  // const [onPresentModal] = useModal(<GalaxyNFTClaimModal cid={cid} />, false, true, 'galaxyNFTClaimModal')

  // // Check if we need to display the modal
  // useEffect(() => {
  //   const matchesSomeLocations = excludeLocations.some((location) => pathname.includes(location))

  //   if (canClaimNFT && !matchesSomeLocations && !hasDisplayedModal.current && nftBalance === 0) {
  //     onPresentModal()
  //     hasDisplayedModal.current = true
  //   }
  // }, [pathname, excludeLocations, hasDisplayedModal, onPresentModal, canClaimNFT, nftBalance])

  // Reset the check flag when account changes
  useEffect(() => {
    hasDisplayedModal.current = false
  }, [account, hasDisplayedModal])

  return null
}

export default GlobalCheckClaimStatus
