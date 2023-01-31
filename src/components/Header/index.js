import Image from 'next/image'
import Link from 'next/link'
import logotipo from '../../../public/assets/logotipo.png'

import { NavSC } from './styles'
export const Header = () => {
  return (
    <>
      <NavSC>
        <Link href={'/'}>
          <Image
            width={120}
            height={120}
            alt='logo Lo Deberías Saber'
            src={logotipo}
            priority={''}
          />
        </Link>
        <Link href={'/ebook'}>E-Book Gratis</Link>
      </NavSC>
    </>
  )
}
