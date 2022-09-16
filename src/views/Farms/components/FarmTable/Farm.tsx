import styled from 'styled-components'
import { useFarmUser } from 'state/farms/hooks'
<<<<<<< HEAD
import { useTranslation } from '@pancakeswap/localization'
import { Text, Skeleton } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
=======
import { useTranslation } from 'contexts/Localization'
import { Text } from '@metaswap/uikit'
import { Token } from '@metaswap/sdk'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { getBalanceNumber } from 'utils/formatBalance'
import { TokenPairImage } from 'components/TokenImage'

export interface FarmProps {
  label: string
  pid: number
  token: Token
  quoteToken: Token
  isReady: boolean
}

const Container = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 32px;
  }
`

const TokenWrapper = styled.div`
  padding-right: 8px;
  width: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 40px;
  }
`

const Farm: React.FunctionComponent<React.PropsWithChildren<FarmProps>> = ({
  token,
  quoteToken,
  label,
  pid,
  isReady,
}) => {
  const { stakedBalance } = useFarmUser(pid)
  const { t } = useTranslation()
  const rawStakedBalance = getBalanceNumber(stakedBalance)

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold textTransform="uppercase">
          {t('Farming')}
        </Text>
      )
    }

    return null
  }

  if (!isReady) {
    return (
      <Container>
        <Skeleton mr="8px" width={32} height={32} variant="circle" />
        <div>
          <Skeleton width={40} height={10} mb="4px" />
          <Skeleton width={60} height={24} />
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <TokenWrapper>
        <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={40} height={40} />
      </TokenWrapper>
      <div>
        {handleRenderFarming()}
        <Text bold>{label}</Text>
      </div>
    </Container>
  )
}

export default Farm
