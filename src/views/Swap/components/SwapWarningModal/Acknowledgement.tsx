import { useState } from 'react'
<<<<<<< HEAD
import { useTranslation } from '@pancakeswap/localization'
import { Text, Flex, Checkbox, Button } from '@pancakeswap/uikit'
=======
import { useTranslation } from 'contexts/Localization'
import { Text, Flex, Checkbox, Button } from '@metaswap/uikit'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

interface AcknowledgementProps {
  handleContinueClick: () => void
}

const Acknowledgement: React.FC<React.PropsWithChildren<AcknowledgementProps>> = ({ handleContinueClick }) => {
  const { t } = useTranslation()
  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Checkbox
            name="confirmed"
            type="checkbox"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(!isConfirmed)}
            scale="sm"
          />
          <Text ml="10px" style={{ userSelect: 'none' }}>
            {t('I understand')}
          </Text>
        </Flex>

        <Button disabled={!isConfirmed} onClick={handleContinueClick}>
          {t('Continue')}
        </Button>
      </Flex>
    </>
  )
}

export default Acknowledgement
