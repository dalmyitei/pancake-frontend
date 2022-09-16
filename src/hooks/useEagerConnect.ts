import { useClient, useConnect } from 'wagmi'
import { useEffect } from 'react'
<<<<<<< HEAD
=======
import { connectorLocalStorageKey, ConnectorNames } from '@metaswap/uikit'
import useAuth from 'hooks/useAuth'
import { isMobile } from 'react-device-detect'
import { injected } from 'utils/web3React'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973

const SAFE_ID = 'safe'

const useEagerConnect = () => {
  const client = useClient()
  const { connectAsync, connectors } = useConnect()
  useEffect(() => {
    const connectorInstance = connectors.find((c) => c.id === SAFE_ID && c.ready)
    if (
      connectorInstance &&
      // @ts-ignore
      !window.cy
    ) {
      connectAsync({ connector: connectorInstance }).catch(() => {
        client.autoConnect()
      })
    } else {
      client.autoConnect()
    }
  }, [client, connectAsync, connectors])
}

export default useEagerConnect
