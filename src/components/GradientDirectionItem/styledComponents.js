// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
