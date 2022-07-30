import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  Row,
  Col,
  Tag,
  Descriptions,
  Typography,
  Button,
  notification
} from 'antd'
import { RiQrCodeLine, RiWallet2Line } from 'react-icons/ri'
import Icon from 'components/Icon'
import { saveWallet } from 'store/slices/walletSlice'

const { Text } = Typography

const StyledText = styled(Text)`
  width: 250px;
  cursor: pointer;
`

function showMessage (message) {
  notification.success({ message })
}

function log () {
  console.log(`[ WithoutWalletView ]`, ...arguments)
}

export default function WithoutWalletView () {
  const dispatch = useDispatch()

  function createWallet () {
    const wallet = ethers.Wallet.createRandom()
    // console.log("WALLET", wallet.signTransaction)
    const { address, mnemonic, privateKey } = wallet

    log('New wallet created, save in store', { wallet })
    const payload = { address, mnemonic, privateKey }
    dispatch(saveWallet(payload))
  }

  return (
    <Row>
      <Col flex={2}></Col>
      <Col flex='auto'>
        <Row justify='center' align='middle'>
          <Col flex='auto' align='center'>
            <Icon>
              <RiWallet2Line />
            </Icon>
            <Button onClick={createWallet}>Create Wallet</Button>
          </Col>

          <Col flex='auto' align='center'>
            <Icon>
              <RiQrCodeLine />
            </Icon>
            <Button>Import Wallet</Button>
          </Col>
        </Row>
      </Col>
      <Col flex={2}></Col>
    </Row>
  )
}
