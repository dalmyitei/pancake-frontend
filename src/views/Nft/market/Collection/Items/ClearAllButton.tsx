<<<<<<< HEAD
import { Button, ButtonProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useNftStorage } from 'state/nftMarket/storage'
=======
import { Button, ButtonProps } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useAppDispatch } from 'state'
import { removeAllItemFilters } from 'state/nftMarket/reducer'
import { useGetNftFilterLoadingState } from 'state/nftMarket/hooks'
import { FetchStatus } from 'config/constants/types'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

interface ClearAllButtonProps extends ButtonProps {
  collectionAddress: string
}

const ClearAllButton: React.FC<React.PropsWithChildren<ClearAllButtonProps>> = ({ collectionAddress, ...props }) => {
  const { t } = useTranslation()
  const { removeAllItemFilters } = useNftStorage()

  const clearAll = () => {
    removeAllItemFilters(collectionAddress)
  }

  return (
    <Button key="clear-all" variant="text" scale="sm" onClick={clearAll} {...props}>
      {t('Clear')}
    </Button>
  )
}

export default ClearAllButton
