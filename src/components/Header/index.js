import Image from 'next/image'
import Link from 'next/link'
import logotipo from '../../../public/assets/logotipo.png'

import { HeaderSC } from './styles'
export const Header = () => {
  return (
    <>
      <HeaderSC>
        <nav>
          <Link className={'link-item'} href={'/'}>
            <Image
              width={120}
              height={120}
              alt='logo Lo Deberías Saber'
              src={logotipo}
              priority={''}
            />
          </Link>
          <Link className={'link-item'} href={'/ebook'}>
            E-Book Gratis
          </Link>
        </nav>
      </HeaderSC>
    </>
  )
}
