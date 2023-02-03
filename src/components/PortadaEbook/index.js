import { BannerSC, ImageBannerSC } from '../Banner/styles'
import banner1 from '../../../public/assets/banners/1.png'
import Image from 'next/image'
export const PortadaEbook = () => {
  return (
    <>
      <BannerSC>
        <ImageBannerSC src={banner1} alt='Ebook gratis' priority={''} />
      </BannerSC>
    </>
  )
}
