import Image from 'next/image'
import styled from 'styled-components'

export const BannerSC = styled.section`
  width: 80%;
  margin: 2rem auto;
  cursor: pointer;
  transition: transform 1s;
  :hover {
    transform: scale(1.04);
  }
`
export const ImageBannerSC = styled(Image)`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgb(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  object-fit: cover;
`
