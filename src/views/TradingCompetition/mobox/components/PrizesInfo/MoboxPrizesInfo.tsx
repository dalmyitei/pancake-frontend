import styled from 'styled-components'
<<<<<<< HEAD:src/views/TradingCompetition/mobox/components/PrizesInfo/MoboxPrizesInfo.tsx
import { Flex } from '@pancakeswap/uikit'
import MoboxPrizesCard from './MoboxPrizesCard'
import MoboxPrizesText from './MoboxPrizesText'
=======
import { Flex } from '@metaswap/uikit'
import PrizesText from './PrizesText'
import PrizesCard from './PrizesCard'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973:src/views/TradingCompetition/components/PrizesInfo/index.tsx

const Wrapper = styled(Flex)`
  flex-direction: column-reverse;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const MoboxPrizesInfo = () => {
  return (
    <Wrapper flexDirection="column">
      <MoboxPrizesCard />
      <MoboxPrizesText />
    </Wrapper>
  )
}

export default MoboxPrizesInfo
