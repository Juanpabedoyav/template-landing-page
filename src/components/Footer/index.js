import Image from 'next/image'
import { FooterSC } from './styles'
import facebook from '../../../public/assets/logos/3.png'
import instagram from '../../../public/assets/logos/4.png'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
      <p style={{ color: 'white' }}>
        Siguenos en :
        <span className={'title title-footer'}>@lodeberiasaber</span>
      </p>

      <FooterSC>
        <Link
          href={'https://www.facebook.com/lodeberiasaber'}
          target={'_blank'}
        >
          <Image src={facebook} priority={''} alt='Facebook @lodeberiasaber' />
        </Link>
        <Link
          href={'https://www.instagram.com/lodeberiasaber/'}
          target={'_blank'}
        >
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
