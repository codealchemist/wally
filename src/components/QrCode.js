import QrCodeComponent from 'react-qr-code'
import { Row, Col, Tag, Space, Descriptions } from 'antd'
import styled from 'styled-components'

const StyledCol = styled(Col)`
  ${({ onClick }) => {
    let output = ''
    if (onClick) output += 'cursor: pointer;'
    return output
  }}
`

export default function QrCode ({ title, value, onClick }) {
  return (
    <StyledCol flex='auto' onClick={onClick}>
      <Row justify='left'>
        <Tag color='#348834'>{title}</Tag>
      </Row>
      <Row justify='left'>
        <QrCodeComponent value={value} size={256} bgColor='#222' />
      </Row>
    </StyledCol>
  )
}
