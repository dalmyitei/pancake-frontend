<<<<<<< HEAD
import React from 'react'
import SubMenu from './components/SubMenu'
import MoDCompetition from './MoDCompetition'
=======
import { useState, useEffect } from 'react'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import { useProfile } from 'state/profile/hooks'
import { Flex, Box } from '@metaswap/uikit'
import Image from 'next/image'
import styled from 'styled-components'
import { useTradingCompetitionContractV2 } from 'hooks/useContract'
import useTheme from 'hooks/useTheme'
import { PageMeta } from 'components/Layout/Page'
import {
  SmartContractPhases,
  CompetitionPhases,
  LIVE,
  FINISHED,
  CLAIM,
  OVER,
  REGISTRATION,
} from 'config/constants/trading-competition/phases'
import PageSection from 'components/PageSection'
import { DARKBG, MIDBLUEBG, MIDBLUEBG_DARK, LIGHTBLUEBG, LIGHTBLUEBG_DARK } from './pageSectionStyles'
import { PrizesIcon, RanksIcon, RulesIcon } from './svgs'
import Countdown from './components/Countdown'
import YourScore from './components/YourScore'
import StormBunny from './pngs/storm.png'
import RibbonWithImage from './components/RibbonWithImage'
import HowToJoin from './components/HowToJoin'
import BattleBanner from './components/BattleBanner'
import BattleCta from './components/BattleCta'
import PrizesInfo from './components/PrizesInfo'
import Rules from './components/Rules'
import TeamRanks from './components/TeamRanks'
import { UserTradingInformationProps } from './types'

const CompetitionPage = styled.div`
  min-height: calc(100vh - 64px);
`

const BannerFlex = styled(Flex)`
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding-top: 10px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 32px;
  }
`

const BattleBannerSection = styled(PageSection)`
  margin-top: -82px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: -94px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: -114px;
  }

  @media screen and (min-width: 1920px) {
    margin-top: -144px;
  }
`

const BottomBunnyWrapper = styled(Box)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    margin-left: 40px;
    width: 147px;
    height: 200px;
  }
