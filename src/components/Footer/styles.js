import styled from 'styled-components'

export const FooterSC = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
  img {
    width: 50px;
    height: 50px;
    filter: opacity(0.4);
    transition: 0.4s;
    :hover {
      transform: scale(1.2);
    }
  }
`
