import { useState, useCallback, memo } from 'react'
<<<<<<< HEAD
import { FallingBunniesProps, useKonamiCheatCode } from '@pancakeswap/uikit'
import dynamic from 'next/dynamic'
=======
import { FallingBunnies, FallingBunniesProps, useKonamiCheatCode } from '@metaswap/uikit'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const FallingBunnies = dynamic<FallingBunniesProps>(
  () => import('@pancakeswap/uikit').then((mod) => mod.FallingBunnies),
  { ssr: false },
)

const EasterEgg: React.FC<React.PropsWithChildren<FallingBunniesProps>> = (props) => {
  const [show, setShow] = useState(false)
  const startFalling = useCallback(() => setShow(true), [setShow])
  useKonamiCheatCode(startFalling)

  if (show) {
    return (
      <div onAnimationEnd={() => setShow(false)}>
        <FallingBunnies {...props} />
      </div>
    )
  }
  return null
}

export default memo(EasterEgg)
