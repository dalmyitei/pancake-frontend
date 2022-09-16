<<<<<<< HEAD:src/views/Profile/components/Achievements/AchievementRow/PointsLabel.tsx
import { Flex, FlexProps, PrizeIcon, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Flex, FlexProps, PrizeIcon, Text } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973:src/views/Nft/market/Profile/components/Achievements/AchievementRow/PointsLabel.tsx

interface PointsLabelProps extends FlexProps {
  points: number
}

const PointsLabel: React.FC<React.PropsWithChildren<PointsLabelProps>> = ({ points, ...props }) => {
  const { t } = useTranslation()
  const localePoints = points.toLocaleString()

  return (
    <Flex alignItems="center" {...props}>
      <PrizeIcon mr="4px" color="textSubtle" />
      <Text color="textSubtle">{t('%num% points', { num: localePoints })}</Text>
    </Flex>
  )
}

export default PointsLabel
