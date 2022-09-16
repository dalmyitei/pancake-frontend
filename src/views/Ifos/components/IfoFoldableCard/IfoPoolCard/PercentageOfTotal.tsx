import BigNumber from 'bignumber.js'
<<<<<<< HEAD
import { Text, TextProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Text, TextProps } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

interface PercentageOfTotalProps extends TextProps {
  userAmount: BigNumber
  totalAmount: BigNumber
}

const PercentageOfTotal: React.FC<React.PropsWithChildren<PercentageOfTotalProps>> = ({
  userAmount,
  totalAmount,
  ...props
}) => {
  const { t } = useTranslation()
  const percentOfUserContribution = totalAmount.isGreaterThan(0) ? userAmount.div(totalAmount).times(100).toNumber() : 0
  const percentOfUserDisplay = percentOfUserContribution.toLocaleString(undefined, { maximumFractionDigits: 5 })

  return (
    <Text fontSize="14px" color="textSubtle" {...props}>
      {t('%num% of total', { num: `${percentOfUserDisplay}%` })}
    </Text>
  )
}

export default PercentageOfTotal
