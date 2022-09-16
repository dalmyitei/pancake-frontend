<<<<<<< HEAD
import { HistoryIcon, useModal, IconButton } from '@pancakeswap/uikit'
=======
import { HistoryIcon, Button, useModal } from '@metaswap/uikit'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import TransactionsModal from './TransactionsModal'

const Transactions = () => {
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)
  return (
    <>
      <IconButton scale="sm" variant="text" onClick={onPresentTransactionsModal}>
        <HistoryIcon color="textSubtle" width="24px" />
      </IconButton>
    </>
  )
}

export default Transactions
