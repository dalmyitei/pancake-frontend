<<<<<<< HEAD:src/views/Profile/components/Achievements/AchievementDescription.tsx
import { Text, TextProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Text, TextProps } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973:src/views/Nft/market/Profile/components/Achievements/AchievementDescription.tsx
import { TranslatableText as AchievementDescriptionType } from 'config/constants/types'
import styled from 'styled-components'

interface AchievementDescriptionProps extends TextProps {
  description?: AchievementDescriptionType
}

const Description = styled(Text).attrs({ as: 'p' })`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const AchievementDescription: React.FC<React.PropsWithChildren<AchievementDescriptionProps>> = ({
  description,
  ...props
}) => {
  const { t } = useTranslation()

  if (!description) {
    return null
  }

  if (typeof description === 'string') {
    return (
      <Text as="p" color="textSubtle" fontSize="14px" {...props}>
        {description}
      </Text>
    )
  }

  const { key, data = {} } = description

  return (
    <Description color="textSubtle" fontSize="14px" {...props}>
      {t(key, data)}
    </Description>
  )
}

export default AchievementDescription
