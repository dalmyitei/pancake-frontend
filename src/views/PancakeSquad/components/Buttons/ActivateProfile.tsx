import { NextLinkFromReactRouter } from 'components/NextLink'
<<<<<<< HEAD
import { Button } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
=======
import { Button } from '@metaswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { UserStatusEnum } from 'views/PancakeSquad/types'

type ActivateProfileButtonProps = {
  t: ContextApi['t']
  userStatus: UserStatusEnum
}

const ActivateProfileButton: React.FC<React.PropsWithChildren<ActivateProfileButtonProps>> = ({ t, userStatus }) => (
  <>
    {(userStatus === UserStatusEnum.NO_PROFILE || userStatus === UserStatusEnum.UNCONNECTED) && (
      <Button as={NextLinkFromReactRouter} to="/create-profile" mr="4px">
        {t('Activate Profile')}
      </Button>
    )}
  </>
)

export default ActivateProfileButton
