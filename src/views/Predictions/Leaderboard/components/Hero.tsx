<<<<<<< HEAD
import { Heading } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Heading } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import PageHeader from 'components/PageHeader'
import Crumbs from './Crumbs'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <PageHeader>
      <Crumbs />
      <Heading as="h1" scale="xxl" color="secondary">
        {t('Leaderboard')}
      </Heading>
    </PageHeader>
  )
}

export default Hero
