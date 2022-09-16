import styled from 'styled-components'
<<<<<<< HEAD
import { Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Flex, Heading } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

export interface TimerProps {
  seconds?: number
  minutes?: number
  hours?: number
  days?: number
  wrapperClassName?: string
}

const StyledTimerFlex = styled(Flex)<{ showTooltip?: boolean }>`
  ${({ theme, showTooltip }) => (showTooltip ? ` border-bottom: 1px dashed ${theme.colors.textSubtle};` : ``)}
  div:last-of-type {
    margin-right: 0;
  }
`

const StyledTimerText = styled(Heading)`
  background: ${({ theme }) => theme.colors.gradientGold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Wrapper: React.FC<React.PropsWithChildren<TimerProps>> = ({
  minutes,
  hours,
  days,
  seconds,
  wrapperClassName,
}) => {
  const { t } = useTranslation()

  return (
    <StyledTimerFlex alignItems="flex-end" className={wrapperClassName}>
      {Boolean(days) && (
        <>
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {days}
          </StyledTimerText>
          <StyledTimerText mr="12px">{t('d')}</StyledTimerText>
        </>
      )}
      {Boolean(hours) && (
        <>
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {hours}
          </StyledTimerText>
          <StyledTimerText mr="12px">{t('h')}</StyledTimerText>
        </>
      )}
      {Boolean(minutes) && (
        <>
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {minutes}
          </StyledTimerText>
          <StyledTimerText mr="12px">{t('m')}</StyledTimerText>
        </>
      )}
      {Boolean(seconds) && (
        <>
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {seconds}
          </StyledTimerText>
          <StyledTimerText mr="12px">{t('s')}</StyledTimerText>
        </>
      )}
    </StyledTimerFlex>
  )
}

export default Wrapper
