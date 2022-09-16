<<<<<<< HEAD
import { Token, CurrencyAmount } from '@pancakeswap/sdk'
=======
import { Token, TokenAmount } from '@metaswap/sdk'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { useMemo } from 'react'

import { useTokenContract } from './useContract'
import { useSingleCallResult } from '../state/multicall/hooks'

function useTokenAllowance(token?: Token, owner?: string, spender?: string): CurrencyAmount<Token> | undefined {
  const contract = useTokenContract(token?.address, false)

  const inputs = useMemo(() => [owner, spender], [owner, spender])
  const allowance = useSingleCallResult(contract, 'allowance', inputs).result

  return useMemo(
    () => (token && allowance ? CurrencyAmount.fromRawAmount(token, allowance.toString()) : undefined),
    [token, allowance],
  )
}

export default useTokenAllowance
