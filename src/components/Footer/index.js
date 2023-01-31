import Image from 'next/image'
import { FooterSC } from './styles'
import facebook from '../../../public/assets/logos/3.png'
import instagram from '../../../public/assets/logos/4.png'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
      <p style={{ color: 'white' }}>Siguenos en :</p>
      <FooterSC>
        <Link href={'https://www.facebook.com/lodeberiasaber'}>
          <Image src={facebook} priority={''} alt='Facebook @lodeberiasaber' />
        </Link>
        <Link href={'https://www.instagram.com/lodeberiasaber/'}>
          <Image
            src={instagram}
            priority={''}
            alt='Instagram @lodeberiasaber'
          />
        </Link>
      </FooterSC>
    </>
  )
}
