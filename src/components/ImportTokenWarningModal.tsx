<<<<<<< HEAD:src/components/ImportTokenWarningModal.tsx
import { Token } from '@pancakeswap/sdk'
import { Modal, Box, InjectedModalProps } from '@pancakeswap/uikit'
=======
import { Token } from '@metaswap/sdk'
import { Modal, InjectedModalProps } from '@metaswap/uikit'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973:src/views/Swap/components/ImportTokenWarningModal.tsx
import ImportToken from 'components/SearchModal/ImportToken'
import { useTranslation } from '@pancakeswap/localization'

interface Props extends InjectedModalProps {
  tokens: Token[]
  onCancel: () => void
}

const ImportTokenWarningModal: React.FC<React.PropsWithChildren<Props>> = ({ tokens, onDismiss, onCancel }) => {
  const { t } = useTranslation()
  return (
    <Modal
      title={t('Import Token')}
      onDismiss={() => {
        onDismiss?.()
        onCancel()
      }}
    >
      <Box maxWidth="380px">
        <ImportToken tokens={tokens} handleCurrencySelect={onDismiss} />
      </Box>
    </Modal>
  )
}

export default ImportTokenWarningModal