`

const TradingCompetition = () => {
  const profileApiUrl = process.env.NEXT_PUBLIC_API_PROFILE
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { profile, isLoading } = useProfile()
  const { isDark, theme } = useTheme()
  const tradingCompetitionContract = useTradingCompetitionContractV2(false)
  const [currentPhase, setCurrentPhase] = useState(CompetitionPhases.REGISTRATION)
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false)
  const [claimSuccessful, setClaimSuccessful] = useState(false)
  const [userTradingInformation, setUserTradingInformation] = useState<UserTradingInformationProps>({
    hasRegistered: false,
    hasUserClaimed: false,
    userRewardGroup: '0',
    userCakeRewards: '0',
    userLazioRewards: '0',
    userPortoRewards: '0',
    userSantosRewards: '0',
    userPointReward: '0',
    canClaimNFT: false,
  })
  const [globalLeaderboardInformation, setGlobalLeaderboardInformation] = useState(null)
  const [userLeaderboardInformation, setUserLeaderboardInformation] = useState({
    global: 0,
    team: 0,
    volume: 0,
    next_rank: 0,
  })
  // 1. Storm
  const [team1LeaderboardInformation, setTeam1LeaderboardInformation] = useState({ teamId: 1, leaderboardData: null })
  // 2. Flippers
  const [team2LeaderboardInformation, setTeam2LeaderboardInformation] = useState({ teamId: 2, leaderboardData: null })
  // 3. Cakers
  const [team3LeaderboardInformation, setTeam3LeaderboardInformation] = useState({ teamId: 3, leaderboardData: null })

  const isCompetitionLive = currentPhase.state === LIVE
  const hasCompetitionEnded =
    currentPhase.state === FINISHED || currentPhase.state === CLAIM || currentPhase.state === OVER

  const {
    hasUserClaimed,
    userCakeRewards,
    userLazioRewards,
    userPortoRewards,
    userSantosRewards,
    userPointReward,
    canClaimNFT,
  } = userTradingInformation

  const userCanClaimPrizes =
    currentPhase.state === CLAIM &&
    !hasUserClaimed &&
    (userCakeRewards !== '0' ||
      userLazioRewards !== '0' ||
      userPortoRewards !== '0' ||
      userSantosRewards !== '0' ||
      userPointReward !== '0' ||
      canClaimNFT)
  const finishedAndPrizesClaimed = hasCompetitionEnded && account && hasUserClaimed
  const finishedAndNothingToClaim = hasCompetitionEnded && account && !userCanClaimPrizes

  const onRegisterSuccess = () => {
    setRegistrationSuccessful(true)
  }

  const onClaimSuccess = () => {
    setClaimSuccessful(true)
  }

  useEffect(() => {
    const fetchCompetitionInfoContract = async () => {
      const competitionStatus = await tradingCompetitionContract.currentStatus()
      setCurrentPhase(SmartContractPhases[competitionStatus])
    }

    const fetchUserContract = async () => {
      try {
        const user = await tradingCompetitionContract.claimInformation(account)
        const userObject = {
          hasRegistered: user[0],
          hasUserClaimed: user[1],
          userRewardGroup: user[2].toString(),
          userCakeRewards: user[3].toString(),
          userLazioRewards: user[4].toString(),
          userPortoRewards: user[5].toString(),
          userSantosRewards: user[6].toString(),
          userPointReward: user[7].toString(),
          canClaimNFT: user[8],
        }
        setUserTradingInformation(userObject)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCompetitionInfoContract()
    if (account) {
      fetchUserContract()
    } else {
      setUserTradingInformation({
        hasRegistered: false,
        hasUserClaimed: false,
        userRewardGroup: '0',
        userCakeRewards: '0',
        userLazioRewards: '0',
        userPortoRewards: '0',
        userSantosRewards: '0',
        userPointReward: '0',
        canClaimNFT: false,
      })
    }
  }, [account, registrationSuccessful, claimSuccessful, tradingCompetitionContract])

  useEffect(() => {
    const fetchUserTradingStats = async () => {
      const res = await fetch(`${profileApiUrl}/api/users/${account}`)
      const data = await res.json()
      setUserLeaderboardInformation(data.leaderboard_fantoken)
    }
    // If user has not registered, user trading information will not be displayed and should not be fetched
    if (account && userTradingInformation.hasRegistered) {
      fetchUserTradingStats()
    }
  }, [account, userTradingInformation, profileApiUrl])

  useEffect(() => {
    const fetchGlobalLeaderboardStats = async () => {
      const res = await fetch(`${profileApiUrl}/api/leaderboard/global`)
      const data = await res.json()
      setGlobalLeaderboardInformation(data)
    }

    const fetchTeamsLeaderboardStats = async (teamId: number, callBack: (data: any) => void) => {
      try {
        const res = await fetch(`${profileApiUrl}/api/leaderboard/team/${teamId}`)
        const data = await res.json()
        callBack(data)
      } catch (e) {
        console.error(e)
      }
    }

    fetchTeamsLeaderboardStats(1, (data) =>
      setTeam1LeaderboardInformation((prevState) => {
        return { ...prevState, leaderboardData: data }
      }),
    )
    fetchTeamsLeaderboardStats(2, (data) =>
      setTeam2LeaderboardInformation((prevState) => {
        return { ...prevState, leaderboardData: data }
      }),
    )
    fetchTeamsLeaderboardStats(3, (data) =>
      setTeam3LeaderboardInformation((prevState) => {
        return { ...prevState, leaderboardData: data }
      }),
    )
    fetchGlobalLeaderboardStats()
  }, [profileApiUrl])

  // Don't hide when loading. Hide if the account is connected && the user hasn't registered && the competition is live or finished
  const shouldHideCta =
    !isLoading && account && !userTradingInformation.hasRegistered && (isCompetitionLive || hasCompetitionEnded)
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const TradingCompetitionPage: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <SubMenu />
      <MoDCompetition />
    </>
  )
}

export default TradingCompetitionPage
