import styled from 'styled-components'

const Container = styled.div`
  font-size: 70px;
`

export default function Icon ({ children }) {
  return <Container>{children}</Container>
}
