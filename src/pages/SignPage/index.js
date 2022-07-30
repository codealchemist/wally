import { ethers } from 'ethers'
import { Row, Col, Tag, Descriptions, notification } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import QrCode from 'components/QrCode'
import useStore from 'hooks/useStore'

const wallet = ethers.Wallet.createRandom()
// console.log("WALLET", wallet.signTransaction)
const { address, mnemonic, privateKey } = wallet

function showMessage (message) {
  notification.success({ message })
}

export default function SignPage () {
  const state = useStore()
  console.log('-- STATE', state)

  return (
    <Row>
      <Col flex={2}></Col>
      <Col flex='auto'>
        <Row justify='center' align='middle'>
          <Col flex='auto'>TODO</Col>
        </Row>

        <Row>
          <Col span={24}>
            <br />
          </Col>
        </Row>

        <Row justify='center' align='middle'>
          <Col flex='auto'>
            <Row>
              <Tag color='#348834'>Details</Tag>
            </Row>

            <Row>
              <CopyToClipboard text={mnemonic.phrase}>
                <code
                  className='clickable'
                  onClick={() => notification.success({ message: 'Copied!' })}
                >
                  TODO
                </code>
              </CopyToClipboard>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col flex={2}></Col>
    </Row>
  )
}
