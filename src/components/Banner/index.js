import Image from 'next/image'
import { CallAction } from '../CallAction'
import banner1 from '../../../public/assets/banners/1.png'
import banner2 from '../../../public/assets/banners/2.png'
import grow from '../../../public/assets/middle/1.png'
import engrane from '../../../public/assets/middle/2.png'
import money from '../../../public/assets/middle/3.png'
import { BannerSC, ImageBannerSC, MiddleSC } from './styles'
import Link from 'next/link'

export const Banner = () => {
  return (
    <>
      <p style={{ color: 'white', width: '90%', textAlign: 'start' }}>
        <span className={'title'}>Lo Deberías Saber</span> Aquí encontrarás
        información valiosa y <span className={'title'}>estrategias</span> para
        mejorar tus finanzas. Comencemos juntos el camino hacia un{' '}
        <span className={'title'}>futuro financiero más brillante</span>
      </p>
      <p style={{ color: 'white', width: '80%' }}>
        ¡Explora nuestro contenido para
        <span className={'title'}>descubrir más!</span>
      </p>
      <CallAction time={100000} />

      <BannerSC>
        <Link href={'https://hotm.art/uS5aS4N'}>
          <ImageBannerSC
            src={banner2}
            alt='Descarga E-book gratis'
            priority={''}
          />
        </Link>
        <Link href={'/ebook'}>
          <ImageBannerSC src={banner1} alt='Curso apuestas' priority={''} />
        </Link>
      </BannerSC>

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
