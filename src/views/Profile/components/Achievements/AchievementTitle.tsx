<<<<<<< HEAD:src/views/Profile/components/Achievements/AchievementTitle.tsx
import { Text, TextProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Text, TextProps } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973:src/views/Nft/market/Profile/components/Achievements/AchievementTitle.tsx
import { TranslatableText as AchievementTitleType } from 'config/constants/types'

interface AchievementTitleProps extends TextProps {
  title: AchievementTitleType
}

const AchievementTitle: React.FC<React.PropsWithChildren<AchievementTitleProps>> = ({ title, ...props }) => {
  const { t } = useTranslation()

  if (typeof title === 'string') {
    return (
      <Text bold {...props}>
        {title}
      </Text>
    )
  }

  const { key, data = {} } = title

  return (
    <Text bold {...props}>
      {t(key, data)}
    </Text>
  )
}

export default AchievementTitle
