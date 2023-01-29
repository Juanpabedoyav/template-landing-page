import Image from 'next/image'
import banner from '../../../public/assets/banner.png'
import { BannerSC } from './styles'

export const Banner = () => {
  return (
    <>
      <div>
        <p style={{ color: 'white' }}>Lo Deberías Saber</p>

        <p style={{ color: 'white' }}>Exclusivo en: </p>
      </div>
      <BannerSC>
        <Image
          className={'banner'}
          src={banner}
          alt='Nuevo video todos los viernes'
          priority={''}
        />
      </BannerSC>
    </>
  )
}
