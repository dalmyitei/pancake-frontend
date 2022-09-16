import { NextLinkFromReactRouter } from 'components/NextLink'
<<<<<<< HEAD
import { Button, Flex } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
=======
import { Button, Flex } from '@metaswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { SaleStatusEnum, UserStatusEnum } from '../../types'

type EndEventProps = {
  t: ContextApi['t']
  account: string
  saleStatus: SaleStatusEnum
  userStatus: UserStatusEnum
  maxSupply: number
  totalSupplyMinted: number
  numberTokensOfUser: number
}

const EndEventButtons: React.FC<React.PropsWithChildren<EndEventProps>> = ({
  t,
  account,
  saleStatus,
  numberTokensOfUser,
  maxSupply,
  totalSupplyMinted,
}) => {
  const hasSquad = saleStatus === SaleStatusEnum.Claim && numberTokensOfUser > 0
  const canViewMarket = maxSupply === totalSupplyMinted

  return (
    <Flex flexDirection={['column', null, null, 'row']}>
      {canViewMarket && (
        <Button mb={['4px', null, null, '0']} mr={[0, null, null, '4px']}>
          <NextLinkFromReactRouter to="/nfts">{t('View market')}</NextLinkFromReactRouter>
        </Button>
      )}
      {hasSquad && (
        <Button>
          <NextLinkFromReactRouter to={`/profile/${account}`}>
            {t('Your Squad (%tokens%)', { tokens: numberTokensOfUser })}
          </NextLinkFromReactRouter>
        </Button>
      )}
    </Flex>
  )
}

export default EndEventButtons
