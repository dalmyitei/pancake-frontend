import styled from 'styled-components'
<<<<<<< HEAD:src/views/Profile/components/Achievements/AchievementsList.tsx
import { Flex, Heading, Skeleton, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Flex, Heading, Skeleton, useMatchBreakpoints } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973:src/views/Nft/market/Profile/components/Achievements/AchievementsList.tsx
import { Achievement } from 'state/types'
import AchievementCard from './AchievementCard'

const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const AchievementsList: React.FC<React.PropsWithChildren<{ achievements: Achievement[]; isLoading: boolean }>> = ({
  achievements,
  isLoading,
}) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  if (isLoading) {
    if (isMobile) {
      return <Skeleton width="100%" height="64px" />
    }
    return <Skeleton width="540px" height="64px" />
  }

  return (
    <>
      <Grid>
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </Grid>
      {achievements.length === 0 && (
        <Flex alignItems="center" justifyContent="center" style={{ height: '64px' }}>
          <Heading as="h5" scale="md" color="textDisabled">
            {t('No achievements yet!')}
          </Heading>
        </Flex>
      )}
    </>
  )
}

export default AchievementsList
