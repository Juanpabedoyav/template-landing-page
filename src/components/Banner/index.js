import Image from 'next/image'
import banner1 from '../../../public/assets/banners/1.png'
import banner2 from '../../../public/assets/banners/2.png'
import banner3 from '../../../public/assets/banners/3.png'
import grow from '../../../public/assets/middle/1.png'
import engrane from '../../../public/assets/middle/2.png'
import money from '../../../public/assets/middle/3.png'
import { BannerSC, ImageBannerSC, MiddleSC } from './styles'

const banners = [banner1, banner2]

export const Banner = () => {
  return (
    <>
      <p style={{ color: 'white' }}>
        <span className={'title'}>Lo Deberías Saber</span>
      </p>

      <p style={{ color: 'white' }}>Exclusivo en: </p>
      {banners.map((banner, i) => (
        <BannerSC key={i}>
          <ImageBannerSC
            src={banner}
            alt='Nuevo video todos los viernes'
            priority={''}
          />
        </BannerSC>
      ))}
      <p style={{ color: 'white' }}>
        Con la ayuda de <span className={'title'}>Lo Deberías Saber </span>
        aprenderas A:
      </p>
      <MiddleSC>
        <div className={'imgs'}>
          <Image src={grow} priority={''} alt='grow' />
          <Image src={engrane} priority={''} alt='engrane' />
          <Image src={money} priority={''} alt='money' />
        </div>
        <div className={'others'}>
          <span>Crecer</span>
          <span>Conectar</span>
          <span>Volver el dinero en amigo</span>
        </div>
      </MiddleSC>
    </>
  )
}
