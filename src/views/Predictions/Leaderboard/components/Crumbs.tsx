/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link'
<<<<<<< HEAD
import { Box, Breadcrumbs, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Box, Breadcrumbs, Text, Link } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const Crumbs = () => {
  const { t } = useTranslation()

  return (
    <Box mb="24px">
      <Breadcrumbs>
        <NextLink href="/" passHref>
          <Link>{t('Home')}</Link>
        </NextLink>
        <NextLink href="/prediction" passHref>
          <Link>{t('Prediction')}</Link>
        </NextLink>
        <Text>{t('Leaderboard')}</Text>
      </Breadcrumbs>
    </Box>
  )
}

export default Crumbs
