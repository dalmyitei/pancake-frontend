<<<<<<< HEAD
import { useTranslation } from '@pancakeswap/localization'
import { Text, Link } from '@pancakeswap/uikit'
=======
import { useTranslation } from 'contexts/Localization'
import { Text, Link } from '@metaswap/uikit'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const ItamWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>
        {t('ITAM has been rebranded as ITAM CUBE.')}{' '}
        <Link style={{ display: 'inline' }} external href="https://itam.network/swap">
          {t('Please proceed to ITAM bridge to conduct a one-way swap of your ITAM tokens.')}
        </Link>{' '}
        {t('All transfers of the old ITAM token will be disabled after the swap.')}
      </Text>
    </>
  )
}

export default ItamWarning
