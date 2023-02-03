import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'

export const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <Form
        text={'Suscribete para obtener contenido exclusivo'}
        textButton={'SUSCRIBIRTE'}
      />
      <Footer />
    </>
  )
}
