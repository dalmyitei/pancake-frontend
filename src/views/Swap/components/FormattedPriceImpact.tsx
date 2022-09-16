<<<<<<< HEAD
import { Percent } from '@pancakeswap/sdk'
import { warningSeverity } from 'utils/exchange'
import { ONE_BIPS } from 'config/constants/exchange'
=======
import { Percent } from '@metaswap/sdk'
import { warningSeverity } from 'utils/prices'
import { ONE_BIPS } from '../../../config/constants'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { ErrorText } from './styleds'

/**
 * Formatted version of price impact text with warning colors
 */
export default function FormattedPriceImpact({ priceImpact }: { priceImpact?: Percent }) {
  return (
    <ErrorText fontSize="14px" severity={warningSeverity(priceImpact)}>
      {priceImpact ? (priceImpact.lessThan(ONE_BIPS) ? '<0.01%' : `${priceImpact.toFixed(2)}%`) : '-'}
    </ErrorText>
  )
}
