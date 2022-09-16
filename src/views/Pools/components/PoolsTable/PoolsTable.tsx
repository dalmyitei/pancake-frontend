import { useRef } from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
=======
import { Button, ChevronUpIcon } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import { DeserializedPool } from 'state/types'
import PoolRow, { VaultPoolRow } from './PoolRow'

interface PoolsTableProps {
  pools: DeserializedPool[]
  account: string
  urlSearch?: string
}

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  scroll-margin-top: 64px;

  background-color: ${({ theme }) => theme.card.background};
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }
`

const StyledTableBorder = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  background-color: ${({ theme }) => theme.colors.cardBorder};
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
`

const PoolsTable: React.FC<React.PropsWithChildren<PoolsTableProps>> = ({ pools, account, urlSearch }) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)

  return (
    <StyledTableBorder>
      <StyledTable id="pools-table" role="table" ref={tableWrapperEl}>
        {pools.map((pool) =>
          pool.vaultKey ? (
            <VaultPoolRow
              initialActivity={urlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
              key={pool.vaultKey}
              vaultKey={pool.vaultKey}
              account={account}
            />
          ) : (
            <PoolRow
              initialActivity={urlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
              key={pool.sousId}
              sousId={pool.sousId}
              account={account}
            />
          ),
        )}
      </StyledTable>
    </StyledTableBorder>
  )
}

export default PoolsTable
