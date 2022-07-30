import styled from 'styled-components'
import { Row, Col, Tag, Descriptions, Typography, notification } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import QrCode from 'components/QrCode'

const { Text } = Typography

const StyledText = styled(Text)`
  width: 250px;
  cursor: pointer;
`

function showMessage (message) {
  notification.success({ message })
}

function log () {
  console.log(`[ WithWalletView ]`, ...arguments)
}

export default function WithWalletView ({ wallet }) {
  log({ wallet })

  const { address, privateKey, mnemonic } = wallet

  return (
    <Row>
      <Col flex={2}></Col>
      <Col flex='auto'>
        <Row justify='center' align='middle'>
          <Col flex='auto'>
            <CopyToClipboard text={address}>
              <QrCode
                title='Address'
                value={address}
                onClick={() => notification.success({ message: 'Copied!' })}
              />
            </CopyToClipboard>

            <CopyToClipboard text={address}>
              <StyledText
                type='success'
                onClick={() => notification.success({ message: 'Copied!' })}
                title={address}
                ellipsis
              >
                {address}
              </StyledText>
            </CopyToClipboard>
          </Col>

          <Col flex='auto'>
            <QrCode title='Private Key' value={privateKey} />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <br />
          </Col>
        </Row>

        <Row justify='center' align='middle'>
          <Col flex='auto'>
            <Row>
              <Tag color='#348834'>Mnemonic</Tag>
            </Row>

            <Row>
              <CopyToClipboard text={mnemonic.phrase}>
                <code
                  className='clickable'
                  onClick={() => notification.success({ message: 'Copied!' })}
                >
                  {mnemonic.phrase}
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
