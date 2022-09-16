<<<<<<< HEAD
import { Box, CardBody, CardProps, Flex, Text, TokenPairImage } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
=======
import styled from 'styled-components'
import {
  Box,
  CardBody,
  Flex,
  Text,
  CardProps,
  HelpIcon,
  useTooltip,
  LinkExternal,
  Link,
  TokenPairImage,
} from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import ConnectWalletButton from 'components/ConnectWalletButton'
import { FlexGap } from 'components/Layout/Flex'
import { vaultPoolConfig } from 'config/constants/pools'
import { useTranslation } from '@pancakeswap/localization'
import { useVaultPoolByKey } from 'state/pools/hooks'
import { DeserializedPool, VaultKey, DeserializedLockedCakeVault, DeserializedCakeVault } from 'state/types'
import styled from 'styled-components'

import CardFooter from '../PoolCard/CardFooter'
import PoolCardHeader, { PoolCardHeaderTitle } from '../PoolCard/PoolCardHeader'
import { StyledCard } from '../PoolCard/StyledCard'
import { VaultPositionTagWithLabel } from '../Vault/VaultPositionTag'
import UnstakingFeeCountdownRow from './UnstakingFeeCountdownRow'
import RecentCakeProfitRow from './RecentCakeProfitRow'
import { StakingApy } from './StakingApy'
import VaultCardActions from './VaultCardActions'
import LockedStakingApy from '../LockedPool/LockedStakingApy'

const StyledCardBody = styled(CardBody)<{ isLoading: boolean }>`
  min-height: ${({ isLoading }) => (isLoading ? '0' : '254px')};
`

interface CakeVaultProps extends CardProps {
  pool: DeserializedPool
  showStakedOnly: boolean
  defaultFooterExpanded?: boolean
  showICake?: boolean
}

interface CakeVaultDetailProps {
  isLoading?: boolean
  account: string
  pool: DeserializedPool
  vaultPool: DeserializedCakeVault
  accountHasSharesStaked: boolean
  defaultFooterExpanded?: boolean
  showICake?: boolean
  performanceFeeAsDecimal: number
}

<<<<<<< HEAD
export const CakeVaultDetail: React.FC<React.PropsWithChildren<CakeVaultDetailProps>> = ({
  isLoading = false,
  account,
  pool,
  vaultPool,
  accountHasSharesStaked,
  showICake,
  performanceFeeAsDecimal,
  defaultFooterExpanded,
}) => {
  const { t } = useTranslation()
=======
  const { tooltip, tooltipVisible, targetRef } = useTooltip(
    hasEndBlockOver ? (
      <>
        <Text>
          {t(
            'The latest credit calculation period has ended. After the coming IFO, credits will be reset and the calculation will resume.',
          )}
        </Text>
        <LinkExternal href="https://twitter.com/metaswap">
          {t('Follow us on Twitter to catch the latest news about the coming IFO.')}
        </LinkExternal>
      </>
    ) : (
      <>
        <Text>
          {t(
            'The start block of the current calculation period. Your average IFO CAKE Pool staking balance is calculated throughout this period.',
          )}
        </Text>
        <LinkExternal href="https://medium.com/metaswap/initial-farm-offering-ifo-3-0-ifo-staking-pool-622d8bd356f1">
          {t('Check out our Medium article for more details.')}
        </LinkExternal>
      </>
    ),
    { placement: 'auto' },
  )
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

  return (
    <>
      <StyledCardBody isLoading={isLoading}>
        {account && pool.vaultKey === VaultKey.CakeVault && (
          <VaultPositionTagWithLabel userData={(vaultPool as DeserializedLockedCakeVault).userData} />
        )}
        {account &&
        pool.vaultKey === VaultKey.CakeVault &&
        (vaultPool as DeserializedLockedCakeVault).userData.locked ? (
          <LockedStakingApy
            userData={(vaultPool as DeserializedLockedCakeVault).userData}
            stakingToken={pool?.stakingToken}
            stakingTokenBalance={pool?.userData?.stakingTokenBalance}
            showICake={showICake}
          />
        ) : (
          <>
            <StakingApy pool={pool} />
            <FlexGap mt="16px" gap="24px" flexDirection={accountHasSharesStaked ? 'column-reverse' : 'column'}>
              <Box>
                {account && (
                  <Box mb="8px">
                    <UnstakingFeeCountdownRow vaultKey={pool.vaultKey} />
                  </Box>
                )}
                <RecentCakeProfitRow pool={pool} />
              </Box>
              <Flex flexDirection="column">
                {account ? (
                  <VaultCardActions
                    pool={pool}
                    accountHasSharesStaked={accountHasSharesStaked}
                    isLoading={isLoading}
                    performanceFee={performanceFeeAsDecimal}
                  />
                ) : (
                  <>
                    <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                      {t('Start earning')}
                    </Text>
                    <ConnectWalletButton />
                  </>
                )}
              </Flex>
            </FlexGap>
          </>
        )}
      </StyledCardBody>
      <CardFooter defaultExpanded={defaultFooterExpanded} pool={pool} account={account} />
    </>
  )
}

const CakeVaultCard: React.FC<React.PropsWithChildren<CakeVaultProps>> = ({
  pool,
  showStakedOnly,
  defaultFooterExpanded,
  showICake = false,
  ...props
}) => {
  const { account } = useWeb3React()

  const vaultPool = useVaultPoolByKey(pool.vaultKey)

  const {
    userData: { userShares, isLoading: isVaultUserDataLoading },
    fees: { performanceFeeAsDecimal },
  } = vaultPool

  const accountHasSharesStaked = userShares && userShares.gt(0)
  const isLoading = !pool.userData || isVaultUserDataLoading

  if (showStakedOnly && !accountHasSharesStaked) {
    return null
  }

  return (
    <StyledCard isActive {...props}>
      <PoolCardHeader isStaking={accountHasSharesStaked}>
        <PoolCardHeaderTitle
          title={vaultPoolConfig[pool.vaultKey].name}
          subTitle={vaultPoolConfig[pool.vaultKey].description}
        />
        <TokenPairImage {...vaultPoolConfig[pool.vaultKey].tokenImage} width={64} height={64} />
      </PoolCardHeader>
      <CakeVaultDetail
        isLoading={isLoading}
        account={account}
        pool={pool}
        vaultPool={vaultPool}
        accountHasSharesStaked={accountHasSharesStaked}
        showICake={showICake}
        performanceFeeAsDecimal={performanceFeeAsDecimal}
        defaultFooterExpanded={defaultFooterExpanded}
      />
    </StyledCard>
  )
}

export default CakeVaultCard
