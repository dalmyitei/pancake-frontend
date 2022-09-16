<<<<<<< HEAD
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { ButtonMenu, ButtonMenuItem } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const HistoryTabMenu = ({ setActiveIndex, activeIndex }) => {
  const { t } = useTranslation()

  return (
    <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="subtle">
      <ButtonMenuItem>{t('All History')}</ButtonMenuItem>
      <ButtonMenuItem>{t('Your History')}</ButtonMenuItem>
    </ButtonMenu>
  )
}

export default HistoryTabMenu
