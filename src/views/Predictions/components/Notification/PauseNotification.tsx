<<<<<<< HEAD
import { Box, Button, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
=======
import { Box, Button, Text } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useAppDispatch } from 'state'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { setHistoryPaneState } from 'state/predictions'
import Notification from './Notification'

const PauseNotification = () => {
  const { t } = useTranslation()
  const dispatch = useLocalDispatch()

  const handleOpenHistory = () => {
    dispatch(setHistoryPaneState(true))
  }

  return (
    <Notification title={t('Markets Paused')}>
      <Box mb="24px">
        <Text as="p">{t('Prediction markets have been paused due to an error.')}</Text>
        <Text as="p">{t('All open positions have been cancelled.')}</Text>
        <Text as="p">
          {t('You can reclaim any funds entered into existing positions via the History tab on this page.')}
        </Text>
      </Box>
      <Button variant="primary" width="100%" onClick={handleOpenHistory}>
        {t('Show History')}
      </Button>
    </Notification>
  )
}

export default PauseNotification
