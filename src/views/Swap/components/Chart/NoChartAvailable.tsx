<<<<<<< HEAD
import { Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Flex, Text } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

interface NoChartAvailableProps {
  token0Address: string
  token1Address: string
  pairAddress: string
  isMobile: boolean
}

const NoChartAvailable: React.FC<React.PropsWithChildren<NoChartAvailableProps>> = ({
  token0Address,
  token1Address,
  pairAddress,
  isMobile,
}) => {
  const { t } = useTranslation()
  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="100%" flexDirection="column">
        <Text mb={['8px', '8px', '0px']}>{t('Failed to load price chart for this pair')}</Text>
        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Token0: {token0Address ?? 'null'}
        </Text>
        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Token1: {token1Address ?? 'null'}
        </Text>
        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Pair: {pairAddress ?? 'null'}
        </Text>
      </Flex>
    </>
  )
}

export default NoChartAvailable
