import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectWallet } from 'store/slices/walletSlice'
import WithWalletView from './WithWalletView'
import WithoutWalletView from './WithoutWalletView'

function log () {
  console.log(`[ HomePage ]`, ...arguments)
}

export default function HomePage () {
  const wallet = useSelector(selectWallet)

  log({ wallet })

  // No wallet.
  // Give options to create or import.
  if (!wallet.address) {
    return <WithoutWalletView />
  }

  // Existing wallet!
  return <WithWalletView wallet={wallet} />
}
