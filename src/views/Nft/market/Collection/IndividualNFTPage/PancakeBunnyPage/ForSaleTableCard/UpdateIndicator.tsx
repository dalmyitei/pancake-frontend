import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { Flex, useTooltip } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Flex, useTooltip } from '@metaswap/uikit'
import { useLoadingState } from 'state/nftMarket/hooks'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import CountdownCircle from './CountdownCircle'

const UpdateIndicator: React.FC<React.PropsWithChildren<{ isFetchingPancakeBunnies: boolean }>> = ({
  isFetchingPancakeBunnies,
}) => {
  const { t } = useTranslation()
  const [secondsRemaining, setSecondsRemaining] = useState(10)
  const { tooltip, tooltipVisible, targetRef } = useTooltip(t('Items in the table update every 10 seconds'), {
    placement: 'auto',
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (!isFetchingPancakeBunnies) {
      setSecondsRemaining(10)
    }
  }, [isFetchingPancakeBunnies])

  return (
    <Flex justifyContent="center" ref={targetRef}>
      <CountdownCircle secondsRemaining={secondsRemaining} isUpdating={isFetchingPancakeBunnies} />
      {tooltipVisible && tooltip}
    </Flex>
  )
}

export default UpdateIndicator
