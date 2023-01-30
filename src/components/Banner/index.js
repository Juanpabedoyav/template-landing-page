import banner1 from '../../../public/assets/banners/1.png'
import banner2 from '../../../public/assets/banners/2.png'
import banner3 from '../../../public/assets/banners/3.png'

import { BannerSC, ImageBannerSC } from './styles'

const banners = [banner1, banner2, banner3]

export const Banner = () => {
  return (
    <>
      <div>
        <p style={{ color: 'white' }}>Lo Deberías Saber</p>

        <p style={{ color: 'white' }}>Exclusivo en: </p>
        {banners.map((banner) => (
          <BannerSC key={banner}>
            <ImageBannerSC
              src={banner}
              alt='Nuevo video todos los viernes'
              priority={''}
            />
          </BannerSC>
        ))}
      </div>
    </>
  )
}
