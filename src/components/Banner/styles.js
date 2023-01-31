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
export const MiddleSC = styled.section`
  background: #ffbd2b;
  padding: 0.5rem 0;
  opacity: 1;
  .imgs {
    gap: 0.5rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .others {
    gap: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    span {
      margin-top: 0.2rem;
      width: 120px;
      text-align: center;
      font-size: 1rem;
      font-weight: 600;
    }
  }
  /* 
  justify-content: space-evenly;
  align-items: center; */
`
