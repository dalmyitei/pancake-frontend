<<<<<<< HEAD
import { Token } from '@pancakeswap/sdk'
import { createSelector } from '@reduxjs/toolkit'
=======
import { useMemo } from 'react'
import { ChainId, Token } from '@metaswap/sdk'
import { useSelector } from 'react-redux'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { deserializeToken } from '@pancakeswap/tokens'
import { useSelector } from 'react-redux'
import { AppState } from '../../index'

const selectUserTokens = ({ user: { tokens } }: AppState) => tokens

export const userAddedTokenSelector = (chainId: number) =>
  createSelector(selectUserTokens, (serializedTokensMap) =>
    Object.values(serializedTokensMap?.[chainId] ?? {}).map(deserializeToken),
  )
export default function useUserAddedTokens(): Token[] {
  const { chainId } = useActiveWeb3React()
  return useSelector(userAddedTokenSelector(chainId))
}
