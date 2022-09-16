<<<<<<< HEAD
import { Flex, FlexProps, Link, Text, LinkProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Flex, FlexProps, Link, Text, LinkProps } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

export const ChartByLabel = ({
  symbol,
  link,
  by,
  linkProps,
  ...props
}: { symbol: string; link: string; by: string; linkProps?: LinkProps } & FlexProps) => {
  const { t } = useTranslation()
  return (
    <Flex alignItems="center" px="24px" {...props}>
      <Text fontSize="14px" mr="4px">
        {symbol} {t('Chart')} {t('by')}
      </Text>
      <Link fontSize="14px" href={link} external {...linkProps}>
        {by}
      </Link>
    </Flex>
  )
}
