<<<<<<< HEAD
import { Button, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
=======
import { Button, Text } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useAppDispatch } from 'state'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { setHistoryPaneState } from 'state/predictions'
import Notification from './Notification'

const ErrorNotification = () => {
  const { t } = useTranslation()
  const dispatch = useLocalDispatch()

  const handleOpenHistory = () => {
    dispatch(setHistoryPaneState(true))
  }
  return (
    <Notification title={t('Error')}>
      <Text as="p" mb="24px">
        {t('This page can’t be displayed right now due to an error. Please check back soon.')}
      </Text>
      <Button variant="primary" width="100%" onClick={handleOpenHistory}>
        {t('Show History')}
      </Button>
    </Notification>
  )
}

export default ErrorNotification
