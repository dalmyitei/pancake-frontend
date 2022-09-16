<<<<<<< HEAD
import { Button, Card, CardBody, Flex, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
=======
import { Button, Card, CardBody, Flex, Heading, Text } from '@metaswap/uikit'
import { useTranslation } from 'contexts/Localization'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
import Link from 'next/link'

const NoProfileCard = () => {
  const { t } = useTranslation()

  return (
    <Card mb="32px" isActive>
      <CardBody>
        <Flex
          alignItems={['start', null, 'center']}
          justifyContent={['start', null, 'space-between']}
          flexDirection={['column', null, 'row']}
        >
          <div>
            <Heading scale="lg" mb="8px">
              {t('You haven’t set up your profile yet!')}
            </Heading>
            <Text>{t('You can do this at any time by clicking on your profile picture in the menu')}</Text>
          </div>
          <Link href="/create-profile" passHref>
            <Button as="a" id="teamsPageSetUpProfile" mt={['16px', null, 0]}>
              {t('Set up now')}
            </Button>
          </Link>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default NoProfileCard
