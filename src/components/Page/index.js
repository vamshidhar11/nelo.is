import styled from 'styled-components'
import globalStyles from '../../styles/global'

const Page = styled.div`
	background: ${props => props.theme.base};
	color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
	min-height: 100vh;
`

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Page
